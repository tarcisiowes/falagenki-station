import { createEmptyCard, fsrs, Rating, State, type Card, type Grade as FsrsGrade } from 'ts-fsrs'

// Spaced repetition scheduler. Uses FSRS, the modern Anki scheduler model.
export type Grade = 'again' | 'hard' | 'good' | 'easy'

export interface CardState {
  /** ISO date/time when the card becomes due again. Older data may be yyyy-mm-dd. */
  due: string
  /** Scheduled interval in days. Intraday FSRS learning steps are stored as 0. */
  interval: number
  /** Legacy SM-2 ease factor. Present only on cards created before FSRS. */
  ease?: number
  scheduler?: 'fsrs'
  /** FSRS memory stability. */
  stability?: number
  /** FSRS card difficulty. */
  difficulty?: number
  /** FSRS card state. */
  fsrsState?: State
  /** FSRS learning/relearning step index. */
  learningSteps?: number
  /** Days elapsed since the previous review according to FSRS. */
  elapsedDays?: number
  /** Number of reviews already done. */
  reps: number
  /** Number of failed reviews. */
  lapses: number
  /** Last review date/time (ISO). */
  last: string
}

const DAY_MS = 86_400_000
const HOUR_MS = 3_600_000
const MINUTE_MS = 60_000
const REQUEST_RETENTION = 0.9
const scheduler = fsrs({ request_retention: REQUEST_RETENTION, enable_fuzz: false })
const ratingByGrade: Record<Grade, FsrsGrade> = {
  again: Rating.Again,
  hard: Rating.Hard,
  good: Rating.Good,
  easy: Rating.Easy,
}

export function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

export function addDaysStr(n: number): string {
  return new Date(Date.now() + n * DAY_MS).toISOString().slice(0, 10)
}

function toDate(input: string | undefined, fallback: Date): Date {
  if (!input) return fallback
  const date = new Date(input)
  return Number.isNaN(date.getTime()) ? fallback : date
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n))
}

function legacyDifficulty(ease: number): number {
  // Legacy ease usually starts at 2.5 and bottoms at 1.3. Convert it to
  // FSRS' 1..10 difficulty scale so lower legacy ease becomes harder.
  const normalized = (clamp(ease, 1.3, 3.0) - 1.3) / (3.0 - 1.3)
  return clamp(8.5 - normalized * 6, 1, 10)
}

function toFsrsCard(prev: CardState | undefined, now: Date): Card {
  if (!prev) return createEmptyCard(now)

  if (
    prev.scheduler === 'fsrs' &&
    prev.stability !== undefined &&
    prev.difficulty !== undefined &&
    prev.fsrsState !== undefined
  ) {
    return {
      due: toDate(prev.due, now),
      stability: prev.stability,
      difficulty: prev.difficulty,
      elapsed_days: prev.elapsedDays ?? 0,
      scheduled_days: prev.interval,
      learning_steps: prev.learningSteps ?? 0,
      reps: prev.reps,
      lapses: prev.lapses,
      state: prev.fsrsState,
      last_review: prev.last ? toDate(prev.last, now) : undefined,
    }
  }

  const interval = Math.max(0, prev.interval)
  return {
    due: toDate(prev.due, now),
    stability: Math.max(0.1, interval || 0.1),
    difficulty: legacyDifficulty(prev.ease ?? 2.5),
    elapsed_days: 0,
    scheduled_days: interval,
    learning_steps: 0,
    reps: prev.reps,
    lapses: prev.lapses,
    state: interval > 0 ? State.Review : State.Relearning,
    last_review: prev.last ? toDate(prev.last, now) : undefined,
  }
}

function fromFsrsCard(card: Card, now: Date): CardState {
  return {
    due: card.due.toISOString(),
    interval: card.scheduled_days,
    scheduler: 'fsrs',
    stability: card.stability,
    difficulty: card.difficulty,
    fsrsState: card.state,
    learningSteps: card.learning_steps,
    elapsedDays: card.elapsed_days,
    reps: card.reps,
    lapses: card.lapses,
    last: card.last_review?.toISOString() ?? now.toISOString(),
  }
}

/** An undefined card is new. Otherwise it is due when its date/time has arrived. */
export function isDue(c: CardState | undefined, now = new Date()): boolean {
  if (!c) return true
  return toDate(c.due, now).getTime() <= now.getTime()
}

export function isNew(c: CardState | undefined): boolean {
  return !c
}

/** Calculate the next card state from the user's grade. */
export function schedule(prev: CardState | undefined, grade: Grade, now = new Date()): CardState {
  const card = toFsrsCard(prev, now)
  const result = scheduler.next(card, now, ratingByGrade[grade])
  return fromFsrsCard(result.card, now)
}

function formatDelay(now: Date, due: Date, scheduledDays: number): string {
  if (scheduledDays >= 1) return scheduledDays === 1 ? '1d' : `${scheduledDays}d`
  const diff = Math.max(0, due.getTime() - now.getTime())
  if (diff >= HOUR_MS) {
    const hours = Math.round(diff / HOUR_MS)
    return hours === 1 ? '1h' : `${hours}h`
  }
  const minutes = Math.max(1, Math.round(diff / MINUTE_MS))
  return minutes === 1 ? '1min' : `${minutes}min`
}

/** Preview the next interval for the grade buttons. */
export function previewInterval(prev: CardState | undefined, grade: Grade, now = new Date()): string {
  const card = toFsrsCard(prev, now)
  const preview = scheduler.repeat(card, now)[ratingByGrade[grade]].card
  return formatDelay(now, preview.due, preview.scheduled_days)
}

export function retrievability(c: CardState | undefined, now = new Date()): number | undefined {
  if (!c || c.scheduler !== 'fsrs') return undefined
  const card = toFsrsCard(c, now)
  return scheduler.get_retrievability(card, now, false)
}
