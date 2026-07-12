import { Fragment } from 'react'
import { JaText } from './JaText'

export interface StudyTextPart {
  text: string
  code: boolean
}

const INLINE_CODE = /`([^`\r\n]+)`/g

export function splitStudyText(text: string): StudyTextPart[] {
  const parts: StudyTextPart[] = []
  let last = 0
  let match: RegExpExecArray | null
  INLINE_CODE.lastIndex = 0

  while ((match = INLINE_CODE.exec(text)) !== null) {
    if (match.index > last) parts.push({ text: text.slice(last, match.index), code: false })
    parts.push({ text: match[1], code: true })
    last = match.index + match[0].length
  }

  if (last < text.length) parts.push({ text: text.slice(last), code: false })
  return parts.length ? parts : [{ text, code: false }]
}

interface StudyTextProps {
  text: string
  furigana?: boolean
  className?: string
}

export function StudyText({ text, furigana = true, className }: StudyTextProps) {
  return (
    <span className={className}>
      {splitStudyText(text).map((part, index) => (
        <Fragment key={`${part.code ? 'code' : 'text'}-${index}`}>
          {part.code ? (
            <code className="inline-code"><JaText text={part.text} furigana={furigana} /></code>
          ) : (
            <JaText text={part.text} furigana={furigana} />
          )}
        </Fragment>
      ))}
    </span>
  )
}
