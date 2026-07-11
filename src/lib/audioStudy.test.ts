import { describe, expect, it } from 'vitest'
import type { AudioTrack } from '../data/types'
import {
  getAudioStudyCapabilities,
  getTranscriptItems,
  transcriptLabelPt,
  transcriptDisclosurePt,
} from './audioStudy'

function track(overrides: Partial<AudioTrack> = {}): AudioTrack {
  return {
    id: 'track-1',
    title: 'Faixa de teste',
    descriptionPt: 'Descrição.',
    src: '/audio/test.mp3',
    script: [],
    ...overrides,
  }
}

describe('audio study capabilities', () => {
  it('does not advertise controls for an empty track', () => {
    expect(getAudioStudyCapabilities(track())).toEqual({
      hasTranscript: false,
      hasTranslation: false,
      hasFurigana: false,
      hasAnswers: false,
      hasExercises: false,
    })
  })

  it('detects only the controls backed by real transcript content', () => {
    const result = getAudioStudyCapabilities(track({
      exerciseIds: ['question-1'],
      script: [{
        label: '会話',
        lines: [{ speaker: 'M', ja: '{学校|がっこう}へ 行きます。', pt: 'Vou à escola.' }],
        answer: 2,
      }],
    }))

    expect(result).toEqual({
      hasTranscript: true,
      hasTranslation: true,
      hasFurigana: true,
      hasAnswers: true,
      hasExercises: true,
    })
  })

  it('prefers explicit transcript metadata and labels its completeness honestly', () => {
    const explicit = track({
      script: [{ label: 'legado', lines: [] }],
      transcript: {
        kind: 'full',
        source: 'source-aligned',
        reviewed: true,
        items: [{ label: '全文', lines: [{ speaker: 'N', ja: '全文です。', pt: 'É o texto completo.' }] }],
      },
    })

    expect(getTranscriptItems(explicit)[0].label).toBe('全文')
    expect(transcriptLabelPt(explicit)).toBe('Transcrição completa')
    expect(transcriptLabelPt(track())).toBe('Roteiro de apoio')
  })

  it('marks unreviewed machine text as supporting transcription', () => {
    const machineTrack = track({
      transcript: {
        kind: 'excerpt',
        source: 'machine',
        reviewed: false,
        items: [{ label: '0:00', lines: [{ speaker: 'Áudio', ja: 'れんしゅう', pt: '' }] }],
      },
    })

    expect(transcriptLabelPt(machineTrack)).toBe('Transcrição automática de apoio')
    expect(transcriptDisclosurePt(machineTrack)).toContain('ainda não conferida')
  })
})
