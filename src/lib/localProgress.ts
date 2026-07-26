import { customStore } from './customStore'
import { examStore } from './examStore'
import {
  getProgressMetadata,
  replaceProgressMetadata,
} from './progressMetadata'
import {
  createEmptyProgressSnapshot,
  EXERCISE_SESSION_PREFIX,
  mergeProgressSnapshots,
  normalizeProgressSnapshot,
  type ExerciseSessionRecord,
  type ProgressSnapshot,
} from './progressSnapshot'
import { srsStore } from './reviewStore'
import { getAnswers, replaceAnswers } from './storage'

const OWNER_KEY = 'nihongo-br:progress-owner:v1'
const CACHE_PREFIX = 'nihongo-br:progress-cache:v1:'
export const GUEST_PROGRESS_OWNER = 'guest'

function readProgressOwner(): string {
  try {
    return localStorage.getItem(OWNER_KEY) ?? GUEST_PROGRESS_OWNER
  } catch {
    return GUEST_PROGRESS_OWNER
  }
}

let progressOwner = readProgressOwner()

function readExerciseSessions(): Record<string, ExerciseSessionRecord> {
  const sessions: Record<string, ExerciseSessionRecord> = {}
  const fallbackUpdatedAt = getProgressMetadata().lastChangedAt
  try {
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index)
      if (!key?.startsWith(EXERCISE_SESSION_PREFIX)) continue
      const parsed = JSON.parse(localStorage.getItem(key) ?? '{}')
      if (!parsed || typeof parsed !== 'object') continue
      sessions[key] = {
        ...(parsed as Omit<ExerciseSessionRecord, 'updatedAt'>),
        updatedAt:
          typeof parsed.updatedAt === 'string'
            ? parsed.updatedAt
            : fallbackUpdatedAt,
      }
    }
  } catch {
    // A browser can disable local storage while the in-memory stores still work.
  }
  return sessions
}

function replaceExerciseSessions(sessions: Record<string, ExerciseSessionRecord>) {
  try {
    const existingKeys: string[] = []
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index)
      if (key?.startsWith(EXERCISE_SESSION_PREFIX)) existingKeys.push(key)
    }
    existingKeys.forEach((key) => localStorage.removeItem(key))
    Object.entries(sessions).forEach(([key, value]) => {
      if (!key.startsWith(EXERCISE_SESSION_PREFIX)) return
      localStorage.setItem(key, JSON.stringify(value))
    })
  } catch {
    // The section will fall back to the latest completed exercise.
  }
}

export function collectLocalProgress(): ProgressSnapshot {
  const metadata = getProgressMetadata()
  return {
    schemaVersion: 1,
    updatedAt: metadata.lastChangedAt,
    answers: { ...getAnswers() },
    srs: { ...srsStore.get() },
    custom: [...customStore.get()],
    exams: [...examStore.get()],
    exerciseSessions: readExerciseSessions(),
    tombstones: metadata.tombstones,
    collectionResets: metadata.collectionResets,
  }
}

export function replaceLocalProgress(snapshotInput: ProgressSnapshot) {
  const snapshot = normalizeProgressSnapshot(snapshotInput)
  replaceAnswers(snapshot.answers)
  srsStore.set(snapshot.srs)
  customStore.set(snapshot.custom)
  examStore.set(snapshot.exams)
  replaceExerciseSessions(snapshot.exerciseSessions)
  replaceProgressMetadata({
    lastChangedAt: snapshot.updatedAt,
    tombstones: snapshot.tombstones,
    collectionResets: snapshot.collectionResets,
  })
}

export function getProgressOwner(): string {
  return progressOwner
}

export function setProgressOwner(userId: string) {
  progressOwner = userId
  try {
    localStorage.setItem(OWNER_KEY, userId)
  } catch {
    // The authenticated session still prevents cross-user server access.
  }
}

export function cacheProgress(ownerId: string, snapshot = collectLocalProgress()) {
  try {
    localStorage.setItem(`${CACHE_PREFIX}${ownerId}`, JSON.stringify(snapshot))
  } catch {
    // The active local stores remain the primary offline cache.
  }
}

export function readCachedProgress(ownerId: string): ProgressSnapshot | undefined {
  try {
    const raw = localStorage.getItem(`${CACHE_PREFIX}${ownerId}`)
    return raw ? normalizeProgressSnapshot(JSON.parse(raw)) : undefined
  } catch {
    return undefined
  }
}

export function progressForNewOwner(userId: string): ProgressSnapshot {
  return readCachedProgress(userId) ?? createEmptyProgressSnapshot()
}

export function clearCachedProgress(ownerId: string) {
  try {
    localStorage.removeItem(`${CACHE_PREFIX}${ownerId}`)
  } catch {
    // An unavailable cache does not affect the active in-memory stores.
  }
}

export function switchProgressOwner(
  nextOwner: string,
  adoptGuestProgress = false,
): ProgressSnapshot {
  const currentOwner = getProgressOwner()
  if (currentOwner === nextOwner) return collectLocalProgress()

  const currentSnapshot = collectLocalProgress()
  cacheProgress(currentOwner, currentSnapshot)
  let nextSnapshot = progressForNewOwner(nextOwner)

  if (adoptGuestProgress && currentOwner === GUEST_PROGRESS_OWNER) {
    nextSnapshot = mergeProgressSnapshots(nextSnapshot, currentSnapshot)
    clearCachedProgress(GUEST_PROGRESS_OWNER)
  }

  setProgressOwner(nextOwner)
  replaceLocalProgress(nextSnapshot)
  cacheProgress(nextOwner, nextSnapshot)
  return nextSnapshot
}
