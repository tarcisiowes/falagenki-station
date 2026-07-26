import {
  mergeProgressSnapshots,
  normalizeProgressSnapshot,
  type ProgressSnapshot,
} from './progressSnapshot'

export interface RemoteProgressRecord {
  snapshot: ProgressSnapshot
  version: string
}

export interface ProgressRemoteStore {
  read: (userId: string) => Promise<RemoteProgressRecord | undefined>
  writeIfVersion: (
    userId: string,
    snapshot: ProgressSnapshot,
    expectedVersion: string | undefined,
  ) => Promise<boolean>
}

export class ProgressSyncCancelledError extends Error {
  constructor() {
    super('Progress synchronization was cancelled.')
    this.name = 'ProgressSyncCancelledError'
  }
}

export class ProgressWriteConflictError extends Error {
  constructor() {
    super('Progress changed repeatedly while it was being synchronized.')
    this.name = 'ProgressWriteConflictError'
  }
}

function nextSnapshotTimestamp(snapshot: ProgressSnapshot): string {
  const current = Date.parse(snapshot.updatedAt)
  return new Date(
    Math.max(Date.now(), Number.isNaN(current) ? 0 : current + 1),
  ).toISOString()
}

export async function synchronizeProgressWithRetry({
  store,
  userId,
  getLocalSnapshot,
  assertActive = () => undefined,
  maxAttempts = 5,
}: {
  store: ProgressRemoteStore
  userId: string
  getLocalSnapshot: () => ProgressSnapshot
  assertActive?: () => void
  maxAttempts?: number
}): Promise<ProgressSnapshot> {
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    assertActive()
    const remote = await store.read(userId)
    assertActive()

    const local = normalizeProgressSnapshot(getLocalSnapshot())
    const merged = remote
      ? mergeProgressSnapshots(local, remote.snapshot)
      : local
    const synchronized = {
      ...merged,
      updatedAt: nextSnapshotTimestamp(merged),
    }

    const written = await store.writeIfVersion(
      userId,
      synchronized,
      remote?.version,
    )
    assertActive()
    if (written) return synchronized
  }

  throw new ProgressWriteConflictError()
}
