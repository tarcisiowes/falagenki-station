import { createPersistentStore } from './createStore'
import { schedule, type CardState, type Grade } from './srs'

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
  srsStore.update((s) => ({ ...s, [id]: schedule(s[id], grade) }))
}

export function resetCard(id: string) {
  srsStore.update((s) => {
    if (!s[id]) return s
    const next = { ...s }
    delete next[id]
    return next
  })
}
