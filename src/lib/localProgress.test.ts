import { afterEach, describe, expect, it, vi } from 'vitest'

class MemoryStorage implements Storage {
  private readonly values = new Map<string, string>()

  get length() {
    return this.values.size
  }

  clear() {
    this.values.clear()
  }

  getItem(key: string) {
    return this.values.get(key) ?? null
  }

  key(index: number) {
    return [...this.values.keys()][index] ?? null
  }

  removeItem(key: string) {
    this.values.delete(key)
  }

  setItem(key: string, value: string) {
    this.values.set(key, value)
  }
}

describe('local progress ownership', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.resetModules()
  })

  it('adopts guest work on login and hides account data after logout', async () => {
    vi.stubGlobal('localStorage', new MemoryStorage())
    vi.resetModules()

    const localProgress = await import('./localProgress')
    const { createEmptyProgressSnapshot } = await import('./progressSnapshot')

    localProgress.replaceLocalProgress({
      ...createEmptyProgressSnapshot('2026-07-01T00:00:00.000Z'),
      answers: {
        guest: { selected: 1, updatedAt: Date.parse('2026-07-01T00:00:00Z') },
      },
    })

    localProgress.switchProgressOwner('user-a', true)
    expect(localProgress.collectLocalProgress().answers.guest.selected).toBe(1)

    localProgress.replaceLocalProgress({
      ...createEmptyProgressSnapshot('2026-07-02T00:00:00.000Z'),
      answers: {
        accountA: { selected: 2, updatedAt: Date.parse('2026-07-02T00:00:00Z') },
      },
    })
    localProgress.switchProgressOwner(localProgress.GUEST_PROGRESS_OWNER)

    expect(localProgress.getProgressOwner()).toBe(localProgress.GUEST_PROGRESS_OWNER)
    expect(localProgress.collectLocalProgress().answers).toEqual({})
    expect(localProgress.readCachedProgress('user-a')?.answers.accountA.selected).toBe(2)

    localProgress.replaceLocalProgress({
      ...createEmptyProgressSnapshot('2026-07-03T00:00:00.000Z'),
      answers: {
        nextGuest: { selected: 3, updatedAt: Date.parse('2026-07-03T00:00:00Z') },
      },
    })
    localProgress.switchProgressOwner('user-b', true)

    const userB = localProgress.collectLocalProgress().answers
    expect(userB.nextGuest.selected).toBe(3)
    expect(userB.accountA).toBeUndefined()
  })

  it('records replacement imports as new sync changes without altering review history', async () => {
    vi.stubGlobal('localStorage', new MemoryStorage())
    vi.resetModules()

    const localProgress = await import('./localProgress')
    const storage = await import('./storage')
    const { srsStore } = await import('./reviewStore')

    storage.replaceAnswers({
      oldAnswer: { selected: 1, updatedAt: Date.parse('2026-07-01T00:00:00Z') },
    })
    srsStore.set({
      oldCard: {
        due: '2026-07-01T00:00:00.000Z',
        interval: 1,
        reps: 1,
        lapses: 0,
        last: '2026-06-30T00:00:00.000Z',
      },
    })

    storage.importBackup({
      app: 'nihongo-br',
      version: 2,
      exportedAt: '2026-07-10T00:00:00.000Z',
      count: 1,
      answers: {
        importedAnswer: {
          selected: 2,
          updatedAt: Date.parse('2026-06-01T00:00:00Z'),
        },
      },
      srs: {
        importedCard: {
          due: '2026-08-01T00:00:00.000Z',
          interval: 30,
          reps: 4,
          lapses: 1,
          last: '2026-06-15T00:00:00.000Z',
        },
      },
      custom: [],
      exams: [],
    }, 'replace')

    const imported = localProgress.collectLocalProgress()
    expect(imported.answers.oldAnswer).toBeUndefined()
    expect(imported.tombstones.answers.oldAnswer).toBeDefined()
    expect(imported.tombstones.srs.oldCard).toBeDefined()
    expect(imported.srs.importedCard.last).toBe('2026-06-15T00:00:00.000Z')
    expect(imported.srs.importedCard.syncUpdatedAt).toBeDefined()
    expect(imported.answers.importedAnswer.updatedAt).toBeGreaterThan(
      Date.parse('2026-06-01T00:00:00Z'),
    )
  })
})
