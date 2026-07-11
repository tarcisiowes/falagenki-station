import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { genki1 } from './genki-1'
import { allFlatQuestions } from '../lib/dataAccess'

describe('Genki I lesson 1', () => {
  const lesson = genki1.sections[0]
  const questions = lesson.groups.flatMap((group) => group.questions)
  const audioSources = new Set(lesson.audios?.map((track) => track.src))

  it('keeps stable unique ids and complete answer data', () => {
    expect(questions).toHaveLength(67)
    expect(new Set(questions.map((question) => question.id)).size).toBe(questions.length)

    for (const question of questions) {
      expect(question.choices.some((choice) => choice.n === question.answer)).toBe(true)
      expect(question.explanationPt.trim().length).toBeGreaterThan(0)
    }
  })

  it('registers every lesson audio and keeps the files deployable', () => {
    expect(lesson.audios).toHaveLength(28)

    for (const source of audioSources) {
      const publicPath = resolve('public', source.replace(/^\//, ''))
      expect(existsSync(publicPath), publicPath).toBe(true)
    }
  })

  it('uses registered lesson tracks for audio-backed exercises', () => {
    const listeningQuestions = questions.filter((question) => question.audio)
    expect(listeningQuestions).toHaveLength(15)

    for (const item of listeningQuestions) {
      expect(audioSources.has(item.audio!.src)).toBe(true)
    }
  })

  it('adds every exercise to the Genki FSRS question pool', () => {
    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki')
    expect(reviewQuestions).toHaveLength(questions.length)
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })

  it('offers optional practical help without replacing the source explanation', () => {
    expect(lesson.studyNotes.filter((note) => note.helpPt).length).toBeGreaterThanOrEqual(4)
    expect(questions.filter((question) => question.helpPt).length).toBeGreaterThanOrEqual(6)
    expect(lesson.groups.some((group) => group.example?.helpPt)).toBe(true)
  })
})
