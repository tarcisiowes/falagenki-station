import { createPersistentStore } from './createStore'
import type { Choice, LevelId, Question, SectionId } from '../data/types'

// Questões criadas pelo usuário (persistidas localmente, incluídas no backup).
export interface CustomQuestion {
  id: string
  levelId: LevelId
  sectionId: SectionId
  prompt: string
  context?: string
  choices: Choice[]
  answer: number
  translationPt?: string
  explanationPt: string
  createdAt: string
}

export const customStore = createPersistentStore<CustomQuestion[]>('nihongo-br:custom:v1', [])

export function useCustom(): CustomQuestion[] {
  return customStore.useStore()
}

export function newId(): string {
  return `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
}

export function addCustom(q: Omit<CustomQuestion, 'id' | 'createdAt'>): CustomQuestion {
  const full: CustomQuestion = { ...q, id: newId(), createdAt: new Date().toISOString() }
  customStore.update((list) => [...list, full])
  return full
}

export function updateCustom(id: string, patch: Partial<CustomQuestion>) {
  customStore.update((list) => list.map((q) => (q.id === id ? { ...q, ...patch } : q)))
}

export function deleteCustom(id: string) {
  customStore.update((list) => list.filter((q) => q.id !== id))
}

/** Converte uma questão custom no formato Question usado pelos componentes. */
export function customToQuestion(c: CustomQuestion, number: number): Question {
  return {
    id: c.id,
    number,
    prompt: c.prompt,
    context: c.context,
    choices: c.choices,
    answer: c.answer,
    translationPt: c.translationPt,
    explanationPt: c.explanationPt,
  }
}
