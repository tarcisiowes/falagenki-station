import type { ExerciseGroup, Question } from '../data/types'
import type { AnswerMap, AnswerRecord } from './storage'

export interface ExerciseLocation {
  groupId: string
  groupIndex: number
  question: Question
  questionIndex: number
  globalIndex: number
  total: number
}

export function flattenExerciseQuestions(groups: ExerciseGroup[]): Question[] {
  return groups.flatMap((group) => group.questions)
}

export function isExerciseCompleted(record: AnswerRecord | undefined): boolean {
  if (!record || record.completedAt === null) return false
  return typeof record.completedAt === 'number' || record.selected !== undefined
}

export function findLatestExerciseId(
  groups: ExerciseGroup[],
  answers: AnswerMap,
): string | undefined {
  const questionIds = new Set(flattenExerciseQuestions(groups).map((question) => question.id))
  let latest: { id: string; timestamp: number } | undefined

  for (const [id, record] of Object.entries(answers)) {
    if (!questionIds.has(id) || !isExerciseCompleted(record)) continue
    const timestamp = typeof record.completedAt === 'number' ? record.completedAt : record.updatedAt
    if (!latest || timestamp > latest.timestamp) latest = { id, timestamp }
  }

  return latest?.id
}

export function findExerciseLocation(
  groups: ExerciseGroup[],
  questionId: string | undefined,
): ExerciseLocation | undefined {
  if (!questionId) return undefined
  const total = groups.reduce((sum, group) => sum + group.questions.length, 0)
  let globalIndex = 0

  for (let groupIndex = 0; groupIndex < groups.length; groupIndex += 1) {
    const group = groups[groupIndex]
    const questionIndex = group.questions.findIndex((question) => question.id === questionId)
    if (questionIndex >= 0) {
      return {
        groupId: group.id,
        groupIndex,
        question: group.questions[questionIndex],
        questionIndex,
        globalIndex: globalIndex + questionIndex,
        total,
      }
    }
    globalIndex += group.questions.length
  }

  return undefined
}

export function getAdjacentExerciseId(
  groups: ExerciseGroup[],
  questionId: string,
  offset: -1 | 1,
): string | undefined {
  const questions = flattenExerciseQuestions(groups)
  const index = questions.findIndex((question) => question.id === questionId)
  return index < 0 ? undefined : questions[index + offset]?.id
}

export function countCompletedExercises(group: ExerciseGroup, answers: AnswerMap): number {
  return group.questions.reduce(
    (count, question) => count + (isExerciseCompleted(answers[question.id]) ? 1 : 0),
    0,
  )
}

export function getExerciseFallbackId(groups: ExerciseGroup[], answers: AnswerMap): string | undefined {
  return (
    findLatestExerciseId(groups, answers) ??
    flattenExerciseQuestions(groups).find((question) => !isExerciseCompleted(answers[question.id]))?.id ??
    flattenExerciseQuestions(groups)[0]?.id
  )
}
