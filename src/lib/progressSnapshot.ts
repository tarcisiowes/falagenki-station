import type { CardState } from './srs'
import type { SrsMap } from './reviewStore'
import type { CustomQuestion } from './customStore'
import type { ExamAttempt } from './examStore'
import type { AnswerMap } from './storage'
import type {
  ProgressCollectionResets,
  ProgressTombstones,
} from './progressMetadata'

export const PROGRESS_SCHEMA_VERSION = 2
export const EXERCISE_SESSION_PREFIX = 'nihongo-br:exercise-session:v1:'

export interface ExerciseSessionRecord {
  tab?: 'estudo' | 'exercicios' | 'audios'
  questionId?: string
  updatedAt: string
}

export interface ProgressSnapshot {
  schemaVersion: number
  updatedAt: string
  answers: AnswerMap
  srs: SrsMap
  custom: CustomQuestion[]
  exams: ExamAttempt[]
  exerciseSessions: Record<string, ExerciseSessionRecord>
  tombstones: ProgressTombstones
  collectionResets: ProgressCollectionResets
}

type RecordMap<T> = Record<string, T>

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

export function createEmptyProgressSnapshot(
  updatedAt = new Date(0).toISOString(),
): ProgressSnapshot {
  return {
    schemaVersion: PROGRESS_SCHEMA_VERSION,
    updatedAt,
    answers: {},
    srs: {},
    custom: [],
    exams: [],
    exerciseSessions: {},
    tombstones: emptyTombstones(),
    collectionResets: emptyCollectionResets(),
  }
}

function timestamp(value: string | number | undefined): number {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0
  if (!value) return 0
  const parsed = Date.parse(value)
  return Number.isNaN(parsed) ? 0 : parsed
}

function latestIso(...values: Array<string | undefined>): string {
  const latest = values.reduce(
    (current, value) => Math.max(current, timestamp(value)),
    0,
  )
  return new Date(latest).toISOString()
}

function latestOptionalIso(
  left: string | undefined,
  right: string | undefined,
): string | undefined {
  if (!left) return right
  if (!right) return left
  return timestamp(right) > timestamp(left) ? right : left
}

function normalizeTombstones(value: unknown): ProgressTombstones {
  const candidate = value && typeof value === 'object'
    ? value as Partial<ProgressTombstones>
    : {}
  return {
    answers: candidate.answers && typeof candidate.answers === 'object' ? candidate.answers : {},
    srs: candidate.srs && typeof candidate.srs === 'object' ? candidate.srs : {},
    custom: candidate.custom && typeof candidate.custom === 'object' ? candidate.custom : {},
    exams: candidate.exams && typeof candidate.exams === 'object' ? candidate.exams : {},
    exerciseSessions:
      candidate.exerciseSessions && typeof candidate.exerciseSessions === 'object'
        ? candidate.exerciseSessions
        : {},
  }
}

function normalizeCollectionResets(value: unknown): ProgressCollectionResets {
  const candidate = value && typeof value === 'object'
    ? value as Partial<ProgressCollectionResets>
    : {}
  return {
    answers: typeof candidate.answers === 'string' ? candidate.answers : undefined,
    srs: typeof candidate.srs === 'string' ? candidate.srs : undefined,
    custom: typeof candidate.custom === 'string' ? candidate.custom : undefined,
    exams: typeof candidate.exams === 'string' ? candidate.exams : undefined,
    exerciseSessions:
      typeof candidate.exerciseSessions === 'string'
        ? candidate.exerciseSessions
        : undefined,
  }
}

export function normalizeProgressSnapshot(value: unknown): ProgressSnapshot {
  if (!value || typeof value !== 'object') return createEmptyProgressSnapshot()
  const candidate = value as Partial<ProgressSnapshot>
  return {
    schemaVersion:
      typeof candidate.schemaVersion === 'number'
        ? candidate.schemaVersion
        : PROGRESS_SCHEMA_VERSION,
    updatedAt:
      typeof candidate.updatedAt === 'string'
        ? candidate.updatedAt
        : new Date(0).toISOString(),
    answers:
      candidate.answers && typeof candidate.answers === 'object'
        ? candidate.answers
        : {},
    srs:
      candidate.srs && typeof candidate.srs === 'object'
        ? candidate.srs
        : {},
    custom: Array.isArray(candidate.custom) ? candidate.custom : [],
    exams: Array.isArray(candidate.exams) ? candidate.exams : [],
    exerciseSessions:
      candidate.exerciseSessions && typeof candidate.exerciseSessions === 'object'
        ? candidate.exerciseSessions
        : {},
    tombstones: normalizeTombstones(candidate.tombstones),
    collectionResets: normalizeCollectionResets(candidate.collectionResets),
  }
}

type MergeCandidate =
  | {
    kind: 'value'
    source: 'local' | 'remote'
    at: number
  }
  | {
    kind: 'deleted'
    source: 'local' | 'remote'
    at: number
    deletedAt: string
  }

function mergeCollection<T>(
  local: RecordMap<T>,
  remote: RecordMap<T>,
  localTombstones: Record<string, string>,
  remoteTombstones: Record<string, string>,
  localReset: string | undefined,
  remoteReset: string | undefined,
  valueTimestamp: (value: T) => string | number | undefined,
): { values: RecordMap<T>; tombstones: Record<string, string> } {
  const values: RecordMap<T> = {}
  const tombstones: Record<string, string> = {}
  const ids = new Set([
    ...Object.keys(local),
    ...Object.keys(remote),
    ...Object.keys(localTombstones),
    ...Object.keys(remoteTombstones),
  ])

  for (const id of ids) {
    const localValue = local[id]
    const remoteValue = remote[id]
    const candidateList: Array<MergeCandidate | undefined> = [
      localValue === undefined
        ? undefined
        : { kind: 'value' as const, source: 'local' as const, at: timestamp(valueTimestamp(localValue)) },
      remoteValue === undefined
        ? undefined
        : { kind: 'value' as const, source: 'remote' as const, at: timestamp(valueTimestamp(remoteValue)) },
      localTombstones[id] === undefined
        ? undefined
        : {
          kind: 'deleted' as const,
          source: 'local' as const,
          at: timestamp(localTombstones[id]),
          deletedAt: localTombstones[id],
        },
      remoteTombstones[id] === undefined
        ? undefined
        : {
          kind: 'deleted' as const,
          source: 'remote' as const,
          at: timestamp(remoteTombstones[id]),
          deletedAt: remoteTombstones[id],
        },
      localValue === undefined && localReset
        ? {
          kind: 'deleted' as const,
          source: 'local' as const,
          at: timestamp(localReset),
          deletedAt: localReset,
        }
        : undefined,
      remoteValue === undefined && remoteReset
        ? {
          kind: 'deleted' as const,
          source: 'remote' as const,
          at: timestamp(remoteReset),
          deletedAt: remoteReset,
        }
        : undefined,
    ]
    const candidates = candidateList.filter(
      (candidate): candidate is MergeCandidate => candidate !== undefined,
    )

    candidates.sort((a, b) => {
      if (a.at !== b.at) return b.at - a.at
      if (a.kind !== b.kind) return a.kind === 'deleted' ? -1 : 1
      return a.source === 'remote' ? -1 : 1
    })

    const winner = candidates[0]
    if (!winner) continue
    if (winner.kind === 'deleted') {
      tombstones[id] = winner.deletedAt
      continue
    }
    values[id] = winner.source === 'local' ? localValue : remoteValue
  }

  return { values, tombstones }
}

function arrayToMap<T extends { id: string }>(items: T[]): RecordMap<T> {
  return Object.fromEntries(items.map((item) => [item.id, item]))
}

export function mergeProgressSnapshots(
  localInput: ProgressSnapshot,
  remoteInput: ProgressSnapshot,
): ProgressSnapshot {
  const local = normalizeProgressSnapshot(localInput)
  const remote = normalizeProgressSnapshot(remoteInput)
  const answers = mergeCollection(
    local.answers,
    remote.answers,
    local.tombstones.answers,
    remote.tombstones.answers,
    local.collectionResets.answers,
    remote.collectionResets.answers,
    (record) => record.updatedAt,
  )
  const srs = mergeCollection<CardState>(
    local.srs,
    remote.srs,
    local.tombstones.srs,
    remote.tombstones.srs,
    local.collectionResets.srs,
    remote.collectionResets.srs,
    (record) => record.syncUpdatedAt ?? record.last,
  )
  const custom = mergeCollection(
    arrayToMap(local.custom),
    arrayToMap(remote.custom),
    local.tombstones.custom,
    remote.tombstones.custom,
    local.collectionResets.custom,
    remote.collectionResets.custom,
    (record) => record.updatedAt ?? record.createdAt,
  )
  const exams = mergeCollection(
    arrayToMap(local.exams),
    arrayToMap(remote.exams),
    local.tombstones.exams,
    remote.tombstones.exams,
    local.collectionResets.exams,
    remote.collectionResets.exams,
    (record) => record.syncUpdatedAt ?? record.finishedAt,
  )
  const exerciseSessions = mergeCollection(
    local.exerciseSessions,
    remote.exerciseSessions,
    local.tombstones.exerciseSessions,
    remote.tombstones.exerciseSessions,
    local.collectionResets.exerciseSessions,
    remote.collectionResets.exerciseSessions,
    (record) => record.updatedAt,
  )

  return {
    schemaVersion: PROGRESS_SCHEMA_VERSION,
    updatedAt: latestIso(local.updatedAt, remote.updatedAt),
    answers: answers.values,
    srs: srs.values,
    custom: Object.values(custom.values).sort(
      (a, b) => timestamp(a.createdAt) - timestamp(b.createdAt),
    ),
    exams: Object.values(exams.values).sort(
      (a, b) => timestamp(b.finishedAt) - timestamp(a.finishedAt),
    ),
    exerciseSessions: exerciseSessions.values,
    tombstones: {
      answers: answers.tombstones,
      srs: srs.tombstones,
      custom: custom.tombstones,
      exams: exams.tombstones,
      exerciseSessions: exerciseSessions.tombstones,
    },
    collectionResets: {
      answers: latestOptionalIso(
        local.collectionResets.answers,
        remote.collectionResets.answers,
      ),
      srs: latestOptionalIso(
        local.collectionResets.srs,
        remote.collectionResets.srs,
      ),
      custom: latestOptionalIso(
        local.collectionResets.custom,
        remote.collectionResets.custom,
      ),
      exams: latestOptionalIso(
        local.collectionResets.exams,
        remote.collectionResets.exams,
      ),
      exerciseSessions: latestOptionalIso(
        local.collectionResets.exerciseSessions,
        remote.collectionResets.exerciseSessions,
      ),
    },
  }
}

export function hasProgress(snapshot: ProgressSnapshot): boolean {
  return (
    Object.keys(snapshot.answers).length > 0 ||
    Object.keys(snapshot.srs).length > 0 ||
    snapshot.custom.length > 0 ||
    snapshot.exams.length > 0 ||
    Object.keys(snapshot.exerciseSessions).length > 0
  )
}
