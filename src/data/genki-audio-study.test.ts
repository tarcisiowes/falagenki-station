import { describe, expect, it } from 'vitest'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { genki1 } from './genki-1'
import { allFlatQuestions } from '../lib/dataAccess'

describe('Genki I audio study contract', () => {
  const tracks = genki1.sections.flatMap((section) => section.audios ?? [])
  const questions = genki1.sections.flatMap((section) => section.groups.flatMap((group) => group.questions))
  const questionIds = new Set(questions.map((question) => question.id))
  const tracksById = new Map(tracks.map((track) => [track.id, track]))

  it('keeps the complete course structurally consistent after the audit', () => {
    expect(new Set(questions.map((question) => question.id)).size).toBe(questions.length)
    expect(new Set(tracks.map((track) => track.id)).size).toBe(tracks.length)
    expect(new Set(tracks.map((track) => track.src)).size).toBe(tracks.length)

    for (const section of genki1.sections) {
      const sectionQuestions = section.groups.flatMap((group) => group.questions)
      expect(sectionQuestions.map((question) => question.number), section.id).toEqual(
        Array.from({ length: sectionQuestions.length }, (_, index) => index + 1),
      )
      for (const question of sectionQuestions) {
        expect(question.choices.some((choice) => choice.n === question.answer), question.id).toBe(true)
        expect(question.explanationPt.trim().length, question.id).toBeGreaterThan(0)
      }
      for (const track of section.audios ?? []) {
        expect(existsSync(resolve('public', track.src.replace(/^\//u, ''))), track.src).toBe(true)
      }
    }
  })

  it('turns every source track into guided, reviewable study', () => {
    expect(tracks).toHaveLength(286)
    expect(new Set(tracks.map((track) => track.code)).size).toBe(tracks.length)

    for (const track of tracks) {
      expect(track.code?.trim(), track.id).toBeTruthy()
      expect(track.kind, track.id).toBeTruthy()
      expect(track.sourceActivityPt?.trim().length, track.id).toBeGreaterThan(5)
      expect(track.sourcePage, track.id).toBeGreaterThan(0)
      expect(track.purposePt?.trim().length, track.id).toBeGreaterThan(20)
      expect(track.instructionsPt?.length, track.id).toBeGreaterThanOrEqual(3)
      expect(track.practiceTaskPt?.trim().length, track.id).toBeGreaterThan(50)
      expect(track.sourceRefPt, track.id).toContain(track.code)
      expect(track.sourceRefPt, track.id).toContain(`p. ${track.sourcePage}`)
      expect(track.title, track.id).not.toMatch(/^(?:Textbook|Workbook|Prática do textbook)\s*[—-]/iu)
      expect(track.descriptionPt, track.id).not.toMatch(
        /^(?:Faixa correspondente|Áudio do diálogo, vocabulário ou prática correspondente|Compreensão oral do workbook)/iu,
      )
      expect(track.exerciseIds?.length, track.id).toBeGreaterThan(0)
      expect(track.exerciseLinkKind, track.id).toBe('direct')
      for (const id of track.exerciseIds ?? []) expect(questionIds.has(id), `${track.id} -> ${id}`).toBe(true)
      expect(
        questions.some((question) => question.audio?.trackId === track.id),
        `${track.id} needs its own reviewable audio question`,
      ).toBe(true)
    }
  })

  it('resolves every question audio back to one registered track', () => {
    const audioQuestions = questions.filter((question) => question.audio)
    expect(audioQuestions.length).toBeGreaterThan(173)

    for (const question of audioQuestions) {
      const track = tracksById.get(question.audio!.trackId ?? '')
      expect(track, question.id).toBeDefined()
      expect(track?.src, question.id).toBe(question.audio!.src)
      expect(track?.exerciseIds, question.id).toContain(question.id)
      expect(track?.exerciseLinkKind, question.id).toBe('direct')
      expect(question.helpPt?.trim().length, question.id).toBeGreaterThan(30)
    }
  })

  it('maps multi-part dialogue questions to the exact source track', () => {
    const expectedTracks = new Map([
      ['genki-1-l9-d6', 'K09_05'],
      ['genki-1-l9-d7', 'K09_05'],
      ['genki-1-l9-d8', 'K09_05'],
      ['genki-1-l11-d5', 'K11_05'],
      ['genki-1-l11-d6', 'K11_05'],
      ['genki-1-l11-d7', 'K11_05'],
      ['genki-1-l11-d8', 'K11_05'],
    ])

    for (const [questionId, expectedCode] of expectedTracks) {
      const question = questions.find((candidate) => candidate.id === questionId)
      expect(question, questionId).toBeDefined()
      expect(tracksById.get(question?.audio?.trackId ?? '')?.code, questionId).toBe(expectedCode)
    }
  })

  it('keeps every audio-backed exercise in the FSRS pool', () => {
    const reviewIds = new Set(
      allFlatQuestions([])
        .filter((item) => item.courseId === 'genki')
        .map((item) => item.q.id),
    )
    for (const question of questions.filter((item) => item.audio)) {
      expect(reviewIds.has(question.id), question.id).toBe(true)
    }
  })

  it('uses honest self-assessment for model-and-repeat audio practice', () => {
    const selfChecks = questions.filter((question) => question.assessment === 'self-check')
    expect(selfChecks.length).toBeGreaterThan(100)

    for (const question of selfChecks) {
      expect(question.audio?.trackId, question.id).toBeTruthy()
      expect(question.choices, question.id).toHaveLength(2)
      expect(question.answer, question.id).toBe(2)
      expect(question.helpPt?.trim().length, question.id).toBeGreaterThan(30)
    }
  })

  it('keeps every Japanese dialogue and reading fully transcribed and furigana-ready', () => {
    const fullStudyTracks = tracks.filter((track) =>
      track.language === 'ja' && (track.kind === 'dialogue' || track.kind === 'reading'),
    )
    expect(fullStudyTracks).toHaveLength(45)

    for (const track of fullStudyTracks) {
      expect(track.transcript?.kind, track.id).toBe('full')
      expect(track.transcript?.source, track.id).toBe('source-aligned')
      expect(track.transcript?.reviewed, track.id).toBe(true)
      expect(track.transcript?.items.length, track.id).toBeGreaterThan(0)

      const texts = (track.transcript?.items ?? []).flatMap((item) => [
        item.label,
        item.setupJa ?? '',
        item.questionJa ?? '',
        ...item.lines.map((line) => line.ja),
      ])
      for (const text of texts) {
        const withoutAnnotatedKanji = text.replace(/\{[^{}|]+\|[^{}]+\}/gu, '')
        expect(withoutAnnotatedKanji, `${track.id}: ${text}`).not.toMatch(/[一-龯々]/u)
      }
      for (const item of track.transcript?.items ?? []) {
        for (const line of item.lines) expect(line.pt.trim().length, track.id).toBeGreaterThan(0)
      }
    }
  })

  it('keeps every editorially reviewed transcript complete and translated', () => {
    const reviewedTracks = tracks.filter((track) => track.transcript?.reviewed)
    expect(reviewedTracks).toHaveLength(48)

    for (const track of reviewedTracks) {
      expect(track.transcript?.kind, track.id).toBe('full')
      expect(track.transcript?.source, track.id).toBe('source-aligned')
      expect(track.transcript?.items.length, track.id).toBeGreaterThan(0)
      for (const item of track.transcript?.items ?? []) {
        for (const line of item.lines) expect(line.pt.trim().length, track.id).toBeGreaterThan(0)
      }
    }
  })

  it('provides a visible transcript for every official audio track', () => {
    const machineTracks = tracks.filter((track) => track.transcript?.source === 'machine')
    expect(machineTracks).toHaveLength(238)

    for (const track of tracks) {
      expect(track.transcript?.items.length, track.id).toBeGreaterThan(0)
      expect(
        track.transcript?.items.some((item) => item.lines.some((line) => line.ja.trim().length > 0)),
        track.id,
      ).toBe(true)
    }

    for (const track of machineTracks) {
      expect(track.transcript?.kind, track.id).toBe('excerpt')
      expect(track.transcript?.reviewed, track.id).toBe(false)
    }
  })
})
