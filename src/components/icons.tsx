import { BookOpen, GraduationCap, Headphones, PenLine, Puzzle, type LucideProps } from 'lucide-react'
import type { SectionId } from '../data/types'

const SECTION_MAP: Record<string, React.FC<LucideProps>> = {
  vocabulary: PenLine,
  grammar: Puzzle,
  reading: BookOpen,
  listening: Headphones,
}

/** Ícone (lucide) da área. Lições do Irodori (sem mapeamento fixo) usam um padrão. */
export function SectionIcon({ id, ...rest }: { id: SectionId } & LucideProps) {
  const Cmp = SECTION_MAP[id] ?? GraduationCap
  return <Cmp {...rest} />
}
