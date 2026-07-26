export type ProgressCollection =
  | 'answers'
  | 'srs'
  | 'custom'
  | 'exams'
  | 'exerciseSessions'

export type ProgressTombstones = Record<ProgressCollection, Record<string, string>>
export type ProgressCollectionResets = Record<
  ProgressCollection,
  string | undefined
>

export interface ProgressMetadata {
  lastChangedAt: string
  tombstones: ProgressTombstones
  collectionResets: ProgressCollectionResets
}

const STORAGE_KEY = 'nihongo-br:progress-sync-meta:v1'
export const PROGRESS_CHANGED_EVENT = 'nihongo-br:progress-changed'

function emptyTombstones(): ProgressTombstones {
  return {
    answers: {},
    srs: {},
    custom: {},
    exams: {},
    exerciseSessions: {},
  }
}

function emptyCollectionResets(): ProgressCollectionResets {
  return {
    answers: undefined,
    srs: undefined,
    custom: undefined,
    exams: undefined,
    exerciseSessions: undefined,
  }
}

function emptyMetadata(): ProgressMetadata {
  return {
    lastChangedAt: new Date(0).toISOString(),
    tombstones: emptyTombstones(),
    collectionResets: emptyCollectionResets(),
  }
}

function readMetadata(): ProgressMetadata {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyMetadata()
    const parsed = JSON.parse(raw) as Partial<ProgressMetadata>
    return {
      lastChangedAt: parsed.lastChangedAt ?? new Date(0).toISOString(),
      tombstones: {
        ...emptyTombstones(),
        ...parsed.tombstones,
      },
      collectionResets: {
        ...emptyCollectionResets(),
        ...parsed.collectionResets,
      },
    }
  } catch {
    return emptyMetadata()
  }
}

let metadata = readMetadata()

function persist(notify: boolean) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(metadata))
  } catch {
    // The in-memory metadata still protects the current session.
  }
  if (notify && typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT))
  }
}

export function getProgressMetadata(): ProgressMetadata {
  return {
    lastChangedAt: metadata.lastChangedAt,
    tombstones: {
      answers: { ...metadata.tombstones.answers },
      srs: { ...metadata.tombstones.srs },
      custom: { ...metadata.tombstones.custom },
      exams: { ...metadata.tombstones.exams },
      exerciseSessions: { ...metadata.tombstones.exerciseSessions },
    },
    collectionResets: { ...metadata.collectionResets },
  }
}

export function replaceProgressMetadata(next: ProgressMetadata) {
  metadata = {
    lastChangedAt: next.lastChangedAt,
    tombstones: {
      answers: { ...next.tombstones.answers },
      srs: { ...next.tombstones.srs },
      custom: { ...next.tombstones.custom },
      exams: { ...next.tombstones.exams },
      exerciseSessions: { ...next.tombstones.exerciseSessions },
    },
    collectionResets: {
      ...emptyCollectionResets(),
      ...next.collectionResets,
    },
  }
  persist(false)
}

export function markProgressUpsert(
  collection: ProgressCollection,
  id: string,
  changedAt = new Date().toISOString(),
) {
  const tombstones = { ...metadata.tombstones[collection] }
  delete tombstones[id]
  metadata = {
    lastChangedAt: changedAt,
    tombstones: {
      ...metadata.tombstones,
      [collection]: tombstones,
    },
    collectionResets: metadata.collectionResets,
  }
  persist(true)
}

export function markProgressDeletion(
  collection: ProgressCollection,
  id: string,
  changedAt = new Date().toISOString(),
) {
  metadata = {
    lastChangedAt: changedAt,
    tombstones: {
      ...metadata.tombstones,
      [collection]: {
        ...metadata.tombstones[collection],
        [id]: changedAt,
      },
    },
    collectionResets: metadata.collectionResets,
  }
  persist(true)
}

export function markProgressCollectionReset(
  collection: ProgressCollection,
  changedAt = new Date().toISOString(),
) {
  metadata = {
    lastChangedAt: changedAt,
    tombstones: metadata.tombstones,
    collectionResets: {
      ...metadata.collectionResets,
      [collection]: changedAt,
    },
  }
  persist(true)
}
