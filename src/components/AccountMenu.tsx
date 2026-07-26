import { useEffect, useRef, useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import {
  CheckCircle2,
  Cloud,
  CloudOff,
  LoaderCircle,
  LogOut,
  Mail,
  RefreshCw,
  UserRound,
  X,
} from 'lucide-react'
import { useProgressSync, type ProgressSyncStatus } from '../auth/ProgressSyncProvider'

const STATUS_LABEL: Record<ProgressSyncStatus, string> = {
  local: 'Somente neste dispositivo',
  loading: 'Carregando sessão',
  syncing: 'Sincronizando',
  synced: 'Progresso sincronizado',
  offline: 'Offline — salvo no dispositivo',
  error: 'Falha ao sincronizar',
}

function StatusIcon({ status }: { status: ProgressSyncStatus }) {
  if (status === 'syncing' || status === 'loading') {
    return <LoaderCircle className="spin" size={15} />
  }
  if (status === 'synced') return <CheckCircle2 size={15} />
  if (status === 'offline' || status === 'error') return <CloudOff size={15} />
  return <Cloud size={15} />
}

export function AccountMenu() {
  const {
    user,
    authReady,
    syncStatus,
    lastSyncedAt,
    syncError,
    sendCode,
    verifyCode,
    signOut,
    syncNow,
  } = useProgressSync()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [pending, setPending] = useState(false)
  const [formError, setFormError] = useState<string>()
  const [notice, setNotice] = useState<string>()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    const appRoot = document.getElementById('root')
    appRoot?.setAttribute('inert', '')
    const focusFrame = window.requestAnimationFrame(() => {
      const initialFocus =
        modalRef.current?.querySelector<HTMLElement>('input:not([disabled])')
        ?? modalRef.current?.querySelector<HTMLElement>('button:not([disabled])')
      initialFocus?.focus()
    })

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }
      if (event.key !== 'Tab') return

      const focusable = Array.from(
        modalRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => !element.hasAttribute('hidden'))
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      } else if (!modalRef.current?.contains(document.activeElement)) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', handleKeyDown)
      appRoot?.removeAttribute('inert')
      if (returnFocusRef.current?.isConnected) {
        returnFocusRef.current.focus()
      } else {
        triggerRef.current?.focus()
      }
      returnFocusRef.current = null
    }
  }, [open])

  useEffect(() => {
    if (!user) return
    setEmail(user.email ?? '')
    setCode('')
    setCodeSent(false)
    setFormError(undefined)
    setNotice(undefined)
  }, [user])

  async function requestCode(event?: FormEvent) {
    event?.preventDefault()
    setPending(true)
    setFormError(undefined)
    setNotice(undefined)
    try {
      await sendCode(email)
      setCodeSent(true)
      setNotice('Código enviado. Confira também a pasta de spam.')
    } catch (error) {
      setFormError((error as Error).message)
    } finally {
      setPending(false)
    }
  }

  async function confirmCode(event: FormEvent) {
    event.preventDefault()
    setPending(true)
    setFormError(undefined)
    try {
      await verifyCode(email, code)
      setNotice('Login concluído. Seu progresso está sendo sincronizado.')
    } catch (error) {
      setFormError((error as Error).message)
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="account-menu-root">
      <button
        ref={triggerRef}
        className={`account-trigger ${user ? `is-signed-in status-${syncStatus}` : ''}`}
        type="button"
        onClick={() => {
          returnFocusRef.current =
            document.activeElement instanceof HTMLElement
              ? document.activeElement
              : triggerRef.current
          setOpen(true)
        }}
        aria-label={user ? `Conta ${user.email}` : 'Entrar para sincronizar o progresso'}
      >
        {user ? <StatusIcon status={syncStatus} /> : <UserRound size={17} />}
        <span>{user ? 'Conta' : 'Entrar'}</span>
      </button>

      {open && createPortal(
        <div className="account-modal-backdrop" role="presentation" onPointerDown={() => setOpen(false)}>
          <section
            ref={modalRef}
            className="account-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="account-modal-title"
            aria-describedby={!user ? 'account-modal-description' : undefined}
            onPointerDown={(event) => event.stopPropagation()}
          >
            <div className="account-modal-head">
              <div>
                <span className="account-eyebrow"><Cloud size={14} /> Progresso na nuvem</span>
                <h2 id="account-modal-title">{user ? 'Sua conta' : 'Entrar sem senha'}</h2>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Fechar">
                <X size={19} />
              </button>
            </div>

            {!authReady ? (
              <div className="account-loading"><LoaderCircle className="spin" /> Carregando sessão…</div>
            ) : user ? (
              <div className="account-session">
                <div className="account-email">
                  <UserRound size={18} />
                  <div>
                    <b>{user.email}</b>
                    <span>Seu progresso local fica vinculado a esta conta.</span>
                  </div>
                </div>
                <div
                  className={`account-sync-state ${syncStatus}`}
                  role="status"
                  aria-live="polite"
                >
                  <StatusIcon status={syncStatus} />
                  <div>
                    <b>{STATUS_LABEL[syncStatus]}</b>
                    {lastSyncedAt && syncStatus === 'synced' && (
                      <span>
                        Última sincronização: {new Date(lastSyncedAt).toLocaleString('pt-BR')}
                      </span>
                    )}
                    {syncError && <span>{syncError}</span>}
                  </div>
                </div>
                <p className="account-hint">
                  Alterações são salvas primeiro neste dispositivo e enviadas automaticamente
                  quando houver internet.
                </p>
                <div className="account-modal-actions">
                  <button
                    className="btn primary"
                    type="button"
                    onClick={() => void syncNow()}
                    disabled={syncStatus === 'syncing'}
                  >
                    <RefreshCw size={16} /> Sincronizar
                  </button>
                  <button
                    className="btn ghost"
                    type="button"
                    onClick={async () => {
                      setPending(true)
                      setFormError(undefined)
                      try {
                        await signOut()
                        setOpen(false)
                      } catch (error) {
                        setFormError((error as Error).message)
                      } finally {
                        setPending(false)
                      }
                    }}
                    disabled={pending}
                  >
                    <LogOut size={16} /> Sair
                  </button>
                </div>
                {formError && (
                  <div id="account-form-error" className="account-error" role="alert">
                    {formError}
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={codeSent ? confirmCode : requestCode}>
                <p className="account-intro" id="account-modal-description">
                  Informe seu e-mail. Você receberá um código de 6 números para entrar e manter
                  respostas, revisões e simulados sincronizados.
                </p>
                <label className="account-field">
                  <span>E-mail</span>
                  <div>
                    <Mail size={17} />
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      autoComplete="email"
                      inputMode="email"
                      placeholder="voce@exemplo.com"
                      disabled={codeSent || pending}
                      aria-describedby={formError ? 'account-form-error' : undefined}
                      aria-invalid={Boolean(formError)}
                      required
                      autoFocus
                    />
                  </div>
                </label>

                {codeSent && (
                  <label className="account-field">
                    <span>Código de acesso</span>
                    <input
                      className="account-code"
                      type="text"
                      value={code}
                      onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))}
                      autoComplete="one-time-code"
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      placeholder="000000"
                      aria-describedby={formError ? 'account-form-error' : undefined}
                      aria-invalid={Boolean(formError)}
                      required
                      autoFocus
                    />
                  </label>
                )}

                {notice && (
                  <div className="account-notice" role="status" aria-live="polite">
                    {notice}
                  </div>
                )}
                {(formError || syncError) && (
                  <div id="account-form-error" className="account-error" role="alert">
                    {formError ?? syncError}
                  </div>
                )}

                <button className="btn primary account-submit" type="submit" disabled={pending}>
                  {pending
                    ? <><LoaderCircle className="spin" size={17} /> Aguarde…</>
                    : codeSent
                      ? 'Confirmar código'
                      : 'Enviar código'}
                </button>

                {codeSent && (
                  <div className="account-secondary-actions">
                    <button
                      type="button"
                      onClick={() => {
                        setCodeSent(false)
                        setCode('')
                        setNotice(undefined)
                        setFormError(undefined)
                      }}
                    >
                      Trocar e-mail
                    </button>
                    <button type="button" onClick={() => void requestCode()} disabled={pending}>
                      Reenviar código
                    </button>
                  </div>
                )}
              </form>
            )}
          </section>
        </div>,
        document.body,
      )}
    </div>
  )
}
