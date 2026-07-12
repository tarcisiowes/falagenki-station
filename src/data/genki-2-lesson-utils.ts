import { genki2AudioSourceByCode } from './genki-2-audio-source'
import type {
  AudioTrack,
  AudioTrackKind,
  ExerciseGroup,
  Question,
  ScriptItem,
} from './types'

type QuestionExtras = Partial<
  Pick<Question, 'assessment' | 'audio' | 'context' | 'helpPt' | 'translationPt'>
>

interface AudioBuildOptions {
  lesson: number
  scripts?: Record<string, ScriptItem[]>
  dialogueCodes?: string[]
  dialogueSupportCodes?: string[]
  vocabularyCodes?: string[]
  kindByCode?: Partial<Record<string, AudioTrackKind>>
}

const purposeByKind: Record<AudioTrackKind, string> = {
  dialogue: 'Compreender a situação, a intenção dos falantes e as estruturas centrais em fala natural.',
  'dialogue-support': 'Confirmar o sentido do diálogo somente depois de tentar compreender a versão japonesa.',
  reading: 'Acompanhar uma leitura contínua, localizar informações e praticar ritmo e entonação.',
  vocabulary: 'Reconhecer e produzir o vocabulário da lição antes de usá-lo nas atividades.',
  drill: 'Pausar antes do modelo, produzir a estrutura-alvo e comparar forma e pronúncia.',
  workbook: 'Resolver uma tarefa de compreensão oral usando a gravação como fonte principal.',
  reference: 'Usar a faixa como referência de compreensão e pronúncia.',
}

const instructionsByKind: Record<AudioTrackKind, string[]> = {
  dialogue: [
    'Ouça uma vez sem abrir a transcrição e identifique quem fala, onde está e qual é o objetivo da conversa.',
    'Responda aos cartões vinculados usando o que conseguiu ouvir.',
    'Confira a transcrição e repita em voz alta os trechos difíceis.',
  ],
  'dialogue-support': [
    'Ouça primeiro a versão japonesa.',
    'Explique com suas palavras o que entendeu e use esta faixa apenas para conferir.',
    'Volte ao japonês e repita o trecho que não reconheceu.',
  ],
  reading: [
    'Ouça sem ler e anote o tema e duas informações reconhecidas.',
    'Responda aos cartões e acompanhe o texto na segunda escuta.',
    'Repita uma frase com o loop A-B, imitando o ritmo da gravação.',
  ],
  vocabulary: [
    'Pause antes da resposta e tente produzir a palavra em voz alta.',
    'Anote as palavras que demorou a recuperar.',
    'Repita até responder sem depender da ordem da lista.',
  ],
  drill: [
    'Identifique a estrutura pedida pela atividade.',
    'Pause, responda em voz alta e só depois continue para comparar.',
    'Registre honestamente a tentativa no cartão de autoavaliação.',
  ],
  workbook: [
    'Leia o enunciado e as alternativas antes de tocar.',
    'Ouça sem consultar a correção e registre sua resposta.',
    'Confira a explicação e repita o trecho que contém a evidência.',
  ],
  reference: [
    'Ouça para reconhecer o conteúdo geral.',
    'Repita os trechos difíceis em velocidade reduzida.',
    'Consolide a habilidade nos cartões vinculados.',
  ],
}

export function genki2TrackId(lesson: number, code: string): string {
  return `genki-2-l${lesson}-audio-${code.toLowerCase()}`
}

export function genki2QuestionAudio(lesson: number, code: string, title: string) {
  return {
    trackId: genki2TrackId(lesson, code),
    src: `/audio/genki/genki-2/lesson-${lesson}/${code}.mp3`,
    title,
  }
}

export function genki2Question(
  lesson: number,
  id: string,
  number: number,
  prompt: string,
  choices: string[],
  answer: number,
  explanationPt: string,
  extras: QuestionExtras = {},
): Question {
  return {
    id: `genki-2-l${lesson}-${id}`,
    number,
    prompt,
    choices: choices.map((text, index) => ({ n: index + 1, text })),
    answer,
    explanationPt,
    helpPt: extras.helpPt ?? `Outra forma de conferir: ${explanationPt}`,
    ...extras,
  }
}

export function genki2Group(
  lesson: number,
  id: string,
  title: string,
  subtitlePt: string,
  questions: Question[],
  instructionPt = `Resolva as questões de ${subtitlePt.toLowerCase()} e use a ajuda quando precisar de outra explicação.`,
): ExerciseGroup {
  return {
    id: `genki-2-l${lesson}-${id}`,
    title,
    subtitlePt,
    instructionJa: '',
    instructionPt,
    questions,
  }
}

function inferKind(code: string, options: AudioBuildOptions): AudioTrackKind {
  const explicit = options.kindByCode?.[code]
  if (explicit) return explicit
  if (code.startsWith('W')) return 'workbook'
  if (code.startsWith('Y')) return 'reading'
  if (options.dialogueCodes?.includes(code)) return 'dialogue'
  if (options.dialogueSupportCodes?.includes(code)) return 'dialogue-support'
  if (options.vocabularyCodes?.includes(code)) return 'vocabulary'
  return 'drill'
}

function practiceTask(kind: AudioTrackKind, activity: string, page: number): string {
  const source = `${activity} (p. ${page})`
  if (kind === 'dialogue') {
    return `Ouça ${source} sem roteiro, identifique situação e intenção e responda aos cartões antes de conferir a transcrição.`
  }
  if (kind === 'dialogue-support') {
    return `Tente primeiro o diálogo japonês de ${source}; formule o sentido, confira com esta faixa e volte à gravação original.`
  }
  if (kind === 'reading') {
    return `Use ${source}: ouça sem ler, localize o tema e detalhes e depois acompanhe e repita um trecho no ritmo da gravação.`
  }
  if (kind === 'vocabulary') {
    return `Faça ${source}: pause antes de cada equivalente, recupere a palavra em voz alta e compare sua pronúncia.`
  }
  if (kind === 'workbook') {
    return `Abra ${source}, leia a tarefa e responda aos cartões vinculados usando o áudio como fonte principal.`
  }
  return `Faça ${source}: identifique o padrão, pause após cada estímulo, produza a resposta e só então ouça o modelo.`
}

export function buildGenki2Audios(options: AudioBuildOptions): AudioTrack[] {
  const prefix = String(options.lesson)
  return Object.entries(genki2AudioSourceByCode)
    .filter(([code]) =>
      code.startsWith(`K${prefix}_`)
      || code.startsWith(`W${prefix}_`)
      || code === `Y${prefix}`
      || code.startsWith(`Y${prefix}_`),
    )
    .map(([code, source]) => {
      const kind = inferKind(code, options)
      const script = options.scripts?.[code] ?? []
      return {
        id: genki2TrackId(options.lesson, code),
        code,
        kind,
        language: kind === 'dialogue-support' ? 'en' : kind === 'dialogue' || kind === 'reading' ? 'ja' : 'mixed',
        title: source.sourceActivityPt,
        descriptionPt: `Faixa oficial da atividade “${source.sourceActivityPt}”, na página ${source.sourcePage} do ${source.material === 'workbook' ? 'workbook' : 'textbook'}.`,
        purposePt: purposeByKind[kind],
        instructionsPt: instructionsByKind[kind],
        sourceRefPt: `Genki II ${source.material === 'workbook' ? 'Workbook' : 'Textbook'}, ${source.sourceActivityPt}, p. ${source.sourcePage}, faixa ${code}`,
        sourceActivityPt: source.sourceActivityPt,
        sourcePage: source.sourcePage,
        practiceTaskPt: practiceTask(kind, source.sourceActivityPt, source.sourcePage),
        src: `/audio/genki/genki-2/lesson-${options.lesson}/${code}.mp3`,
        script,
        transcript: script.length
          ? { kind: 'full', source: 'source-aligned', reviewed: true, items: script }
          : undefined,
      }
    })
}
