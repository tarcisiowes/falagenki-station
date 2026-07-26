// Persistência local das respostas + backup (export/import JSON).
// Cada questão guarda: alternativa marcada e/ou anotação escrita pelo usuário.

import { useSyncExternalStore } from 'react'
import { srsStore, type SrsMap } from './reviewStore'
import { customStore, type CustomQuestion } from './customStore'
import { examStore, type ExamAttempt } from './examStore'
import {
  markProgressCollectionReset,
  markProgressDeletion,
  markProgressUpsert,
} from './progressMetadata'

const STORAGE_KEY = 'nihongo-br:answers:v1'
const BACKUP_APP = 'nihongo-br'
const BACKUP_VERSION = 2

export interface AnswerRecord {
  /** alternativa marcada (1..4) */
  selected?: number
  /** resposta/anotação escrita no campo de texto */
  note?: string
  /**
   * When the correction was revealed. `null` means the learner changed the
   * answer and still needs to verify it. Undefined records predate this field.
   */
  completedAt?: number | null
  updatedAt: number
}

export type AnswerMap = Record<string, AnswerRecord>

export interface BackupFile {
  app: string
  version: number
  exportedAt: string
  count: number
  answers: AnswerMap
  /** estado de repetição espaçada (revisão Anki) */
  srs?: SrsMap
  /** questões criadas pelo usuário */
  custom?: CustomQuestion[]
  /** histórico de simulados */
  exams?: ExamAttempt[]
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

export function subscribeAnswers(listener: () => void) {
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
    merged.selected === undefined &&
    (!merged.note || merged.note.trim() === '') &&
    merged.completedAt == null
  const next = { ...state }
  if (isEmpty) {
    delete next[id]
  } else {
    next[id] = merged
  }
  commit(next)
  if (isEmpty) {
    if (state[id] || prev.updatedAt > 0) {
      markProgressDeletion('answers', id, new Date(merged.updatedAt).toISOString())
    }
  } else {
    markProgressUpsert('answers', id, new Date(merged.updatedAt).toISOString())
  }
}

export function clearAnswer(id: string) {
  if (!state[id]) return
  const next = { ...state }
  delete next[id]
  commit(next)
  markProgressDeletion('answers', id)
}

export function clearAll() {
  const ids = Object.keys(state)
  const changedAt = new Date().toISOString()
  commit({})
  ids.forEach((id) => markProgressDeletion('answers', id, changedAt))
}

export function importAnswers(answers: AnswerMap, mode: 'merge' | 'replace' = 'merge') {
  const changedAt = new Date()
  const changedAtIso = changedAt.toISOString()
  const changedAtMs = changedAt.getTime()
  const previousIds = new Set(Object.keys(state))

  if (mode === 'replace') {
    const next = Object.fromEntries(
      Object.entries(answers).map(([id, record]) => [
        id,
        { ...record, updatedAt: changedAtMs },
      ]),
    )
    commit(next)
    previousIds.forEach((id) => {
      if (!next[id]) markProgressDeletion('answers', id, changedAtIso)
    })
    Object.keys(next).forEach((id) => {
      markProgressUpsert('answers', id, changedAtIso)
    })
    markProgressCollectionReset('answers', changedAtIso)
    return
  }

  const next = { ...state }
  const importedIds: string[] = []
  for (const [id, rec] of Object.entries(answers)) {
    const cur = next[id]
    // mantém o registro mais recente em caso de conflito
    if (!cur || (rec.updatedAt ?? 0) >= (cur.updatedAt ?? 0)) {
      next[id] = { ...rec, updatedAt: changedAtMs }
      importedIds.push(id)
    }
  }
  commit(next)
  importedIds.forEach((id) => {
    markProgressUpsert('answers', id, changedAtIso)
  })
}

export function getAnswers(): AnswerMap {
  return state
}

export function replaceAnswers(answers: AnswerMap) {
  commit({ ...answers })
}

export function buildBackup(): BackupFile {
  return {
    app: BACKUP_APP,
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    count: Object.keys(state).length,
    answers: state,
    srs: srsStore.get(),
    custom: customStore.get(),
    exams: examStore.get(),
  }
}

/** Importa um backup completo (respostas + revisão + questões + simulados). */
export function importBackup(backup: BackupFile, mode: 'merge' | 'replace' = 'merge') {
  importAnswers(backup.answers ?? {}, mode)

  if (backup.srs) {
    const changedAt = new Date().toISOString()
    const current = srsStore.get()
    const imported = Object.fromEntries(
      Object.entries(backup.srs).map(([id, card]) => [
        id,
        { ...card, syncUpdatedAt: changedAt },
      ]),
    )
    const next = mode === 'replace' ? imported : { ...current, ...imported }
    srsStore.set(next)
    if (mode === 'replace') {
      Object.keys(current).forEach((id) => {
        if (!next[id]) markProgressDeletion('srs', id, changedAt)
      })
    }
    Object.keys(imported).forEach((id) => {
      markProgressUpsert('srs', id, changedAt)
    })
    if (mode === 'replace') markProgressCollectionReset('srs', changedAt)
  }

  if (backup.custom) {
    const changedAt = new Date().toISOString()
    const current = customStore.get()
    const currentIds = new Set(current.map((question) => question.id))
    const imported = backup.custom
      .filter((question) => mode === 'replace' || !currentIds.has(question.id))
      .map((question) => ({ ...question, updatedAt: changedAt }))
    const next = mode === 'replace' ? imported : [...current, ...imported]
    customStore.set(next)
    if (mode === 'replace') {
      const nextIds = new Set(next.map((question) => question.id))
      current.forEach((question) => {
        if (!nextIds.has(question.id)) {
          markProgressDeletion('custom', question.id, changedAt)
        }
      })
    }
    imported.forEach((question) => {
      markProgressUpsert('custom', question.id, changedAt)
    })
    if (mode === 'replace') markProgressCollectionReset('custom', changedAt)
  }

  if (backup.exams) {
    const changedAt = new Date().toISOString()
    const current = examStore.get()
    const currentIds = new Set(current.map((attempt) => attempt.id))
    const imported = backup.exams
      .filter((attempt) => mode === 'replace' || !currentIds.has(attempt.id))
      .map((attempt) => ({ ...attempt, syncUpdatedAt: changedAt }))
    const next = mode === 'replace' ? imported : [...current, ...imported]
    examStore.set(next)
    if (mode === 'replace') {
      const nextIds = new Set(next.map((attempt) => attempt.id))
      current.forEach((attempt) => {
        if (!nextIds.has(attempt.id)) {
          markProgressDeletion('exams', attempt.id, changedAt)
        }
      })
    }
    imported.forEach((attempt) => {
      markProgressUpsert('exams', attempt.id, changedAt)
    })
    if (mode === 'replace') markProgressCollectionReset('exams', changedAt)
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
  return useSyncExternalStore(subscribeAnswers, getSnapshot, getSnapshot)
}

export function useAnswer(id: string): AnswerRecord | undefined {
  const all = useAnswers()
  return all[id]
}
