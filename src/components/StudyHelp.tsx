import { Lightbulb } from 'lucide-react'
import type { ReactNode } from 'react'

export function StudyHelp({ children, label = 'Ajuda prática' }: { children: ReactNode; label?: string }) {
  return (
    <details className="study-help">
      <summary><Lightbulb size={15} /> {label}</summary>
      <div className="study-help-body">{children}</div>
    </details>
  )
}
