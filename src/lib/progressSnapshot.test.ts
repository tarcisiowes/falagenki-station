import { describe, expect, it } from 'vitest'
import {
  createEmptyProgressSnapshot,
  mergeProgressSnapshots,
  type ProgressSnapshot,
} from './progressSnapshot'

function snapshot(patch: Partial<ProgressSnapshot>): ProgressSnapshot {
  return {
    ...createEmptyProgressSnapshot('2026-07-01T00:00:00.000Z'),
    ...patch,
  }
}

describe('progress snapshot merge', () => {
  it('keeps the newest answer independently for each question', () => {
    const merged = mergeProgressSnapshots(
      snapshot({
        answers: {
          q1: { selected: 1, updatedAt: Date.parse('2026-07-02T00:00:00Z') },
        },
      }),
      snapshot({
        answers: {
          q1: { selected: 2, updatedAt: Date.parse('2026-07-03T00:00:00Z') },
          q2: { selected: 3, updatedAt: Date.parse('2026-07-03T00:00:00Z') },
        },
      }),
    )

    expect(merged.answers.q1.selected).toBe(2)
    expect(merged.answers.q2.selected).toBe(3)
  })

  it('keeps a newer deletion from being resurrected by another device', () => {
    const merged = mergeProgressSnapshots(
      snapshot({
        tombstones: {
          ...createEmptyProgressSnapshot().tombstones,
          answers: { q1: '2026-07-04T00:00:00.000Z' },
        },
      }),
      snapshot({
        answers: {
          q1: { selected: 2, updatedAt: Date.parse('2026-07-03T00:00:00Z') },
        },
      }),
    )

    expect(merged.answers.q1).toBeUndefined()
    expect(merged.tombstones.answers.q1).toBe('2026-07-04T00:00:00.000Z')
  })

  it('restores a deleted item when a later explicit update is made', () => {
    const merged = mergeProgressSnapshots(
      snapshot({
        tombstones: {
          ...createEmptyProgressSnapshot().tombstones,
          answers: { q1: '2026-07-03T00:00:00.000Z' },
        },
      }),
      snapshot({
        answers: {
          q1: { selected: 4, updatedAt: Date.parse('2026-07-05T00:00:00Z') },
        },
      }),
    )

    expect(merged.answers.q1.selected).toBe(4)
    expect(merged.tombstones.answers.q1).toBeUndefined()
  })

  it('keeps remote-only items deleted after a collection replacement', () => {
    const local = snapshot({
      collectionResets: {
        ...createEmptyProgressSnapshot().collectionResets,
        answers: '2026-07-05T00:00:00.000Z',
      },
    })
    const merged = mergeProgressSnapshots(
      local,
      snapshot({
        answers: {
          remoteOnly: {
            selected: 2,
            updatedAt: Date.parse('2026-07-04T00:00:00Z'),
          },
        },
      }),
    )

    expect(merged.answers.remoteOnly).toBeUndefined()
    expect(merged.tombstones.answers.remoteOnly).toBe(
      '2026-07-05T00:00:00.000Z',
    )
  })

  it('unions immutable exam attempts and sorts the newest first', () => {
    const baseExam = {
      levelId: 'n5',
      sectionId: 'vocab',
      sectionTitlePt: 'Vocabulário',
      durationSec: 60,
      usedSec: 50,
      total: 1,
      correct: 1,
      results: [],
    }
    const merged = mergeProgressSnapshots(
      snapshot({
        exams: [{ ...baseExam, id: 'old', finishedAt: '2026-07-02T00:00:00Z' }],
      }),
      snapshot({
        exams: [{ ...baseExam, id: 'new', finishedAt: '2026-07-03T00:00:00Z' }],
      }),
    )

    expect(merged.exams.map((exam) => exam.id)).toEqual(['new', 'old'])
  })

  it('uses persistence timestamps without changing SRS review history', () => {
    const card = {
      due: '2026-08-01T00:00:00.000Z',
      interval: 30,
      reps: 4,
      lapses: 1,
      last: '2026-06-01T00:00:00.000Z',
    }
    const merged = mergeProgressSnapshots(
      snapshot({
        srs: {
          card: {
            ...card,
            due: '2026-09-01T00:00:00.000Z',
            syncUpdatedAt: '2026-07-05T00:00:00.000Z',
          },
        },
      }),
      snapshot({
        srs: {
          card: {
            ...card,
            syncUpdatedAt: '2026-07-04T00:00:00.000Z',
          },
        },
      }),
    )

    expect(merged.srs.card.due).toBe('2026-09-01T00:00:00.000Z')
    expect(merged.srs.card.last).toBe('2026-06-01T00:00:00.000Z')
  })

  it('keeps the newest exercise resume point per section', () => {
    const merged = mergeProgressSnapshots(
      snapshot({
        exerciseSessions: {
          'lesson-1': {
            tab: 'exercicios',
            questionId: 'q2',
            updatedAt: '2026-07-05T00:00:00.000Z',
          },
        },
      }),
      snapshot({
        exerciseSessions: {
          'lesson-1': {
            tab: 'audios',
            questionId: 'q1',
            updatedAt: '2026-07-04T00:00:00.000Z',
          },
        },
      }),
    )

    expect(merged.exerciseSessions['lesson-1'].questionId).toBe('q2')
  })
})
