import type {
  AudioTrack,
  AudioTrackKind,
  AudioTranscript,
  ExerciseGroup,
  Level,
  Question,
  Section,
} from './types'
import { genki1AudioSourceByCode, type Genki1AudioSourceMetadata } from './genki-1-audio-source'
import { genki2AudioSourceByCode } from './genki-2-audio-source'
import genki1MachineTranscriptData from './genki-1-machine-transcripts.json'

export interface MachineTranscriptSegment {
  start: number
  end: number
  text: string
}

export interface MachineTranscriptRecord {
  language: string
  languageProbability: number
  duration: number
  segments: MachineTranscriptSegment[]
}

export type MachineTranscriptCollection = Record<string, MachineTranscriptRecord>

const genki1MachineTranscripts = genki1MachineTranscriptData as MachineTranscriptCollection

interface TrackSlice {
  code: string
  end: number
}

interface ReadingAssignment {
  start: number
  slices: TrackSlice[]
}

const DIALOGUE_ASSIGNMENTS: Record<string, TrackSlice[]> = {
  'lesson-1': [{ code: 'K01_01', end: 3 }, { code: 'K01_03', end: 8 }],
  'lesson-2': [{ code: 'K02_01', end: 3 }, { code: 'K02_03', end: 8 }],
  'lesson-3': [{ code: 'K03_01', end: 5 }, { code: 'K03_03', end: 8 }],
  'lesson-4': [{ code: 'K04_01', end: 1 }, { code: 'K04_03', end: 4 }, { code: 'K04_05', end: 8 }],
  'lesson-5': [{ code: 'K05_01', end: 4 }, { code: 'K05_03', end: 7 }, { code: 'K05_05', end: 10 }],
  'lesson-6': [{ code: 'K06_01', end: 3 }, { code: 'K06_03', end: 6 }, { code: 'K06_05', end: 10 }],
  'lesson-7': [{ code: 'K07_01', end: 7 }, { code: 'K07_03', end: 10 }],
  'lesson-8': [{ code: 'K08_01', end: 3 }, { code: 'K08_03', end: 8 }],
  'lesson-9': [{ code: 'K09_01', end: 3 }, { code: 'K09_03', end: 5 }, { code: 'K09_05', end: 8 }],
  'lesson-10': [{ code: 'K10_01', end: 4 }, { code: 'K10_03', end: 8 }],
  'lesson-11': [{ code: 'K11_01', end: 2 }, { code: 'K11_03', end: 4 }, { code: 'K11_05', end: 8 }],
  'lesson-12': [{ code: 'K12_01', end: 3 }, { code: 'K12_03', end: 8 }],
}

const READING_ASSIGNMENTS: Record<string, ReadingAssignment> = {
  'lesson-3': { start: 5, slices: [{ code: 'Y03', end: 5 }] },
  'lesson-4': { start: 5, slices: [{ code: 'Y04', end: 5 }] },
  'lesson-5': { start: 8, slices: [{ code: 'Y05_1', end: 3 }, { code: 'Y05_2', end: 6 }] },
  'lesson-6': { start: 6, slices: [{ code: 'Y06', end: 4 }] },
  'lesson-7': { start: 6, slices: [{ code: 'Y07', end: 6 }] },
  'lesson-8': { start: 4, slices: [{ code: 'Y08', end: 4 }] },
  'lesson-9': { start: 4, slices: [{ code: 'Y09_1', end: 3 }, { code: 'Y09_2', end: 4 }] },
  'lesson-10': { start: 2, slices: [{ code: 'Y10', end: 4 }] },
  'lesson-11': { start: 3, slices: [{ code: 'Y11_1', end: 2 }, { code: 'Y11_2', end: 5 }] },
  'lesson-12': { start: 4, slices: [{ code: 'Y12', end: 4 }] },
}

const PURPOSES: Record<AudioTrackKind, string> = {
  dialogue: 'Compreender a situação e reconhecer as estruturas centrais da lição em fala natural.',
  'dialogue-support': 'Confirmar o sentido do diálogo depois de tentar compreendê-lo em japonês.',
  reading: 'Acompanhar uma leitura contínua, perceber ritmo e entonação e conferir a compreensão de detalhes.',
  vocabulary: 'Treinar reconhecimento e produção oral do vocabulário antes de usá-lo nas atividades.',
  drill: 'Ouvir o modelo do textbook, pausar e produzir uma resposta própria antes da gravação.',
  workbook: 'Responder às questões de compreensão oral usando o áudio como fonte principal.',
  reference: 'Usar a faixa como referência de pronúncia e compreensão da lição.',
}

const INSTRUCTIONS: Record<AudioTrackKind, string[]> = {
  dialogue: [
    'Ouça uma vez sem abrir o roteiro e identifique quem fala, onde estão e o objetivo da conversa.',
    'Responda aos exercícios vinculados usando apenas o que conseguiu ouvir.',
    'Abra o roteiro, confira os trechos difíceis e repita em voz alta acompanhando o ritmo.',
  ],
  'dialogue-support': [
    'Tente primeiro a versão japonesa do diálogo.',
    'Use esta faixa somente para confirmar o sentido geral que você entendeu.',
    'Volte ao japonês e repita as partes que não reconheceu na primeira escuta.',
  ],
  reading: [
    'Ouça uma vez sem ler e anote o tema e duas informações que reconheceu.',
    'Responda aos exercícios vinculados e depois acompanhe o texto durante a segunda escuta.',
    'Use o loop A-B para repetir uma frase e imitá-la em voz alta.',
  ],
  vocabulary: [
    'Ouça o estímulo, pause antes da resposta e tente produzir a palavra em voz alta.',
    'Marque as palavras que demorou a recuperar e pratique os exercícios vinculados.',
    'Repita a faixa em 1× até responder sem depender da ordem da lista.',
  ],
  drill: [
    'Identifique o padrão pedido pela faixa e prepare sua resposta antes do modelo.',
    'Pause, responda em voz alta e só então continue para comparar.',
    'Faça os exercícios vinculados; eles entram normalmente na revisão FSRS.',
  ],
  workbook: [
    'Leia primeiro o enunciado e as alternativas do exercício vinculado.',
    'Ouça sem olhar a correção, escolha uma resposta e registre sua justificativa.',
    'Confira a explicação e repita somente o trecho que contém a evidência.',
  ],
  reference: [
    'Ouça uma vez para reconhecer o conteúdo geral.',
    'Repita os trechos difíceis em velocidade reduzida.',
    'Consolide a habilidade nos exercícios vinculados.',
  ],
}

function trackCode(track: AudioTrack): string {
  if (track.code) return track.code
  const file = decodeURIComponent(track.src).split('/').pop() ?? track.id
  return file.replace(/\.[^.]+$/u, '')
}

function hasScript(track: AudioTrack): boolean {
  return track.script.some((item) =>
    Boolean(item.setupJa?.trim() || item.questionJa?.trim() || item.lines.some((line) => line.ja.trim())),
  )
}

function inferKind(track: AudioTrack, allTracks: AudioTrack[]): AudioTrackKind {
  if (track.kind) return track.kind
  const code = trackCode(track).toUpperCase()
  const title = track.title.toLocaleLowerCase('pt-BR')
  if (code.startsWith('W')) return 'workbook'
  if (code.startsWith('Y')) return 'reading'
  if (!code.startsWith('K')) return 'reference'
  if (title.includes('apoio em inglês')) return 'dialogue-support'
  if (title.includes('vocabul')) return 'vocabulary'
  if (title.includes('diálogo')) return 'dialogue'

  const number = Number(code.match(/_(\d+)$/u)?.[1])
  const scriptedNumbers = allTracks
    .filter((candidate) => trackCode(candidate).toUpperCase().startsWith(code.slice(0, 3)) && hasScript(candidate))
    .map((candidate) => Number(trackCode(candidate).match(/_(\d+)$/u)?.[1]))
    .filter(Number.isFinite)
  const lastDialogue = scriptedNumbers.length ? Math.max(...scriptedNumbers) : 5

  if (number <= lastDialogue + 1) return number % 2 === 0 ? 'dialogue-support' : 'dialogue'
  if (number <= lastDialogue + 3) return 'vocabulary'
  return 'drill'
}

function inferLanguage(kind: AudioTrackKind): AudioTrack['language'] {
  if (kind === 'dialogue-support') return 'en'
  if (kind === 'vocabulary' || kind === 'drill' || kind === 'workbook') return 'mixed'
  return 'ja'
}

function sourceReference(
  level: Level,
  section: Section,
  code: string,
  source?: Genki1AudioSourceMetadata,
): string {
  const volume = level.id === 'genki-1' ? 'Genki I' : level.id === 'genki-2' ? 'Genki II' : level.titlePt
  const material = source?.material === 'workbook' || code.toUpperCase().startsWith('W') ? 'Workbook' : 'Textbook'
  if (source) {
    return `${volume} ${material}, ${source.sourceActivityPt}, p. ${source.sourcePage}, faixa ${code}`
  }
  const lesson = section.id.replace('lesson-', '')
  return `${volume} ${material}, lição ${lesson}, faixa ${code}`
}

function isGenericTrackTitle(title: string, code: string): boolean {
  const normalized = title.trim().toLocaleLowerCase('pt-BR')
  return normalized === code.toLocaleLowerCase('pt-BR')
    || /^(?:textbook|workbook)\s*[—-]/iu.test(normalized)
    || /^prática do textbook\s*[—-]/iu.test(normalized)
    || normalized.endsWith(code.toLocaleLowerCase('pt-BR'))
}

function isGenericTrackDescription(description: string): boolean {
  return /^(?:faixa correspondente|áudio do diálogo, vocabulário ou prática correspondente|compreensão oral do workbook|leitura integral\.?$)/iu
    .test(description.trim())
}

function sourceDescription(source: Genki1AudioSourceMetadata): string {
  const material = source.material === 'workbook' ? 'workbook' : 'textbook'
  return `Faixa oficial da atividade “${source.sourceActivityPt}”, na página ${source.sourcePage} do ${material}.`
}

function practiceTask(kind: AudioTrackKind, source?: Genki1AudioSourceMetadata): string | undefined {
  if (!source) return undefined
  const activity = `${source.sourceActivityPt} (p. ${source.sourcePage})`
  if (kind === 'dialogue-support') {
    return `Ouça primeiro o diálogo em japonês e formule o sentido com suas palavras. Só então use a atividade ${activity} para conferir e volte à faixa japonesa.`
  }
  if (kind === 'vocabulary') {
    return `Faça a atividade ${activity}: pause antes de cada equivalente, recupere a palavra em voz alta e compare sua pronúncia com o modelo.`
  }
  if (kind === 'drill') {
    return `Faça a atividade ${activity}: identifique o padrão, pause após cada estímulo, produza a resposta completa e só depois ouça o modelo.`
  }
  if (kind === 'reading') {
    return `Use a atividade ${activity}: ouça sem ler, identifique o conteúdo central e depois acompanhe e repita um trecho no ritmo da gravação.`
  }
  if (kind === 'workbook') {
    return `Abra a atividade ${activity}, leia o enunciado e responda aos cartões vinculados usando a faixa como fonte principal.`
  }
  if (kind === 'dialogue') {
    return `Ouça a atividade ${activity} sem roteiro, identifique situação e intenção e responda aos cartões antes de conferir a transcrição.`
  }
  return `Use a atividade ${activity}, realize a tarefa indicada antes do modelo e registre o resultado nos cartões vinculados.`
}

function formatTimestamp(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remaining = Math.floor(seconds % 60)
  return `${minutes}:${remaining.toString().padStart(2, '0')}`
}

function machineTranscript(
  level: Level,
  code: string,
  additionalTranscripts: MachineTranscriptCollection,
): AudioTranscript | undefined {
  const data = level.id === 'genki-1'
    ? genki1MachineTranscripts[code]
    : additionalTranscripts[code]
  if (!data?.segments.length) return undefined
  const items: AudioTranscript['items'] = []
  for (const segment of data.segments) {
    const current = items[items.length - 1]
    const shouldStartItem = !current
      || current.lines.length >= 12
      || segment.start - (current.time ?? segment.start) >= 45
    const line = {
      speaker: data.language === 'en' ? 'EN' : 'Áudio',
      ja: segment.text,
      pt: '',
    }
    if (shouldStartItem) {
      items.push({
        label: `Trecho ${items.length + 1} · ${formatTimestamp(segment.start)}`,
        time: segment.start,
        lines: [line],
      })
    } else {
      current.lines.push(line)
    }
  }
  return {
    kind: 'excerpt',
    source: 'machine',
    reviewed: false,
    items,
  }
}

function addAssignments(
  map: Map<string, string>,
  questions: Question[],
  slices: TrackSlice[],
) {
  let start = 0
  for (const slice of slices) {
    for (const question of questions.slice(start, slice.end)) map.set(question.id, slice.code)
    start = slice.end
  }
}

function questionAssignments(section: Section): Map<string, string> {
  const assignments = new Map<string, string>()
  const dialogueGroup = section.groups.find((group) => group.id.endsWith('-dialogue'))
  const dialogueSlices = DIALOGUE_ASSIGNMENTS[section.id]
  if (dialogueGroup && dialogueSlices) addAssignments(assignments, dialogueGroup.questions, dialogueSlices)

  const reading = READING_ASSIGNMENTS[section.id]
  const readingGroup = section.groups.find((group) =>
    group.id.includes('kanji-reading') || group.id.endsWith('-reading'),
  )
  if (reading && readingGroup) {
    addAssignments(assignments, readingGroup.questions.slice(reading.start), reading.slices)
  }
  return assignments
}

function inferredGroups(kind: AudioTrackKind, groups: ExerciseGroup[]): ExerciseGroup[] {
  const dialogue = groups.filter((group) => group.id.endsWith('-dialogue'))
  const reading = groups.filter((group) =>
    group.id.includes('kanji-reading') || group.id.includes('katakana') || group.id.endsWith('-reading'),
  )
  const listening = groups.filter((group) => group.id.endsWith('-listening'))
  const vocabulary = groups.filter((group) => group.id.endsWith('-vocabulary'))
  const grammar = groups.filter((group) =>
    !dialogue.includes(group)
      && !reading.includes(group)
      && !listening.includes(group)
      && !vocabulary.includes(group),
  )

  if (kind === 'dialogue' || kind === 'dialogue-support') return dialogue
  if (kind === 'reading') return reading
  if (kind === 'workbook') return listening
  if (kind === 'vocabulary') return vocabulary.length ? vocabulary : [...dialogue, ...grammar]
  if (kind === 'drill') return grammar.length ? grammar : groups
  return groups
}

function unique(values: string[]): string[] {
  return [...new Set(values)]
}

function audioQuestionHelp(track: AudioTrack): string {
  const label = track.code ?? track.title
  if (track.kind === 'workbook') {
    return `Ouça a faixa ${label} uma vez para captar a situação. Na segunda escuta, procure a palavra ou o número que comprova sua alternativa; use o loop A-B somente nesse trecho.`
  }
  if (track.kind === 'reading') {
    return `Tente responder pela faixa ${label} antes de acompanhar o texto. Depois, repita a frase que contém a evidência e compare sua leitura com o ritmo do áudio.`
  }
  return `Ouça a faixa ${label} sem consultar o roteiro. Escolha pela informação explícita do diálogo e, depois de responder, volte ao trecho que confirma a alternativa.`
}

function selfCheckPrompt(track: AudioTrack): string {
  if (track.practiceTaskPt) return track.practiceTaskPt
  if (track.kind === 'dialogue-support') {
    return 'Use o apoio somente depois da versão japonesa e volte ao diálogo original para confirmar o que reconheceu.'
  }
  if (track.kind === 'vocabulary') {
    return 'Pause antes da resposta gravada e produza cada palavra em voz alta.'
  }
  if (track.kind === 'drill') {
    return 'Pause antes do modelo, produza sua resposta completa e depois compare forma e pronúncia.'
  }
  if (track.kind === 'reading') {
    return 'Acompanhe o ritmo da leitura e repita em voz alta um trecho usando o loop A-B.'
  }
  return 'Realize a tarefa oral indicada pela faixa antes de ouvir o modelo completo.'
}

function selfCheckChoices(track: AudioTrack): Pick<Question, 'choices' | 'answer' | 'explanationPt'> {
  if (track.kind === 'dialogue-support') {
    return {
      choices: [
        { n: 1, text: 'Consultei o apoio cedo demais ou ainda não consegui confirmar o sentido do diálogo japonês.' },
        { n: 2, text: 'Ouvi o japonês primeiro, formulei minha interpretação e usei o apoio só para conferir.' },
      ],
      answer: 2,
      explanationPt: 'Esta é uma autoavaliação de estratégia. Marque a primeira opção se o apoio substituiu sua escuta; marque a segunda somente se você tentou compreender o japonês antes, conferiu o sentido e voltou à faixa original.',
    }
  }
  if (track.kind === 'vocabulary') {
    return {
      choices: [
        { n: 1, text: 'Ainda não recuperei todas as palavras antes do modelo; preciso repetir.' },
        { n: 2, text: 'Produzi as palavras antes do modelo e comparei minha pronúncia.' },
      ],
      answer: 2,
      explanationPt: 'Esta é uma autoavaliação de recuperação e pronúncia. Marque a primeira opção quando alguma palavra ainda depender do modelo; marque a segunda somente depois de produzir antes da gravação e fazer a comparação.',
    }
  }
  if (track.kind === 'reading') {
    return {
      choices: [
        { n: 1, text: 'Ainda não acompanhei o trecho no ritmo da gravação; preciso repetir.' },
        { n: 2, text: 'Acompanhei o trecho, repeti em voz alta e comparei ritmo e pronúncia.' },
      ],
      answer: 2,
      explanationPt: 'Esta é uma autoavaliação de leitura em voz alta. Marque a primeira opção se ainda houver pausas ou trechos não reconhecidos; marque a segunda depois de repetir e comparar com a gravação.',
    }
  }
  return {
    choices: [
      { n: 1, text: 'Ainda não consegui fazer a tarefa antes do modelo; preciso repetir.' },
      { n: 2, text: 'Consegui fazer a tarefa antes do modelo e comparei minha produção.' },
    ],
    answer: 2,
    explanationPt: 'Esta é uma autoavaliação de produção oral. Marque a primeira opção quando precisar repetir a faixa; marque a segunda somente depois de produzir antes do modelo e fazer a comparação.',
  }
}

function enrichSection(
  level: Level,
  section: Section,
  machineTranscripts: MachineTranscriptCollection,
): Section {
  const originalTracks = section.audios ?? []
  const tracks = originalTracks.map((track) => {
    const code = trackCode(track)
    const kind = inferKind(track, originalTracks)
    const source = level.id === 'genki-1'
      ? genki1AudioSourceByCode[code]
      : level.id === 'genki-2'
        ? genki2AudioSourceByCode[code]
        : undefined
    return {
      ...track,
      title: source && isGenericTrackTitle(track.title, code) ? source.sourceActivityPt : track.title,
      descriptionPt: source && isGenericTrackDescription(track.descriptionPt)
        ? sourceDescription(source)
        : track.descriptionPt,
      code,
      kind,
      language: track.language ?? inferLanguage(kind),
      purposePt: track.purposePt ?? `${PURPOSES[kind]}${source ? ` Atividade-fonte: ${source.sourceActivityPt}, p. ${source.sourcePage}.` : ''}`,
      instructionsPt: track.instructionsPt ?? INSTRUCTIONS[kind],
      sourceRefPt: source ? sourceReference(level, section, code, source) : track.sourceRefPt ?? sourceReference(level, section, code),
      sourceActivityPt: track.sourceActivityPt ?? source?.sourceActivityPt,
      sourcePage: track.sourcePage ?? source?.sourcePage,
      practiceTaskPt: track.practiceTaskPt ?? practiceTask(kind, source),
      transcript: track.transcript ?? (hasScript(track)
        ? { kind: 'excerpt' as const, source: 'manual' as const, reviewed: false, items: track.script }
        : machineTranscript(level, code, machineTranscripts)),
    }
  })
  const tracksByCode = new Map(tracks.map((track) => [track.code!.toUpperCase(), track]))
  const tracksBySrc = new Map(tracks.map((track) => [track.src, track]))
  const assignments = questionAssignments(section)

  let groups: ExerciseGroup[] = section.groups.map((group) => ({
    ...group,
    questions: group.questions.map((question) => {
      const assigned = assignments.get(question.id)
      const track = assigned
        ? tracksByCode.get(assigned.toUpperCase())
        : question.audio?.trackId
          ? tracks.find((candidate) => candidate.id === question.audio!.trackId)
          : question.audio
            ? tracksBySrc.get(question.audio.src)
            : undefined
      if (!track) return question
      return {
        ...question,
        helpPt: question.helpPt ?? audioQuestionHelp(track),
        audio: {
          trackId: track.id,
          src: track.src,
          title: question.audio?.title ?? track.title,
        },
      }
    }),
  }))

  const linkedTrackIds = new Set(
    groups.flatMap((group) => group.questions)
      .map((question) => question.audio?.trackId)
      .filter((id): id is string => Boolean(id)),
  )
  const firstPracticeNumber = groups.flatMap((group) => group.questions).length + 1
  const selfCheckQuestions: Question[] = tracks
    .filter((track) => !linkedTrackIds.has(track.id))
    .map((track, index) => {
      const assessment = selfCheckChoices(track)
      return {
        id: `${track.id}-practice`,
        number: firstPracticeNumber + index,
        context: track.purposePt,
        prompt: `${track.code}: ${selfCheckPrompt(track)} Como foi sua tentativa?`,
        audio: { trackId: track.id, src: track.src, title: track.title },
        ...assessment,
        helpPt: track.instructionsPt?.join(' ') ?? 'Ouça, pause, produza em voz alta e compare com o modelo.',
        assessment: 'self-check' as const,
      }
    })

  if (selfCheckQuestions.length) {
    groups = [...groups, {
      id: `${level.id}-${section.id}-audio-practice`,
      title: '音声練習',
      subtitlePt: 'Produção oral e autoavaliação das faixas',
      instructionJa: '{音声|おんせい}を {聞|き}いて、モデルの {前|まえ}に {答|こた}えてください。',
      instructionPt: 'Estas cartas não fingem ter um gabarito factual: produza em voz alta antes do modelo e registre honestamente se precisa repetir. Cada tentativa entra na revisão FSRS.',
      questions: selfCheckQuestions,
    }]
  }

  const questionsById = new Map(groups.flatMap((group) => group.questions).map((question) => [question.id, question]))
  const groupByQuestion = new Map<string, string>()
  for (const group of groups) for (const question of group.questions) groupByQuestion.set(question.id, group.id)

  const enrichedTracks = tracks.map((track) => {
    const directIds = groups
      .flatMap((group) => group.questions)
      .filter((question) => question.audio?.trackId === track.id)
      .map((question) => question.id)
    const explicitGroups = (track.exerciseGroupIds ?? []).filter((id) => groups.some((group) => group.id === id))
    const directGroups = directIds.map((id) => groupByQuestion.get(id)).filter((id): id is string => Boolean(id))
    const fallbackGroups = explicitGroups.length || directGroups.length
      ? []
      : inferredGroups(track.kind ?? 'reference', groups).map((group) => group.id)
    const exerciseGroupIds = unique([...explicitGroups, ...directGroups, ...fallbackGroups])
    const groupQuestionIds = directIds.length
      ? []
      : exerciseGroupIds.flatMap((id) =>
          groups.find((group) => group.id === id)?.questions.map((question) => question.id) ?? [],
        )
    const exerciseIds = unique([
      ...(track.exerciseIds ?? []).filter((id) => questionsById.has(id)),
      ...directIds,
      ...groupQuestionIds,
    ])
    const exerciseLinkKind = directIds.length || track.exerciseIds?.length ? 'direct' as const : 'group' as const
    return { ...track, exerciseGroupIds, exerciseIds, exerciseLinkKind }
  })

  return { ...section, groups, audios: enrichedTracks }
}

/** Adds explicit audio-study metadata and stable review cards for otherwise unlinked tracks. */
export function enrichGenkiLevel(
  level: Level,
  machineTranscripts: MachineTranscriptCollection = {},
): Level {
  return {
    ...level,
    sections: level.sections.map((section) => enrichSection(level, section, machineTranscripts)),
  }
}
