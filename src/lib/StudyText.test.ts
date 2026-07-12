import { describe, expect, it } from 'vitest'
import { splitStudyText } from './StudyText'

describe('splitStudyText', () => {
  it('separates inline examples without exposing backticks', () => {
    expect(splitStudyText('Compare `A` com `B`.')).toEqual([
      { text: 'Compare ', code: false },
      { text: 'A', code: true },
      { text: ' com ', code: false },
      { text: 'B', code: true },
      { text: '.', code: false },
    ])
  })

  it('preserves furigana markup inside an inline example', () => {
    expect(splitStudyText('Use `{\u98df|\u305f}\u3079\u308b`.')[1]).toEqual({
      text: '{\u98df|\u305f}\u3079\u308b',
      code: true,
    })
  })

  it('keeps unmatched backticks as ordinary text', () => {
    expect(splitStudyText('Exemplo `incompleto')).toEqual([
      { text: 'Exemplo `incompleto', code: false },
    ])
  })
})
