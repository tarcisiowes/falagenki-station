import type { Level } from './types'
import { genki2Lesson13 } from './genki-2-lesson-13'
import { genki2Lesson14 } from './genki-2-lesson-14'
import { genki2Lesson15 } from './genki-2-lesson-15'
import {
  enrichGenkiLevel,
  type MachineTranscriptCollection,
} from './genki-audio-study'
import lesson13MachineTranscriptData from './genki-2-lesson-13-machine-transcripts.json'
import lesson14MachineTranscriptData from './genki-2-lesson-14-machine-transcripts.json'
import lesson15MachineTranscriptData from './genki-2-lesson-15-machine-transcripts.json'

const machineTranscripts = {
  ...(lesson13MachineTranscriptData as MachineTranscriptCollection),
  ...(lesson14MachineTranscriptData as MachineTranscriptCollection),
  ...(lesson15MachineTranscriptData as MachineTranscriptCollection),
}

const genki2Base: Level = {
  id: 'genki-2',
  courseId: 'genki',
  titlePt: 'Genki II \u2014 Curso integrado intermedi\u00e1rio',
  descriptionPt: 'Li\u00e7\u00f5es 13 a 23 da 3\u00aa edi\u00e7\u00e3o, com explica\u00e7\u00f5es em portugu\u00eas, exemplos, exerc\u00edcios revis\u00e1veis, leitura e estudo ativo de todas as faixas de \u00e1udio.',
  sections: [genki2Lesson13, genki2Lesson14, genki2Lesson15],
}

export const genki2 = enrichGenkiLevel(genki2Base, machineTranscripts)
