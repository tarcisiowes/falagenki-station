// Modelo de dados do conteúdo de estudo (JLPT N5/N4).
// Texto japonês pode conter marcações:
//   {漢字|かんじ}  -> furigana (ruby)
//   [[alvo]]      -> trecho destacado (sublinhado no exame)
//   （　）         -> lacuna a preencher

export type CourseId = 'jlpt' | 'irodori' | 'genki'

export type LevelId = string

// Seções do JLPT são fixas; o Irodori usa ids de lição ('lesson-1', etc.).
export type SectionId = 'vocabulary' | 'grammar' | 'reading' | 'listening' | (string & {})

export interface Choice {
  /** número da alternativa no exame (1..4) */
  n: number
  text: string
}

export interface Question {
  /** id global estável, ex.: 'n5-vocabulary-1' */
  id: string
  /** número da questão dentro do exame */
  number: number
  /** enunciado em japonês (com marcações de furigana/destaque/lacuna) */
  prompt: string
  /** contexto opcional: situação, passagem, diálogo */
  context?: string
  /** ilustração de referência (caminho em /images/...), p/ questões baseadas em imagem */
  image?: string
  /** texto alternativo da ilustração (acessibilidade) */
  imageAlt?: string
  /** áudio necessário para responder à questão, quando aplicável */
  audio?: {
    /** Stable id of the track registered in this section. */
    trackId?: string
    src: string
    title: string
  }
  choices: Choice[]
  /** alternativa correta (1..4) */
  answer: number
  /** tradução/leitura do enunciado em pt-BR */
  translationPt?: string
  /** explicação do porquê da resposta, em pt-BR */
  explanationPt: string
  /** pista ou explicação alternativa, exibida sob demanda */
  helpPt?: string
  /** self-check records production practice instead of pretending it is an objective test. */
  assessment?: 'objective' | 'self-check'
}

export interface ExampleQuestion {
  prompt: string
  choices: Choice[]
  answer: number
  note?: string
  /** maneira alternativa de entender ou aplicar o exemplo */
  helpPt?: string
}

export interface ExerciseGroup {
  id: string
  /** título japonês, ex.: 'もんだい1' */
  title: string
  /** subtítulo curto em pt-BR, ex.: 'Leitura de kanji' */
  subtitlePt: string
  instructionJa: string
  instructionPt: string
  example?: ExampleQuestion
  questions: Question[]
}

export interface StudyNote {
  title: string
  /** corpo em pt-BR; markdown leve (## , -, **negrito**, `código`) */
  bodyPt: string
  /** explicação suplementar opcional, também em markdown leve */
  helpPt?: string
}

export interface ScriptLine {
  speaker: string // 'F', 'M', 'Narração', '1', '2', '3'...
  ja: string
  pt: string
}

export interface ScriptItem {
  /** rótulo, ex.: '例', '1番' */
  label: string
  /** posição aproximada no áudio, em segundos (para "pular para") */
  time?: number
  /** fala de abertura / situação narrada */
  setupJa?: string
  setupPt?: string
  lines: ScriptLine[]
  /** pergunta final lida no áudio */
  questionJa?: string
  /** resposta correta (1..4 ou 1..3) quando aplicável */
  answer?: number
}

export type AudioTrackKind =
  | 'dialogue'
  | 'dialogue-support'
  | 'reading'
  | 'vocabulary'
  | 'drill'
  | 'workbook'
  | 'reference'

export interface AudioTranscript {
  /** full = complete; excerpt = faithful subset; summary = supporting paraphrase. */
  kind: 'full' | 'excerpt' | 'summary'
  /** Editorial origin of the displayed text. */
  source: 'official' | 'source-aligned' | 'manual' | 'machine'
  /** Whether the text was checked against the audio and source material. */
  reviewed: boolean
  items: ScriptItem[]
}

export interface AudioTrack {
  id: string
  /** Displayable source track code, such as K01_01 or W03_B. */
  code?: string
  kind?: AudioTrackKind
  language?: 'ja' | 'en' | 'mixed'
  /** ex.: 'もんだい1 — Compreensão de tarefa' */
  title: string
  descriptionPt: string
  /** Intended learning outcome for the track. */
  purposePt?: string
  /** Short action sequence that turns listening into active practice. */
  instructionsPt?: string[]
  /** Human-readable reference to the source textbook, workbook, or section. */
  sourceRefPt?: string
  /** Source activity name translated for the learner. */
  sourceActivityPt?: string
  /** Printed source page, when identified from the official track metadata. */
  sourcePage?: number
  /** Concrete action the learner should perform while using this track. */
  practiceTaskPt?: string
  /** Exercise groups and questions that continue the track as reviewable practice. */
  exerciseGroupIds?: string[]
  exerciseIds?: string[]
  /** direct = based on this track; group = related practice for the same skill. */
  exerciseLinkKind?: 'direct' | 'group'
  src: string
  script: ScriptItem[]
  /** Explicit metadata; `script` remains for backward compatibility with legacy content. */
  transcript?: AudioTranscript
}

export interface Section {
  id: SectionId
  level: LevelId
  titleJa: string
  titlePt: string
  summaryPt: string
  studyNotes: StudyNote[]
  groups: ExerciseGroup[]
  audios?: AudioTrack[]
}

export interface Level {
  id: LevelId
  courseId: CourseId
  titlePt: string
  descriptionPt: string
  sections: Section[]
}

export interface Course {
  id: CourseId
  titlePt: string
  /** subtítulo curto para o menu */
  taglinePt: string
  levels: Level[]
}
