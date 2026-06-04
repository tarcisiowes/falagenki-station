// Algoritmo de repetição espaçada (estilo Anki / SM-2 simplificado).

export type Grade = 'again' | 'hard' | 'good' | 'easy'

export interface CardState {
  /** data (yyyy-mm-dd) em que a carta volta a ficar "due" */
  due: string
  /** intervalo atual em dias */
  interval: number
  /** fator de facilidade */
  ease: number
  /** número de revisões já feitas */
  reps: number
  /** quantas vezes errou (lapsos) */
  lapses: number
  /** data-hora da última revisão (ISO) */
  last: string
}

const DAY_MS = 86_400_000

export function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

export function addDaysStr(n: number): string {
  return new Date(Date.now() + n * DAY_MS).toISOString().slice(0, 10)
}

/** Carta sem estado é "nova" (entra na revisão). Caso contrário, due se a data já chegou. */
export function isDue(c: CardState | undefined): boolean {
  if (!c) return true
  return c.due <= todayStr()
}

export function isNew(c: CardState | undefined): boolean {
  return !c
}

/** Calcula o próximo estado da carta a partir da nota dada pelo usuário. */
export function schedule(prev: CardState | undefined, grade: Grade): CardState {
  const ease0 = prev?.ease ?? 2.5
  const reps = prev?.reps ?? 0
  const lapses = prev?.lapses ?? 0
  const prevInterval = prev?.interval ?? 0
  const now = new Date().toISOString()

  // Errou: volta para hoje (revisão no mesmo dia) e reduz a facilidade.
  if (grade === 'again') {
    return {
      due: todayStr(),
      interval: 0,
      ease: Math.max(1.3, ease0 - 0.2),
      reps: reps + 1,
      lapses: lapses + 1,
      last: now,
    }
  }

  let ease = ease0
  let interval: number

  if (reps === 0 || prevInterval === 0) {
    // Primeiro acerto (ou logo após um erro): intervalos pequenos.
    if (grade === 'hard') {
      ease = Math.max(1.3, ease0 - 0.15)
      interval = 1
    } else if (grade === 'good') {
      interval = 1
    } else {
      ease = ease0 + 0.15
      interval = 3
    }
  } else {
    if (grade === 'hard') {
      ease = Math.max(1.3, ease0 - 0.15)
      interval = Math.max(1, Math.round(prevInterval * 1.2))
    } else if (grade === 'good') {
      interval = Math.max(1, Math.round(prevInterval * ease0))
    } else {
      ease = ease0 + 0.15
      interval = Math.max(1, Math.round(prevInterval * ease0 * 1.3))
    }
  }

  return {
    due: addDaysStr(interval),
    interval,
    ease,
    reps: reps + 1,
    lapses,
    last: now,
  }
}

/** Pré-visualização do próximo intervalo (para os botões mostrarem "1d", "hoje" etc.). */
export function previewInterval(prev: CardState | undefined, grade: Grade): string {
  const next = schedule(prev, grade)
  if (next.interval === 0) return 'hoje'
  if (next.interval === 1) return '1d'
  return `${next.interval}d`
}
