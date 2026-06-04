import { levels, getLevel, getSection } from '../data'
import type { ExerciseGroup, LevelId, Question, Section, SectionId } from '../data/types'
import { customToQuestion, type CustomQuestion } from './customStore'

// Tempo-alvo por questão (segundos) usado no simulado e como "esperado" na análise.
export const SEC_PER_QUESTION: Record<SectionId, number> = {
  vocabulary: 45,
  grammar: 60,
  reading: 110,
  listening: 0,
}

export interface FlatQuestion {
  q: Question
  levelId: LevelId
  levelTitlePt: string
  sectionId: SectionId
  sectionTitlePt: string
  groupTitle: string
  /** true se for uma questão criada pelo usuário */
  custom: boolean
}

function customForSection(custom: CustomQuestion[], levelId: string, sectionId: string) {
  return custom.filter((c) => c.levelId === levelId && c.sectionId === sectionId)
}

/** Grupo sintético com as questões criadas pelo usuário para uma seção (ou null). */
export function customGroup(
  custom: CustomQuestion[],
  levelId: string,
  sectionId: string,
  startNumber: number,
): ExerciseGroup | null {
  const list = customForSection(custom, levelId, sectionId)
  if (!list.length) return null
  return {
    id: `custom-${levelId}-${sectionId}`,
    title: '✍️ Meus exercícios',
    subtitlePt: 'Questões que você criou',
    instructionJa: '',
    instructionPt: 'Exercícios adicionados por você (salvos no seu navegador).',
    questions: list.map((c, i) => customToQuestion(c, startNumber + i)),
  }
}

/** Grupos de uma seção = oficiais + (eventual) grupo de questões do usuário. */
export function mergedGroups(section: Section, custom: CustomQuestion[]): ExerciseGroup[] {
  const builtinCount = section.groups.reduce((n, g) => n + g.questions.length, 0)
  const extra = customGroup(custom, section.level, section.id, builtinCount + 1)
  return extra ? [...section.groups, extra] : section.groups
}

/** Lista achatada das questões de uma seção (oficiais + custom), para o simulado. */
export function sectionQuestions(
  levelId: string,
  sectionId: string,
  custom: CustomQuestion[],
): Question[] {
  const found = getSection(levelId, sectionId)
  if (!found) return []
  return mergedGroups(found.section, custom).flatMap((g) => g.questions)
}

/** Todas as questões (oficiais + custom) de todos os níveis — base das cartas de revisão. */
export function allFlatQuestions(custom: CustomQuestion[]): FlatQuestion[] {
  const out: FlatQuestion[] = []
  for (const level of levels) {
    for (const section of level.sections) {
      for (const group of mergedGroups(section, custom)) {
        const isCustomGroup = group.id.startsWith('custom-')
        for (const q of group.questions) {
          out.push({
            q,
            levelId: level.id,
            levelTitlePt: level.titlePt,
            sectionId: section.id,
            sectionTitlePt: section.titlePt,
            groupTitle: group.title,
            custom: isCustomGroup,
          })
        }
      }
    }
  }
  return out
}

export function examDurationSec(sectionId: SectionId, count: number): number {
  return (SEC_PER_QUESTION[sectionId] ?? 60) * count
}

/** Seções que podem virar simulado (têm questões de texto; áudio fica de fora). */
export function examableSections(levelId: string, custom: CustomQuestion[]) {
  const level = getLevel(levelId)
  if (!level) return []
  return level.sections
    .filter((s) => s.id !== 'listening')
    .map((s) => ({ section: s, count: sectionQuestions(levelId, s.id, custom).length }))
    .filter((x) => x.count > 0)
}
