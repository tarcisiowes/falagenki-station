import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { allFlatQuestions } from '../lib/dataAccess'
import { genki2 } from './genki-2'
import { genki2AudioSourceByCode } from './genki-2-audio-source'

describe('Genki II course contract', () => {
  const expectedSectionIds = [
    'lesson-13',
    'lesson-14',
    'lesson-15',
    'lesson-16',
    'lesson-17',
    'lesson-18',
    'lesson-19',
    'lesson-20',
    'lesson-21',
    'lesson-22',
    'lesson-23',
  ]
  const sections = genki2.sections
  const questions = sections.flatMap((section) => section.groups.flatMap((group) => group.questions))
  const tracks = sections.flatMap((section) => section.audios ?? [])
  const questionIds = new Set(questions.map((question) => question.id))
  const trackIds = new Set(tracks.map((track) => track.id))
  const tracksById = new Map(tracks.map((track) => [track.id, track]))

  it('contains the released lessons in order', () => {
    expect(sections.map((section) => section.id)).toEqual(expectedSectionIds)
    expect(sections).toHaveLength(11)
    expect(questions).toHaveLength(781)
  })

  it('keeps lessons, questions, and study help structurally valid', () => {
    expect(questionIds.size).toBe(questions.length)
    expect(trackIds.size).toBe(tracks.length)

    for (const section of sections) {
      expect(section.studyNotes.length, section.id).toBeGreaterThanOrEqual(7)
      for (const note of section.studyNotes) {
        expect(note.bodyPt.trim().length, `${section.id}: ${note.title}`).toBeGreaterThan(40)
        expect(note.helpPt?.trim().length, `${section.id}: ${note.title}`).toBeGreaterThan(20)
      }

      const sectionQuestions = section.groups.flatMap((group) => group.questions)
      expect(sectionQuestions.map((question) => question.number), section.id).toEqual(
        Array.from({ length: sectionQuestions.length }, (_, index) => index + 1),
      )
      for (const question of sectionQuestions) {
        expect(question.choices.some((choice) => choice.n === question.answer), question.id).toBe(true)
        expect(question.explanationPt.trim().length, question.id).toBeGreaterThan(0)
        expect(question.helpPt?.trim().length, question.id).toBeGreaterThan(20)
      }
    }
  })

  it('registers every official source track for each released lesson', () => {
    const officialCodes = Object.keys(genki2AudioSourceByCode)
    expect(officialCodes).toHaveLength(232)
    expect(new Set(officialCodes).size).toBe(232)
    expect(tracks).toHaveLength(232)
    expect(new Set(tracks.map((track) => track.code)).size).toBe(232)
    expect(new Set(tracks.map((track) => track.src)).size).toBe(232)

    for (const section of sections) {
      const lesson = section.id.replace('lesson-', '')
      const expectedCodes = officialCodes.filter((code) =>
        code.startsWith(`K${lesson}_`)
        || code.startsWith(`W${lesson}_`)
        || code === `Y${lesson}`
        || code.startsWith(`Y${lesson}_`),
      )
      const sectionTracks = section.audios ?? []
      expect(sectionTracks.map((track) => track.code).sort(), section.id).toEqual(expectedCodes.sort())
    }

    for (const track of tracks) {
      const source = genki2AudioSourceByCode[track.code ?? '']
      expect(source, track.id).toBeDefined()
      expect(track.sourceActivityPt, track.id).toBe(source.sourceActivityPt)
      expect(track.sourcePage, track.id).toBe(source.sourcePage)
      expect(track.sourceRefPt, track.id).toContain(track.code)
      expect(existsSync(resolve('public', track.src.replace(/^\//u, ''))), track.src).toBe(true)
    }
  })

  it('turns every audio track into direct reviewable practice with a transcript', () => {
    expect(tracks.filter((track) => track.exerciseLinkKind === 'direct')).toHaveLength(232)
    expect(tracks.filter((track) => (track.transcript?.items.length ?? 0) > 0)).toHaveLength(232)

    for (const track of tracks) {
      expect(track.exerciseLinkKind, track.id).toBe('direct')
      expect(track.exerciseIds?.length, track.id).toBeGreaterThan(0)
      for (const id of track.exerciseIds ?? []) expect(questionIds.has(id), `${track.id} -> ${id}`).toBe(true)
      expect(questions.some((question) => question.audio?.trackId === track.id), track.id).toBe(true)
      expect(track.transcript?.items.length, track.id).toBeGreaterThan(0)
      expect(
        track.transcript?.items.some((item) => item.lines.some((line) => line.ja.trim().length > 0)),
        track.id,
      ).toBe(true)

      let previousTime = -1
      for (const item of track.transcript?.items ?? []) {
        expect(item.label.trim().length, `${track.id}: transcript label`).toBeGreaterThan(0)
        expect(item.lines.length, `${track.id}: ${item.label}`).toBeGreaterThan(0)
        if (item.time !== undefined) {
          expect(Number.isFinite(item.time), `${track.id}: ${item.label}`).toBe(true)
          expect(item.time, `${track.id}: ${item.label}`).toBeGreaterThanOrEqual(0)
          expect(item.time, `${track.id}: ${item.label}`).toBeGreaterThanOrEqual(previousTime)
          previousTime = item.time
        }
        for (const line of item.lines) {
          expect(line.speaker.trim().length, `${track.id}: ${item.label}`).toBeGreaterThan(0)
          expect(line.ja.trim().length, `${track.id}: ${item.label}`).toBeGreaterThan(0)
        }
      }
    }
  })

  it('keeps reviewed scripts translated and furigana-ready', () => {
    const reviewed = tracks.filter((track) => track.transcript?.reviewed)
    expect(reviewed).toHaveLength(84)

    for (const track of reviewed) {
      expect(track.transcript?.kind, track.id).toBe('full')
      expect(track.transcript?.source, track.id).toBe('source-aligned')
      for (const item of track.transcript?.items ?? []) {
        const japaneseTexts = [
          item.label,
          item.setupJa ?? '',
          item.questionJa ?? '',
          ...item.lines.map((line) => line.ja),
        ]
        for (const text of japaneseTexts) {
          const withoutAnnotatedKanji = text.replace(/\{[^{}|]+\|[^{}]+\}/gu, '')
          expect(withoutAnnotatedKanji, `${track.id}: ${text}`).not.toMatch(/[\u3400-\u9fff\u3005]/u)
        }
        for (const line of item.lines) {
          expect(line.pt.trim().length, track.id).toBeGreaterThan(0)
        }
      }
    }
  })

  it('discloses every machine transcript as unreviewed supporting text', () => {
    const machine = tracks.filter((track) => track.transcript?.source === 'machine')
    expect(machine).toHaveLength(148)
    expect(machine.length + tracks.filter((track) => track.transcript?.reviewed).length).toBe(232)

    for (const track of machine) {
      expect(track.transcript?.kind, track.id).toBe('excerpt')
      expect(track.transcript?.reviewed, track.id).toBe(false)
      for (const item of track.transcript?.items ?? []) {
        expect(item.time, `${track.id}: ${item.label}`).toBeTypeOf('number')
      }
    }
  })

  it('keeps audio questions in the FSRS review pool', () => {
    const reviewIds = new Set(
      allFlatQuestions([])
        .filter((item) => item.levelId === 'genki-2')
        .map((item) => item.q.id),
    )
    expect(reviewIds.size).toBe(781)
    for (const question of questions.filter((candidate) => candidate.audio)) {
      expect(reviewIds.has(question.id), question.id).toBe(true)
      expect(trackIds.has(question.audio?.trackId ?? ''), question.id).toBe(true)
      expect(tracksById.get(question.audio?.trackId ?? '')?.src, question.id).toBe(question.audio?.src)
    }

    const selfChecks = questions.filter((candidate) => candidate.assessment === 'self-check')
    expect(selfChecks).toHaveLength(137)
    for (const question of selfChecks) {
      expect(question.choices, question.id).toHaveLength(2)
      expect(question.answer, question.id).toBe(2)
    }
  })
})
