import { Fragment, type ReactNode } from 'react'

// Renderiza texto japonês com marcações:
//   {漢字|かんじ}  -> <ruby>漢字<rt>かんじ</rt></ruby>
//   [[alvo]]      -> trecho destacado (palavra sublinhada do exame)
// Suporta furigana DENTRO de um destaque: [[{中|なか}]]

interface Props {
  text: string
  /** mostra leitura (furigana). Padrão: true */
  furigana?: boolean
  className?: string
}

const HIGHLIGHT = /\[\[([\s\S]*?)\]\]/g
const RUBY = /\{([^|{}]+)\|([^{}]+)\}/g

function renderRuby(text: string, furigana: boolean, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  RUBY.lastIndex = 0
  let i = 0
  while ((m = RUBY.exec(text)) !== null) {
    if (m.index > last) nodes.push(<Fragment key={`${keyBase}-t${i}`}>{text.slice(last, m.index)}</Fragment>)
    const base = m[1]
    const reading = m[2]
    if (furigana) {
      nodes.push(
        <ruby key={`${keyBase}-r${i}`}>
          {base}
          <rt>{reading}</rt>
        </ruby>,
      )
    } else {
      nodes.push(<Fragment key={`${keyBase}-b${i}`}>{base}</Fragment>)
    }
    last = m.index + m[0].length
    i++
  }
  if (last < text.length) nodes.push(<Fragment key={`${keyBase}-tend`}>{text.slice(last)}</Fragment>)
  return nodes
}

export function JaText({ text, furigana = true, className }: Props) {
  const out: ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  HIGHLIGHT.lastIndex = 0
  let i = 0
  while ((m = HIGHLIGHT.exec(text)) !== null) {
    if (m.index > last) out.push(...renderRuby(text.slice(last, m.index), furigana, `h${i}-pre`))
    out.push(
      <mark className="ja-target" key={`hl${i}`}>
        {renderRuby(m[1], furigana, `h${i}-in`)}
      </mark>,
    )
    last = m.index + m[0].length
    i++
  }
  if (last < text.length) out.push(...renderRuby(text.slice(last), furigana, 'tail'))

  return <span className={className ? `ja ${className}` : 'ja'}>{out}</span>
}

/** Remove marcações e retorna texto plano (para aria-label, busca, etc.) */
export function stripJa(text: string): string {
  return text
    .replace(HIGHLIGHT, '$1')
    .replace(RUBY, '$1')
}
