import { createPersistentStore } from './createStore'
import type { LevelId, SectionId } from '../data/types'
import { markProgressDeletion, markProgressUpsert } from './progressMetadata'

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
  /** Last persistence change, separate from the attempt completion time. */
  syncUpdatedAt?: string
}

export const examStore = createPersistentStore<ExamAttempt[]>('nihongo-br:exams:v1', [])

export function useExams(): ExamAttempt[] {
  return examStore.useStore()
}

export function addAttempt(a: Omit<ExamAttempt, 'id'>): ExamAttempt {
  const full: ExamAttempt = {
    ...a,
    id: `exam-${Date.now().toString(36)}`,
    syncUpdatedAt: a.finishedAt,
  }
  examStore.update((list) => [full, ...list])
  markProgressUpsert('exams', full.id, full.finishedAt)
  return full
}

export function deleteAttempt(id: string) {
  if (!examStore.get().some((attempt) => attempt.id === id)) return
  examStore.update((list) => list.filter((a) => a.id !== id))
  markProgressDeletion('exams', id)
}
