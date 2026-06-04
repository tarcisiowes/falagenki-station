import type { Course, CourseId, Level, LevelId, Section, SectionId } from './types'
import { n5 } from './n5'
import { n4 } from './n4'
import { irodoriStarter } from './irodori-starter'
import { irodoriElementary1 } from './irodori-elementary1'

export const levels: Level[] = [n5, n4, irodoriStarter, irodoriElementary1]

export const courses: Course[] = [
  { id: 'jlpt', titlePt: 'JLPT', taglinePt: 'Exame de proficiência (N5/N4)', levels: [n5, n4] },
  { id: 'irodori', titlePt: 'Irodori', taglinePt: 'Japonês para a vida no Japão (A1/A2)', levels: [irodoriStarter, irodoriElementary1] },
]

export function getCourse(id: string | undefined): Course | undefined {
  return courses.find((c) => c.id === id)
}

export function getLevel(id: string | undefined): Level | undefined {
  return levels.find((l) => l.id === id)
}

export function getSection(
  levelId: string | undefined,
  sectionId: string | undefined,
): { level: Level; section: Section } | undefined {
  const level = getLevel(levelId)
  if (!level) return undefined
  const section = level.sections.find((s) => s.id === sectionId)
  if (!section) return undefined
  return { level, section }
}

export type { Course, CourseId, Level, LevelId, Section, SectionId }
