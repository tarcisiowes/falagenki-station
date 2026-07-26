import { createPersistentStore } from './createStore'
import {
  markKnown,
  schedule,
  suspendReview,
  type CardState,
  type Grade,
} from './srs'
import { markProgressDeletion, markProgressUpsert } from './progressMetadata'

// Estado de repetição espaçada por questão (id da questão -> estado da carta).
export type SrsMap = Record<string, CardState>

export const srsStore = createPersistentStore<SrsMap>('nihongo-br:srs:v1', {})

export function useSrs(): SrsMap {
  return srsStore.useStore()
}

export function getCard(id: string): CardState | undefined {
  return srsStore.get()[id]
}

export function gradeCard(id: string, grade: Grade) {
  let changedAt = new Date().toISOString()
  srsStore.update((s) => {
    const next = schedule(s[id], grade)
    changedAt = next.last
    return { ...s, [id]: { ...next, syncUpdatedAt: changedAt } }
  })
  markProgressUpsert('srs', id, changedAt)
}

export function markCardKnown(id: string) {
  let changedAt = new Date().toISOString()
  srsStore.update((state) => {
    const next = markKnown(state[id])
    changedAt = next.last
    return { ...state, [id]: { ...next, syncUpdatedAt: changedAt } }
  })
  markProgressUpsert('srs', id, changedAt)
}

export function suspendCardReview(id: string) {
  let changedAt = new Date().toISOString()
  srsStore.update((state) => {
    const next = suspendReview(state[id])
    changedAt = next.last
    return { ...state, [id]: { ...next, syncUpdatedAt: changedAt } }
  })
  markProgressUpsert('srs', id, changedAt)
}

export function resetCard(id: string) {
  if (!srsStore.get()[id]) return
  srsStore.update((s) => {
    const next = { ...s }
    delete next[id]
    return next
  })
  markProgressDeletion('srs', id)
}
