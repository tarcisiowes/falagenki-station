import { useState } from 'react'
import type { Question } from '../data/types'
import { JaText } from '../lib/JaText'
import { setAnswer, useAnswer } from '../lib/storage'

export function QuestionCard({ q, furigana }: { q: Question; furigana: boolean }) {
  const rec = useAnswer(q.id)
  const [checked, setChecked] = useState(false)
  const selected = rec?.selected

  function choose(n: number) {
    setAnswer(q.id, { selected: n })
  }

  const isCorrect = checked && selected === q.answer

  return (
    <div className="card q" id={q.id}>
      <div className="qhead">
        <span className="qnum">{q.number}</span>
        <div style={{ flex: 1 }}>
          {q.context && (
            <div className="context ja">
              <JaText text={q.context} furigana={furigana} />
            </div>
          )}
          <div className="stem ja">
            <JaText text={q.prompt} furigana={furigana} />
          </div>

          <div className="choices">
            {q.choices.map((c) => {
              let cls = 'choice'
              if (selected === c.n) cls += ' selected'
              if (checked && c.n === q.answer) cls += ' correct'
              else if (checked && selected === c.n && c.n !== q.answer) cls += ' wrong'
              return (
                <button key={c.n} className={cls} onClick={() => choose(c.n)} type="button">
                  <span className="num">{c.n}</span>
                  <JaText text={c.text} furigana={furigana} />
                </button>
              )
            })}
          </div>

          <div className="note-field">
            <label htmlFor={`${q.id}-note`}>📝 Sua anotação / justificativa (salva automaticamente)</label>
            <textarea
              id={`${q.id}-note`}
              value={rec?.note ?? ''}
              placeholder="Escreva aqui sua tradução, dúvida ou o porquê da sua escolha…"
              onChange={(e) => setAnswer(q.id, { note: e.target.value })}
            />
          </div>

          <div className="actions">
            <button
              className="btn primary small"
              onClick={() => setChecked((v) => !v)}
              disabled={selected === undefined && !checked}
            >
              {checked ? 'Ocultar correção' : 'Verificar resposta'}
            </button>
            {selected !== undefined && <span className="saved-dot">● marcado: {selected}</span>}
          </div>

          {checked && (
            <div className={`feedback ${isCorrect ? 'ok' : 'no'}`}>
              <div className="head">
                {isCorrect ? '✅ Correto!' : `❌ Resposta correta: ${q.answer}`}
              </div>
              {q.translationPt && <div className="tr">“{q.translationPt}”</div>}
              <div>{q.explanationPt}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
