import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { customStore } from '../lib/customStore'
import { examStore } from '../lib/examStore'
import {
  cacheProgress,
  collectLocalProgress,
  getProgressOwner,
  GUEST_PROGRESS_OWNER,
  replaceLocalProgress,
  switchProgressOwner,
} from '../lib/localProgress'
import { PROGRESS_CHANGED_EVENT } from '../lib/progressMetadata'
import {
  ProgressSyncCancelledError,
  ProgressWriteConflictError,
  synchronizeProgressWithRetry,
  type ProgressRemoteStore,
} from '../lib/progressRemote'
import {
  mergeProgressSnapshots,
  normalizeProgressSnapshot,
  type ProgressSnapshot,
} from '../lib/progressSnapshot'
import { srsStore } from '../lib/reviewStore'
import { subscribeAnswers } from '../lib/storage'
import { supabase } from '../lib/supabaseClient'

export type ProgressSyncStatus =
  | 'local'
  | 'loading'
  | 'syncing'
  | 'synced'
  | 'offline'
  | 'error'

interface ProgressSyncContextValue {
  user: User | null
  authReady: boolean
  syncStatus: ProgressSyncStatus
  lastSyncedAt?: string
  syncError?: string
  sendCode: (email: string) => Promise<void>
  verifyCode: (email: string, code: string) => Promise<void>
  signOut: () => Promise<void>
  syncNow: () => Promise<void>
}

const ProgressSyncContext = createContext<ProgressSyncContextValue | undefined>(undefined)
const SYNC_DELAY_MS = 900

function authMessage(error: unknown): string {
  if (error instanceof ProgressWriteConflictError) {
    return 'O progresso mudou em outro dispositivo. Tente sincronizar novamente.'
  }
  const message = error instanceof Error ? error.message : String(error)
  const normalized = message.toLowerCase()
  if (normalized.includes('rate limit') || normalized.includes('security purposes')) {
    return 'Aguarde um minuto antes de solicitar outro código.'
  }
  if (normalized.includes('expired') || normalized.includes('invalid')) {
    return 'O código é inválido ou expirou. Solicite um novo código.'
  }
  if (normalized.includes('fetch') || normalized.includes('network')) {
    return 'Sem conexão com o serviço. Confira a internet e tente novamente.'
  }
  return 'Não foi possível concluir a operação. Tente novamente.'
}

function nextRemoteVersion(expectedVersion: string | undefined): string {
  const previous = expectedVersion ? Date.parse(expectedVersion) : Number.NaN
  return new Date(
    Math.max(Date.now(), Number.isNaN(previous) ? 0 : previous + 1),
  ).toISOString()
}

const progressRemoteStore: ProgressRemoteStore = {
  async read(userId) {
    const { data, error } = await supabase
      .from('user_progress')
      .select('payload, updated_at')
      .eq('user_id', userId)
      .maybeSingle()
    if (error) throw error
    if (!data) return undefined
    return {
      snapshot: normalizeProgressSnapshot(data.payload),
      version: data.updated_at,
    }
  },

  async writeIfVersion(userId, snapshot, expectedVersion) {
    const row = {
      user_id: userId,
      payload: snapshot,
      client_updated_at: snapshot.updatedAt,
      updated_at: nextRemoteVersion(expectedVersion),
    }

    if (!expectedVersion) {
      const { error } = await supabase.from('user_progress').insert(row)
      if (error?.code === '23505') return false
      if (error) throw error
      return true
    }

    const { data, error } = await supabase
      .from('user_progress')
      .update(row)
      .eq('user_id', userId)
      .eq('updated_at', expectedVersion)
      .select('user_id')
    if (error) throw error
    return data.length === 1
  },
}

export function ProgressSyncProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [authReady, setAuthReady] = useState(false)
  const [syncStatus, setSyncStatus] = useState<ProgressSyncStatus>('loading')
  const [lastSyncedAt, setLastSyncedAt] = useState<string>()
  const [syncError, setSyncError] = useState<string>()
  const activeUserRef = useRef<string>()
  const accountGenerationRef = useRef(0)
  const hydrationRef = useRef(false)
  const syncTimerRef = useRef<number>()
  const syncRunRef = useRef<{
    userId: string
    generation: number
    promise: Promise<void>
  }>()
  const syncQueuedRef = useRef(false)

  const isActiveAccount = useCallback((userId: string, generation: number) => (
    activeUserRef.current === userId
    && accountGenerationRef.current === generation
    && getProgressOwner() === userId
  ), [])

  const replaceOwnerProgress = useCallback((
    nextOwner: string,
    adoptGuestProgress: boolean,
  ) => {
    hydrationRef.current = true
    try {
      switchProgressOwner(nextOwner, adoptGuestProgress)
    } finally {
      hydrationRef.current = false
    }
  }, [])

  const syncNow = useCallback(async () => {
    const userId = activeUserRef.current
    const generation = accountGenerationRef.current
    if (!userId) return
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setSyncStatus('offline')
      return
    }

    const currentRun = syncRunRef.current
    if (
      currentRun
      && currentRun.userId === userId
      && currentRun.generation === generation
    ) {
      syncQueuedRef.current = true
      return currentRun.promise
    }

    syncQueuedRef.current = false
    const run = (async () => {
      setSyncStatus('syncing')
      setSyncError(undefined)
      try {
        const synchronized = await synchronizeProgressWithRetry({
          store: progressRemoteStore,
          userId,
          getLocalSnapshot: collectLocalProgress,
          assertActive: () => {
            if (!isActiveAccount(userId, generation)) {
              throw new ProgressSyncCancelledError()
            }
          },
        })
        if (!isActiveAccount(userId, generation)) return

        // Keep edits made while the final request was in flight. Their store
        // notifications will schedule one more upload after this run.
        const reconciled = mergeProgressSnapshots(
          collectLocalProgress(),
          synchronized,
        )
        hydrationRef.current = true
        try {
          replaceLocalProgress(reconciled)
        } finally {
          hydrationRef.current = false
        }
        cacheProgress(userId, reconciled)
        setLastSyncedAt(synchronized.updatedAt)
        setSyncStatus('synced')
      } catch (error) {
        hydrationRef.current = false
        if (
          error instanceof ProgressSyncCancelledError
          || !isActiveAccount(userId, generation)
        ) {
          return
        }
        cacheProgress(userId)
        setSyncError(authMessage(error))
        setSyncStatus(
          typeof navigator !== 'undefined' && !navigator.onLine
            ? 'offline'
            : 'error',
        )
      }
    })()

    const activeRun = { userId, generation, promise: run }
    syncRunRef.current = activeRun
    try {
      await run
    } finally {
      if (syncRunRef.current !== activeRun) return
      syncRunRef.current = undefined
      if (syncQueuedRef.current && isActiveAccount(userId, generation)) {
        syncQueuedRef.current = false
        window.clearTimeout(syncTimerRef.current)
        syncTimerRef.current = window.setTimeout(() => {
          void syncNow()
        }, SYNC_DELAY_MS)
      }
    }
  }, [isActiveAccount])

  const scheduleSync = useCallback(() => {
    if (!activeUserRef.current || hydrationRef.current) return
    window.clearTimeout(syncTimerRef.current)
    syncTimerRef.current = window.setTimeout(() => {
      void syncNow()
    }, SYNC_DELAY_MS)
  }, [syncNow])

  useEffect(() => {
    let mounted = true
    void supabase.auth.getSession().then(({ data, error }) => {
      if (!mounted) return
      if (error) setSyncError(authMessage(error))
      setSession(data.session)
      setAuthReady(true)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
      setAuthReady(true)
    })
    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (!authReady) return

    const generation = accountGenerationRef.current + 1
    accountGenerationRef.current = generation
    syncQueuedRef.current = false
    window.clearTimeout(syncTimerRef.current)
    setLastSyncedAt(undefined)
    setSyncError(undefined)

    const userId = session?.user.id
    if (!userId) {
      activeUserRef.current = undefined
      replaceOwnerProgress(GUEST_PROGRESS_OWNER, false)
      setSyncStatus('local')
      return
    }

    const currentOwner = getProgressOwner()
    replaceOwnerProgress(userId, currentOwner === GUEST_PROGRESS_OWNER)
    activeUserRef.current = userId
    setSyncStatus('syncing')
    void syncNow()

    return () => {
      if (accountGenerationRef.current === generation) {
        accountGenerationRef.current += 1
        activeUserRef.current = undefined
      }
    }
  }, [authReady, replaceOwnerProgress, session?.user.id, syncNow])

  useEffect(() => {
    function localChanged() {
      if (hydrationRef.current) return
      const owner = getProgressOwner()
      cacheProgress(owner)
      if (owner === activeUserRef.current) scheduleSync()
    }

    const unsubscribers = [
      subscribeAnswers(localChanged),
      srsStore.subscribe(localChanged),
      customStore.subscribe(localChanged),
      examStore.subscribe(localChanged),
    ]
    window.addEventListener(PROGRESS_CHANGED_EVENT, localChanged)
    const online = () => {
      if (activeUserRef.current) void syncNow()
    }
    const offline = () => {
      if (activeUserRef.current) setSyncStatus('offline')
    }
    const visibilityChanged = () => {
      if (!activeUserRef.current) return
      if (document.visibilityState === 'hidden') {
        void syncNow()
      } else {
        scheduleSync()
      }
    }
    const pageHide = () => {
      if (activeUserRef.current) void syncNow()
    }
    window.addEventListener('online', online)
    window.addEventListener('offline', offline)
    window.addEventListener('pagehide', pageHide)
    document.addEventListener('visibilitychange', visibilityChanged)
    return () => {
      unsubscribers.forEach((unsubscribe) => unsubscribe())
      window.removeEventListener(PROGRESS_CHANGED_EVENT, localChanged)
      window.removeEventListener('online', online)
      window.removeEventListener('offline', offline)
      window.removeEventListener('pagehide', pageHide)
      document.removeEventListener('visibilitychange', visibilityChanged)
      window.clearTimeout(syncTimerRef.current)
    }
  }, [scheduleSync, syncNow])

  const sendCode = useCallback(async (email: string) => {
    const normalizedEmail = email.trim().toLowerCase()
    if (!normalizedEmail) throw new Error('Informe seu e-mail.')
    const { error } = await supabase.auth.signInWithOtp({
      email: normalizedEmail,
      options: { shouldCreateUser: true },
    })
    if (error) throw new Error(authMessage(error))
  }, [])

  const verifyCode = useCallback(async (email: string, code: string) => {
    const normalizedEmail = email.trim().toLowerCase()
    const token = code.replace(/\D/g, '')
    if (token.length !== 6) throw new Error('Digite o código de 6 números.')
    const { data, error } = await supabase.auth.verifyOtp({
      email: normalizedEmail,
      token,
      type: 'email',
    })
    if (error) throw new Error(authMessage(error))
    if (!data.session) throw new Error('Não foi possível iniciar a sessão.')
    setSession(data.session)
  }, [])

  const signOut = useCallback(async () => {
    const userId = activeUserRef.current
    await syncNow()
    if (userId && getProgressOwner() === userId) cacheProgress(userId)

    const { error } = await supabase.auth.signOut({ scope: 'local' })
    if (error) throw new Error(authMessage(error))

    accountGenerationRef.current += 1
    activeUserRef.current = undefined
    replaceOwnerProgress(GUEST_PROGRESS_OWNER, false)
    setSession(null)
    setLastSyncedAt(undefined)
    setSyncError(undefined)
    setSyncStatus('local')
  }, [replaceOwnerProgress, syncNow])

  const value = useMemo<ProgressSyncContextValue>(
    () => ({
      user: session?.user ?? null,
      authReady,
      syncStatus,
      lastSyncedAt,
      syncError,
      sendCode,
      verifyCode,
      signOut,
      syncNow,
    }),
    [
      authReady,
      lastSyncedAt,
      sendCode,
      session?.user,
      signOut,
      syncError,
      syncNow,
      syncStatus,
      verifyCode,
    ],
  )

  return (
    <ProgressSyncContext.Provider value={value}>
      {children}
    </ProgressSyncContext.Provider>
  )
}

export function useProgressSync(): ProgressSyncContextValue {
  const value = useContext(ProgressSyncContext)
  if (!value) throw new Error('useProgressSync must be used inside ProgressSyncProvider')
  return value
}
