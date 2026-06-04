import { createPersistentStore } from './createStore'
import type { LevelId, SectionId } from '../data/types'

// Histórico de tentativas de simulado (para análise).
export interface ExamQResult {
  id: string
  number: number
  selected?: number
  answer: number
  correct: boolean
  /** tempo gasto na questão, em milissegundos */
  ms: number
}

export interface ExamAttempt {
  id: string
  levelId: LevelId
  sectionId: SectionId
  sectionTitlePt: string
  finishedAt: string
  /** duração oficial da seção, em segundos */
  durationSec: number
  /** tempo efetivamente usado, em segundos */
  usedSec: number
  total: number
  correct: number
  results: ExamQResult[]
}

export const examStore = createPersistentStore<ExamAttempt[]>('nihongo-br:exams:v1', [])

export function useExams(): ExamAttempt[] {
  return examStore.useStore()
}

export function addAttempt(a: Omit<ExamAttempt, 'id'>): ExamAttempt {
  const full: ExamAttempt = { ...a, id: `exam-${Date.now().toString(36)}` }
  examStore.update((list) => [full, ...list])
  return full
}

export function deleteAttempt(id: string) {
  examStore.update((list) => list.filter((a) => a.id !== id))
}
