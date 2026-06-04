import { useSyncExternalStore } from 'react'

// Pequena fábrica de store persistido em localStorage com assinatura para React.
export interface PersistentStore<T> {
  key: string
  get: () => T
  set: (next: T) => void
  update: (fn: (s: T) => T) => void
  subscribe: (l: () => void) => () => void
  useStore: () => T
}

export function createPersistentStore<T>(key: string, initial: T): PersistentStore<T> {
  const listeners = new Set<() => void>()

  function load(): T {
    try {
      const raw = localStorage.getItem(key)
      if (!raw) return initial
      return JSON.parse(raw) as T
    } catch {
      return initial
    }
  }

  let state = load()

  function persist() {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch {
      // sem espaço / indisponível — mantém em memória
    }
  }

  function get() {
    return state
  }

  function set(next: T) {
    state = next
    persist()
    listeners.forEach((l) => l())
  }

  function update(fn: (s: T) => T) {
    set(fn(state))
  }

  function subscribe(l: () => void) {
    listeners.add(l)
    return () => {
      listeners.delete(l)
    }
  }

  function useStore() {
    return useSyncExternalStore(subscribe, get, get)
  }

  return { key, get, set, update, subscribe, useStore }
}
