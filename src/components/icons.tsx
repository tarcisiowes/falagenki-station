import { BookOpen, Headphones, PenLine, Puzzle, type LucideProps } from 'lucide-react'
import type { SectionId } from '../data/types'

const SECTION_MAP: Record<SectionId, React.FC<LucideProps>> = {
  vocabulary: PenLine,
  grammar: Puzzle,
  reading: BookOpen,
  listening: Headphones,
}

/** Ícone (lucide) correspondente a cada área de estudo. */
export function SectionIcon({ id, ...rest }: { id: SectionId } & LucideProps) {
  const Cmp = SECTION_MAP[id]
  return <Cmp {...rest} />
}
