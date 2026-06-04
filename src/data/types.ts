// Modelo de dados do conteúdo de estudo (JLPT N5/N4).
// Texto japonês pode conter marcações:
//   {漢字|かんじ}  -> furigana (ruby)
//   [[alvo]]      -> trecho destacado (sublinhado no exame)
//   （　）         -> lacuna a preencher

export type CourseId = 'jlpt' | 'irodori'

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
  choices: Choice[]
  /** alternativa correta (1..4) */
  answer: number
  /** tradução/leitura do enunciado em pt-BR */
  translationPt?: string
  /** explicação do porquê da resposta, em pt-BR */
  explanationPt: string
}

export interface ExampleQuestion {
  prompt: string
  choices: Choice[]
  answer: number
  note?: string
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
  setupJa: string
  setupPt: string
  lines: ScriptLine[]
  /** pergunta final lida no áudio */
  questionJa?: string
  /** resposta correta (1..4 ou 1..3) quando aplicável */
  answer?: number
}

export interface AudioTrack {
  id: string
  /** ex.: 'もんだい1 — Compreensão de tarefa' */
  title: string
  descriptionPt: string
  src: string
  script: ScriptItem[]
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
