// Persistência local das respostas + backup (export/import JSON).
// Cada questão guarda: alternativa marcada e/ou anotação escrita pelo usuário.

import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'nihongo-br:answers:v1'
const BACKUP_APP = 'nihongo-br'
const BACKUP_VERSION = 1

export interface AnswerRecord {
  /** alternativa marcada (1..4) */
  selected?: number
  /** resposta/anotação escrita no campo de texto */
  note?: string
  updatedAt: number
}

export type AnswerMap = Record<string, AnswerRecord>

export interface BackupFile {
  app: string
  version: number
  exportedAt: string
  count: number
  answers: AnswerMap
}

// ---- estado em memória + sincronização -----------------------------------

let state: AnswerMap = readFromDisk()
const listeners = new Set<() => void>()

function readFromDisk(): AnswerMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? (parsed as AnswerMap) : {}
  } catch {
    return {}
  }
}

function commit(next: AnswerMap) {
  state = next
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // armazenamento cheio/indisponível — mantém em memória
  }
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot(): AnswerMap {
  return state
}

// ---- API pública ----------------------------------------------------------

export function getAnswer(id: string): AnswerRecord | undefined {
  return state[id]
}

export function setAnswer(id: string, patch: Partial<Omit<AnswerRecord, 'updatedAt'>>) {
  const prev = state[id] ?? { updatedAt: 0 }
  const merged: AnswerRecord = { ...prev, ...patch, updatedAt: Date.now() }
  // remove o registro se ficou vazio
  const isEmpty =
    merged.selected === undefined && (!merged.note || merged.note.trim() === '')
  const next = { ...state }
  if (isEmpty) {
    delete next[id]
  } else {
    next[id] = merged
  }
  commit(next)
}

export function clearAnswer(id: string) {
  if (!state[id]) return
  const next = { ...state }
  delete next[id]
  commit(next)
}

export function clearAll() {
  commit({})
}

export function importAnswers(answers: AnswerMap, mode: 'merge' | 'replace' = 'merge') {
  if (mode === 'replace') {
    commit({ ...answers })
    return
  }
  const next = { ...state }
  for (const [id, rec] of Object.entries(answers)) {
    const cur = next[id]
    // mantém o registro mais recente em caso de conflito
    if (!cur || (rec.updatedAt ?? 0) >= (cur.updatedAt ?? 0)) {
      next[id] = rec
    }
  }
  commit(next)
}

export function buildBackup(): BackupFile {
  return {
    app: BACKUP_APP,
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    count: Object.keys(state).length,
    answers: state,
  }
}

export function downloadBackup() {
  const data = buildBackup()
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const stamp = new Date().toISOString().slice(0, 10)
  const a = document.createElement('a')
  a.href = url
  a.download = `nihongo-br-respostas-${stamp}.json`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export async function readBackupFile(file: File): Promise<BackupFile> {
  const text = await file.text()
  const parsed = JSON.parse(text)
  if (!parsed || typeof parsed !== 'object' || !parsed.answers) {
    throw new Error('Arquivo de backup inválido: campo "answers" ausente.')
  }
  return parsed as BackupFile
}

// ---- hooks React -----------------------------------------------------------

export function useAnswers(): AnswerMap {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}

export function useAnswer(id: string): AnswerRecord | undefined {
  const all = useAnswers()
  return all[id]
}
