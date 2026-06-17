import { useMemo } from 'react'
import type { Choice, Question } from '../data/types'

export interface ShuffledChoices {
  /** alternativas na ordem em que devem ser exibidas (embaralhada) */
  order: Choice[]
  /** mapeia o número original da alternativa (c.n) -> posição exibida (1-based) */
  displayNum: Map<number, number>
  /** posição exibida da alternativa correta */
  answerDisplay: number | undefined
}

/**
 * Embaralha a ordem de exibição das alternativas, uma vez por montagem da
 * questão, para que a resposta certa não fique sempre na mesma posição (nos
 * dados autorais ela quase sempre é a alternativa 1).
 *
 * A identidade de cada alternativa (`c.n`) é preservada: seleção, correção,
 * SRS e histórico continuam comparando por `c.n`. Só muda o número exibido
 * (a posição na tela). Aceita `q` indefinido para poder ser chamado de forma
 * incondicional (regras dos Hooks) em telas onde a questão pode não existir.
 */
export function useShuffledChoices(
  q?: Pick<Question, 'id' | 'choices' | 'answer'>,
): ShuffledChoices {
  const order = useMemo<Choice[]>(() => {
    if (!q) return []
    const a = q.choices.slice()
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q?.id, q?.choices])
  const displayNum = useMemo(
    () => new Map(order.map((c, i) => [c.n, i + 1])),
    [order],
  )
  return { order, displayNum, answerDisplay: q ? displayNum.get(q.answer) : undefined }
}
