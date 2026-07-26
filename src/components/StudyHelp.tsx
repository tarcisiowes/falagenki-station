import { Lightbulb, X } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'

interface StudyHelpProps {
  children: ReactNode
  label?: string
  variant?: 'details' | 'popover'
}

export function StudyHelp({ children, label = 'Ajuda prática', variant = 'details' }: StudyHelpProps) {
  const [open, setOpen] = useState(false)
  const popoverRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (variant !== 'popover' || !open) return

    function closeOnOutsidePress(event: PointerEvent) {
      if (!popoverRef.current?.contains(event.target as Node)) setOpen(false)
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsidePress)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePress)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open, variant])

  if (variant === 'popover') {
    return (
      <span className="study-help-popover" ref={popoverRef}>
        <button
          className="study-help-trigger"
          type="button"
          aria-label={label}
          aria-expanded={open}
          aria-haspopup="dialog"
          title={label}
          onClick={() => setOpen((value) => !value)}
        >
          <Lightbulb size={17} />
        </button>
        {open && (
          <span className="study-help-popover-panel" role="dialog" aria-label={label}>
            <span className="study-help-popover-head">
              <b><Lightbulb size={15} /> {label}</b>
              <button type="button" onClick={() => setOpen(false)} aria-label="Fechar ajuda">
                <X size={16} />
              </button>
            </span>
            <span className="study-help-popover-content">{children}</span>
          </span>
        )}
      </span>
    )
  }

  return (
    <details className="study-help">
      <summary><Lightbulb size={15} /> {label}</summary>
      <div className="study-help-body">{children}</div>
    </details>
  )
}
