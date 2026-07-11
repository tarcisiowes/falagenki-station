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
    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki' && item.sectionId === 'lesson-1')
    expect(reviewQuestions).toHaveLength(questions.length)
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })

  it('offers optional practical help without replacing the source explanation', () => {
    expect(lesson.studyNotes.filter((note) => note.helpPt).length).toBeGreaterThanOrEqual(4)
    expect(questions.filter((question) => question.helpPt).length).toBeGreaterThanOrEqual(6)
    expect(lesson.groups.some((group) => group.example?.helpPt)).toBe(true)
  })
})

describe('Genki I lesson 2', () => {
  const lesson = genki1.sections.find((section) => section.id === 'lesson-2')!
  const questions = lesson.groups.flatMap((group) => group.questions)
  const audioSources = new Set(lesson.audios?.map((track) => track.src))

  it('contains the complete interactive lesson structure', () => {
    expect(questions).toHaveLength(86)
    expect(new Set(questions.map((question) => question.id)).size).toBe(questions.length)
    expect(lesson.studyNotes.some((note) => note.title.includes('Katakana'))).toBe(true)
    expect(lesson.studyNotes.filter((note) => note.helpPt).length).toBeGreaterThanOrEqual(5)
  })

  it('registers textbook, workbook, and reading/writing audio', () => {
    expect(lesson.audios).toHaveLength(22)
    for (const source of audioSources) {
      expect(existsSync(resolve('public', source.replace(/^\//, ''))), source).toBe(true)
    }
  })

  it('keeps listening exercises audio-backed and reviewable', () => {
    const listeningQuestions = questions.filter((question) => question.audio)
    expect(listeningQuestions).toHaveLength(22)
    for (const item of listeningQuestions) expect(audioSources.has(item.audio!.src)).toBe(true)

    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki' && item.sectionId === 'lesson-2')
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })
})

describe('Genki I lesson 3', () => {
  const lesson = genki1.sections.find((section) => section.id === 'lesson-3')!
  const questions = lesson.groups.flatMap((group) => group.questions)
  const audioSources = new Set(lesson.audios?.map((track) => track.src))

  it('covers verbs, particles, invitations, kanji, reading, and listening', () => {
    expect(questions).toHaveLength(78)
    expect(new Set(questions.map((question) => question.id)).size).toBe(questions.length)
    expect(lesson.studyNotes.some((note) => note.title.includes('Kanji'))).toBe(true)
    expect(lesson.studyNotes.filter((note) => note.helpPt).length).toBeGreaterThanOrEqual(5)
  })

  it('keeps every source audio deployable and every listening item reviewable', () => {
    expect(lesson.audios).toHaveLength(20)
    for (const source of audioSources) expect(existsSync(resolve('public', source.replace(/^\//, ''))), source).toBe(true)
    expect(questions.filter((question) => question.audio)).toHaveLength(26)

    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki' && item.sectionId === 'lesson-3')
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })
})

describe('Genki I lesson 4', () => {
  const lesson = genki1.sections.find((section) => section.id === 'lesson-4')!
  const questions = lesson.groups.flatMap((group) => group.questions)

  it('covers the full lesson and its source audio', () => {
    expect(questions).toHaveLength(65)
    expect(lesson.audios).toHaveLength(23)
    expect(questions.filter((question) => question.audio)).toHaveLength(15)
    expect(new Set(questions.map((question) => question.id)).size).toBe(questions.length)
    for (const track of lesson.audios ?? []) expect(existsSync(resolve('public', track.src.replace(/^\//, ''))), track.src).toBe(true)
  })

  it('adds every exercise to the FSRS pool', () => {
    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki' && item.sectionId === 'lesson-4')
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })
})

describe('Genki I lesson 5', () => {
  const lesson = genki1.sections.find((section) => section.id === 'lesson-5')!
  const questions = lesson.groups.flatMap((group) => group.questions)

  it('covers adjectives, preferences, invitations, counters, readings, and listening', () => {
    expect(questions).toHaveLength(76)
    expect(lesson.audios).toHaveLength(21)
    expect(questions.filter((question) => question.audio)).toHaveLength(16)
    expect(lesson.studyNotes.filter((note) => note.helpPt).length).toBeGreaterThanOrEqual(7)
    expect(new Set(questions.map((question) => question.id)).size).toBe(questions.length)
    for (const track of lesson.audios ?? []) expect(existsSync(resolve('public', track.src.replace(/^\//, ''))), track.src).toBe(true)
  })

  it('adds every exercise to the FSRS pool', () => {
    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki' && item.sectionId === 'lesson-5')
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })
})

describe('Genki I lesson 6', () => {
  const lesson = genki1.sections.find((section) => section.id === 'lesson-6')!
  const questions = lesson.groups.flatMap((group) => group.questions)

  it('covers te-form, requests, rules, reasons, assistance, reading, and listening', () => {
    expect(questions).toHaveLength(80)
    expect(lesson.audios).toHaveLength(19)
    expect(questions.filter((question) => question.audio)).toHaveLength(14)
    expect(lesson.studyNotes.filter((note) => note.helpPt).length).toBeGreaterThanOrEqual(7)
    for (const track of lesson.audios ?? []) expect(existsSync(resolve('public', track.src.replace(/^\//, ''))), track.src).toBe(true)
  })

  it('adds every exercise to the FSRS pool', () => {
    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki' && item.sectionId === 'lesson-6')
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })
})

describe('Genki I lesson 7', () => {
  const lesson = genki1.sections.find((section) => section.id === 'lesson-7')!
  const questions = lesson.groups.flatMap((group) => group.questions)
  it('covers progressive and result states, descriptions, purpose, people, the letter, and listening', () => {
    expect(questions).toHaveLength(73)
    expect(lesson.audios).toHaveLength(18)
    expect(questions.filter((question) => question.audio)).toHaveLength(15)
    expect(lesson.studyNotes.filter((note) => note.helpPt).length).toBeGreaterThanOrEqual(6)
    for (const track of lesson.audios ?? []) expect(existsSync(resolve('public', track.src.replace(/^\//, ''))), track.src).toBe(true)
  })
  it('adds every exercise to the FSRS pool', () => {
    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki' && item.sectionId === 'lesson-7')
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })
})

describe('Genki I lesson 8', () => {
  const lesson = genki1.sections.find((section) => section.id === 'lesson-8')!
  const questions = lesson.groups.flatMap((group) => group.questions)
  it('covers present short forms, informal and quoted speech, nominalization, reading, and listening', () => {
    expect(questions).toHaveLength(64)
    expect(lesson.audios).toHaveLength(22)
    expect(questions.filter((question) => question.audio)).toHaveLength(8)
    expect(lesson.studyNotes.filter((note) => note.helpPt).length).toBeGreaterThanOrEqual(6)
    for (const track of lesson.audios ?? []) expect(existsSync(resolve('public', track.src.replace(/^\//, ''))), track.src).toBe(true)
  })
  it('adds every exercise to the FSRS pool', () => {
    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki' && item.sectionId === 'lesson-8')
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })
})

describe('Genki I lesson 9', () => {
  const lesson = genki1.sections.find((section) => section.id === 'lesson-9')!
  const questions = lesson.groups.flatMap((group) => group.questions)
  it('covers past short forms, quotations, noun modification, readings, and listening', () => {
    expect(questions).toHaveLength(60)
    expect(lesson.audios).toHaveLength(22)
    expect(questions.filter((question) => question.audio)).toHaveLength(10)
    expect(lesson.studyNotes.filter((note) => note.helpPt).length).toBeGreaterThanOrEqual(5)
    for (const track of lesson.audios ?? []) expect(existsSync(resolve('public', track.src.replace(/^\//, ''))), track.src).toBe(true)
  })
  it('adds every exercise to the FSRS pool', () => {
    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki' && item.sectionId === 'lesson-9')
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })
})

describe('Genki I lesson 10', () => {
  const lesson = genki1.sections.find((section) => section.id === 'lesson-10')!
  const questions = lesson.groups.flatMap((group) => group.questions)
  it('covers comparisons, plans, changes, the folktale, and listening', () => {
    expect(questions).toHaveLength(54)
    expect(lesson.audios).toHaveLength(19)
    expect(questions.filter((question) => question.audio)).toHaveLength(8)
    expect(lesson.studyNotes.filter((note) => note.helpPt).length).toBeGreaterThanOrEqual(5)
    for (const track of lesson.audios ?? []) expect(existsSync(resolve('public', track.src.replace(/^\//, ''))), track.src).toBe(true)
  })
  it('adds every exercise to the FSRS pool', () => {
    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki' && item.sectionId === 'lesson-10')
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })
})

describe('Genki I lesson 11', () => {
  const lesson = genki1.sections.find((section) => section.id === 'lesson-11')!
  const questions = lesson.groups.flatMap((group) => group.questions)
  it('covers wants, representative activities, experiences, announcements, and listening', () => {
    expect(questions).toHaveLength(52)
    expect(lesson.audios).toHaveLength(19)
    expect(questions.filter((question) => question.audio)).toHaveLength(12)
    expect(lesson.studyNotes.filter((note) => note.helpPt).length).toBeGreaterThanOrEqual(4)
    for (const track of lesson.audios ?? []) expect(existsSync(resolve('public', track.src.replace(/^\//, ''))), track.src).toBe(true)
  })
  it('adds every exercise to the FSRS pool', () => {
    const reviewQuestions = allFlatQuestions([]).filter((item) => item.courseId === 'genki' && item.sectionId === 'lesson-11')
    expect(reviewQuestions.map((item) => item.q.id)).toEqual(questions.map((question) => question.id))
  })
})

describe('all implemented Genki I modules', () => {
  it('keeps section and question ids globally unique with valid answers', () => {
    expect(new Set(genki1.sections.map((section) => section.id)).size).toBe(genki1.sections.length)
    const questions = genki1.sections.flatMap((section) => section.groups.flatMap((group) => group.questions))
    expect(new Set(questions.map((question) => question.id)).size).toBe(questions.length)
    for (const question of questions) expect(question.choices.some((choice) => choice.n === question.answer)).toBe(true)
  })
})
