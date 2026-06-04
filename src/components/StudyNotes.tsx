import { Fragment, type ReactNode } from 'react'
import type { StudyNote } from '../data/types'
import { JaText } from '../lib/JaText'

// Inline: **negrito**, `código/japonês`, e marcação de furigana via JaText.
function renderInline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = []
  // separa por **bold** e `code`
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g
  const parts = text.split(re)
  parts.forEach((part, i) => {
    if (!part) return
    if (part.startsWith('**') && part.endsWith('**')) {
      out.push(<strong key={`${keyBase}-b${i}`}>{part.slice(2, -2)}</strong>)
    } else if (part.startsWith('`') && part.endsWith('`')) {
      out.push(
        <code className="inline-code" key={`${keyBase}-c${i}`}>
          <JaText text={part.slice(1, -1)} />
        </code>,
      )
    } else {
      out.push(<JaText key={`${keyBase}-t${i}`} text={part} />)
    }
  })
  return out
}

function renderBody(body: string): ReactNode[] {
  const lines = body.split('\n')
  const blocks: ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    if (trimmed === '') {
      i++
      continue
    }

    // subtítulo
    if (trimmed.startsWith('## ')) {
      blocks.push(<h4 key={key++}>{renderInline(trimmed.slice(3), `h${key}`)}</h4>)
      i++
      continue
    }

    // lista de bullets
    if (trimmed.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i++
      }
      blocks.push(
        <ul key={key++}>
          {items.map((it, j) => (
            <li key={j}>{renderInline(it, `li${key}-${j}`)}</li>
          ))}
        </ul>,
      )
      continue
    }

    // tabela (linhas começando com |)
    if (trimmed.startsWith('|')) {
      const rows: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(lines[i].trim())
        i++
      }
      const parsed = rows
        .map((r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()))
        .filter((cells) => !cells.every((c) => /^-+$/.test(c) || c === ''))
      const [head, ...rest] = parsed
      blocks.push(
        <table key={key++}>
          <thead>
            <tr>{head.map((c, j) => <th key={j}>{renderInline(c, `th${key}-${j}`)}</th>)}</tr>
          </thead>
          <tbody>
            {rest.map((cells, r) => (
              <tr key={r}>{cells.map((c, j) => <td key={j}>{renderInline(c, `td${key}-${r}-${j}`)}</td>)}</tr>
            ))}
          </tbody>
        </table>,
      )
      continue
    }

    // parágrafo
    blocks.push(<p key={key++}>{renderInline(trimmed, `p${key}`)}</p>)
    i++
  }

  return blocks
}

export function StudyNotes({ notes }: { notes: StudyNote[] }) {
  if (!notes.length) return null
  return (
    <div className="card study">
      <h2>📚 Explicação do conteúdo</h2>
      {notes.map((n, i) => (
        <div className="note" key={i}>
          <h3>{n.title}</h3>
          <Fragment>{renderBody(n.bodyPt)}</Fragment>
        </div>
      ))}
    </div>
  )
}
