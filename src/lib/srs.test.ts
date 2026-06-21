import { describe, expect, it } from 'vitest'
import { isDue, previewInterval, schedule, type CardState } from './srs'

const NOW = new Date('2026-06-21T12:00:00.000Z')

describe('FSRS scheduling', () => {
  it('uses FSRS learning steps for a new correct answer', () => {
    const next = schedule(undefined, 'good', NOW)

    expect(next.scheduler).toBe('fsrs')
    expect(next.interval).toBe(0)
    expect(next.due).toBe('2026-06-21T12:10:00.000Z')
    expect(next.stability).toBeGreaterThan(0)
    expect(next.difficulty).toBeGreaterThan(0)
    expect(next.reps).toBe(1)
    expect(isDue(next, new Date('2026-06-21T12:09:00.000Z'))).toBe(false)
    expect(isDue(next, new Date('2026-06-21T12:10:00.000Z'))).toBe(true)
  })

  it('keeps easy farther away than the minimum recommended good interval', () => {
    expect(previewInterval(undefined, 'good', NOW)).toBe('10min')
    expect(previewInterval(undefined, 'easy', NOW)).toBe('8d')
  })

  it('migrates existing legacy cards into FSRS on the next review', () => {
    const legacy: CardState = {
      due: '2026-06-21',
      interval: 10,
      ease: 2.8,
      reps: 2,
      lapses: 0,
      last: '2026-06-11T12:00:00.000Z',
    }

    const next = schedule(legacy, 'good', NOW)

    expect(next.scheduler).toBe('fsrs')
    expect(next.interval).toBeGreaterThan(0)
    expect(next.stability).toBeGreaterThan(0)
    expect(next.difficulty).toBeGreaterThan(0)
    expect(next.reps).toBe(3)
  })
})
