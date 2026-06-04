import type { AnswerMap } from './storage'
import type { Level, Section } from '../data/types'

export interface Progress {
  total: number
  answered: number
  pct: number
}

function tally(ids: string[], answers: AnswerMap): Progress {
  const total = ids.length
  let answered = 0
  for (const id of ids) {
    if (answers[id]?.selected !== undefined) answered++
  }
  return { total, answered, pct: total ? Math.round((answered / total) * 100) : 0 }
}

export function sectionQuestionIds(section: Section): string[] {
  return section.groups.flatMap((g) => g.questions.map((q) => q.id))
}

export function sectionProgress(section: Section, answers: AnswerMap): Progress {
  return tally(sectionQuestionIds(section), answers)
}

export function levelProgress(level: Level, answers: AnswerMap): Progress {
  const ids = level.sections.flatMap(sectionQuestionIds)
  return tally(ids, answers)
}
