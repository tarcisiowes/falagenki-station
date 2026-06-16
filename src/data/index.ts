import type { Course, CourseId, Level, LevelId, Section, SectionId } from './types'
import { n5 } from './n5'
import { n4 } from './n4'
import { n5_2012 } from './n5-2012'
import { n4_2012 } from './n4-2012'
import { n5_mock } from './n5-mock'
import { n4_mock } from './n4-mock'
import { irodoriStarter } from './irodori-starter'
import { irodoriElementary1 } from './irodori-elementary1'
import { irodoriElementary2 } from './irodori-elementary2'
import { irodoriPreIntermediate } from './irodori-pre-intermediate'
import { irodoriTips } from './irodori-tips'

export const levels: Level[] = [n5, n4, n5_2012, n4_2012, n5_mock, n4_mock, irodoriStarter, irodoriElementary1, irodoriElementary2, irodoriPreIntermediate, irodoriTips]

export const courses: Course[] = [
  { id: 'jlpt', titlePt: 'JLPT', taglinePt: 'Exame de proficiência (N5/N4)', levels: [n5, n4, n5_2012, n4_2012, n5_mock, n4_mock] },
  { id: 'irodori', titlePt: 'Irodori', taglinePt: 'Japonês para a vida no Japão (A1-B1)', levels: [irodoriStarter, irodoriElementary1, irodoriElementary2, irodoriPreIntermediate, irodoriTips] },
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
