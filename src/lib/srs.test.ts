import { describe, expect, it } from 'vitest'
import {
  MAX_REVIEW_DATE,
  MAX_REVIEW_INTERVAL_DAYS,
  isDue,
  markKnown,
  previewInterval,
  schedule,
  suspendReview,
  type CardState,
} from './srs'

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

  it('keeps mastered cards at the maximum review date', () => {
    const known = markKnown(undefined, NOW)

    expect(known.status).toBe('known')
    expect(known.due).toBe(MAX_REVIEW_DATE)
    expect(known.interval).toBe(MAX_REVIEW_INTERVAL_DAYS)
    expect(isDue(known, new Date('2099-01-01T00:00:00.000Z'))).toBe(false)
  })

  it('keeps suspended cards out of the automatic queue', () => {
    const suspended = suspendReview(undefined, NOW)

    expect(suspended.status).toBe('suspended')
    expect(isDue(suspended, new Date('9999-12-31T23:59:59.999Z'))).toBe(false)
  })

  it('returns a mastered card to normal scheduling when it is reviewed explicitly', () => {
    const reviewed = schedule(markKnown(undefined, NOW), 'good', NOW)

    expect(reviewed.status).toBeUndefined()
    expect(reviewed.interval).toBeLessThan(MAX_REVIEW_INTERVAL_DAYS)
    expect(reviewed.due).not.toBe(MAX_REVIEW_DATE)
  })
})
