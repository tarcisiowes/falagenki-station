import type { AudioTrack, AudioTrackKind, ScriptItem } from '../data/types'

export interface AudioStudyCapabilities {
  hasTranscript: boolean
  hasTranslation: boolean
  hasFurigana: boolean
  hasAnswers: boolean
  hasExercises: boolean
}

const FURIGANA_MARKUP = /\{[^{}|]+\|[^{}]+\}/u

export function getTranscriptItems(track: AudioTrack): ScriptItem[] {
  return track.transcript?.items ?? track.script
}

function itemHasContent(item: ScriptItem): boolean {
  return Boolean(
    item.label.trim()
      || item.setupJa?.trim()
      || item.questionJa?.trim()
      || item.lines.some((line) => line.ja.trim()),
  )
}

export function getAudioStudyCapabilities(track: AudioTrack): AudioStudyCapabilities {
  const items = getTranscriptItems(track)
  const japaneseText = items.flatMap((item) => [
    item.label,
    item.setupJa ?? '',
    item.questionJa ?? '',
    ...item.lines.map((line) => line.ja),
  ])

  return {
    hasTranscript: items.some(itemHasContent),
    hasTranslation: items.some((item) =>
      Boolean(item.setupPt?.trim() || item.lines.some((line) => line.pt.trim())),
    ),
    hasFurigana: japaneseText.some((text) => FURIGANA_MARKUP.test(text)),
    hasAnswers: items.some((item) => item.answer !== undefined),
    hasExercises: Boolean(track.exerciseIds?.length),
  }
}

const KIND_LABELS: Record<AudioTrackKind, string> = {
  dialogue: 'Diálogo em japonês',
  'dialogue-support': 'Repeti\u00e7\u00e3o guiada',
  reading: 'Leitura em voz alta',
  vocabulary: 'Treino de vocabulário',
  drill: 'Prática guiada',
  workbook: 'Compreensão oral',
  reference: 'Áudio de referência',
}

export function audioKindLabelPt(kind?: AudioTrackKind): string {
  return kind ? KIND_LABELS[kind] : KIND_LABELS.reference
}

export function transcriptLabelPt(track: AudioTrack): string {
  if (track.transcript?.source === 'machine') return 'Transcrição automática de apoio'
  switch (track.transcript?.kind) {
    case 'full':
      return 'Transcrição completa'
    case 'summary':
      return 'Resumo de apoio'
    case 'excerpt':
    default:
      return 'Roteiro de apoio'
  }
}

export function transcriptDisclosurePt(track: AudioTrack): string | undefined {
  if (track.transcript?.source === 'machine' && !track.transcript.reviewed) {
    return 'Gerada automaticamente e ainda não conferida linha a linha. Pode conter omissões ou trocas; use-a para localizar trechos e confirme pelo áudio e pela atividade-fonte.'
  }
  if (track.transcript && !track.transcript.reviewed) {
    return 'Este roteiro ainda não foi conferido integralmente contra o áudio e o material-fonte.'
  }
  if (track.transcript?.kind !== 'full') {
    return 'Use este texto como apoio. Ele pode representar apenas um trecho ou resumo da faixa.'
  }
  return undefined
}
