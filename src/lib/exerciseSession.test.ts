import { describe, expect, it } from 'vitest'
import type { ExerciseGroup } from '../data/types'
import type { AnswerMap } from './storage'
import {
  countCompletedExercises,
  findExerciseLocation,
  findLatestExerciseId,
  getAdjacentExerciseId,
  getExerciseFallbackId,
  isExerciseCompleted,
} from './exerciseSession'

const groups: ExerciseGroup[] = [
  {
    id: 'group-a',
    title: 'A',
    subtitlePt: 'Grupo A',
    instructionJa: 'えらんでください。',
    instructionPt: 'Escolha.',
    questions: [
      { id: 'q-1', number: 1, prompt: '一', choices: [{ n: 1, text: '1' }], answer: 1, explanationPt: 'A' },
      { id: 'q-2', number: 2, prompt: '二', choices: [{ n: 1, text: '2' }], answer: 1, explanationPt: 'B' },
    ],
  },
  {
    id: 'group-b',
    title: 'B',
    subtitlePt: 'Grupo B',
    instructionJa: 'えらんでください。',
    instructionPt: 'Escolha.',
    questions: [
      { id: 'q-3', number: 3, prompt: '三', choices: [{ n: 1, text: '3' }], answer: 1, explanationPt: 'C' },
    ],
  },
]

describe('exercise session navigation', () => {
  it('locates questions and moves across group boundaries', () => {
    expect(findExerciseLocation(groups, 'q-2')).toMatchObject({
      groupId: 'group-a',
      questionIndex: 1,
      globalIndex: 1,
      total: 3,
    })
    expect(getAdjacentExerciseId(groups, 'q-2', 1)).toBe('q-3')
    expect(getAdjacentExerciseId(groups, 'q-3', -1)).toBe('q-2')
  })

  it('treats changed answers as pending until their correction is revealed', () => {
    expect(isExerciseCompleted({ selected: 1, completedAt: null, updatedAt: 20 })).toBe(false)
    expect(isExerciseCompleted({ selected: 1, completedAt: 20, updatedAt: 20 })).toBe(true)
    expect(isExerciseCompleted({ selected: 1, updatedAt: 10 })).toBe(true)
  })

  it('uses the most recently completed in-scope exercise for resume', () => {
    const answers: AnswerMap = {
      'q-1': { selected: 1, completedAt: 100, updatedAt: 100 },
      'q-2': { selected: 1, completedAt: 300, updatedAt: 300 },
      outside: { selected: 1, completedAt: 900, updatedAt: 900 },
    }
    expect(findLatestExerciseId(groups, answers)).toBe('q-2')
    expect(getExerciseFallbackId(groups, answers)).toBe('q-2')
    expect(countCompletedExercises(groups[0], answers)).toBe(2)
  })
})
