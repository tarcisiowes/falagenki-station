import { describe, expect, it, vi } from 'vitest'
import {
  synchronizeProgressWithRetry,
  type ProgressRemoteStore,
} from './progressRemote'
import {
  createEmptyProgressSnapshot,
  type ProgressSnapshot,
} from './progressSnapshot'

function snapshot(patch: Partial<ProgressSnapshot>): ProgressSnapshot {
  return {
    ...createEmptyProgressSnapshot('2026-07-01T00:00:00.000Z'),
    ...patch,
  }
}

describe('remote progress synchronization', () => {
  it('retries a conditional write and preserves the concurrent device update', async () => {
    const firstRemote = snapshot({})
    const concurrentRemote = snapshot({
      answers: {
        remote: {
          selected: 2,
          updatedAt: Date.parse('2026-07-03T00:00:00Z'),
        },
      },
    })
    const store: ProgressRemoteStore = {
      read: vi
        .fn()
        .mockResolvedValueOnce({ snapshot: firstRemote, version: 'v1' })
        .mockResolvedValueOnce({ snapshot: concurrentRemote, version: 'v2' }),
      writeIfVersion: vi
        .fn()
        .mockResolvedValueOnce(false)
        .mockResolvedValueOnce(true),
    }
    const local = snapshot({
      answers: {
        local: {
          selected: 1,
          updatedAt: Date.parse('2026-07-02T00:00:00Z'),
        },
      },
    })

    const result = await synchronizeProgressWithRetry({
      store,
      userId: 'user-1',
      getLocalSnapshot: () => local,
    })

    expect(result.answers.local.selected).toBe(1)
    expect(result.answers.remote.selected).toBe(2)
    expect(store.writeIfVersion).toHaveBeenCalledTimes(2)
    expect(store.writeIfVersion).toHaveBeenLastCalledWith(
      'user-1',
      expect.objectContaining({
        answers: expect.objectContaining({
          local: expect.any(Object),
          remote: expect.any(Object),
        }),
      }),
      'v2',
    )
  })

  it('checks account activity again after a remote read', async () => {
    let active = true
    const store: ProgressRemoteStore = {
      read: vi.fn(async () => {
        active = false
        return undefined
      }),
      writeIfVersion: vi.fn(),
    }

    await expect(
      synchronizeProgressWithRetry({
        store,
        userId: 'user-1',
        getLocalSnapshot: () => snapshot({}),
        assertActive: () => {
          if (!active) throw new Error('inactive')
        },
      }),
    ).rejects.toThrow('inactive')
    expect(store.writeIfVersion).not.toHaveBeenCalled()
  })
})
