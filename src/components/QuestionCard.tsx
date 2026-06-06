import { useRef, useState } from 'react'
import { CheckCircle2, NotebookPen, RotateCcw, XCircle } from 'lucide-react'
import type { Question } from '../data/types'
import { JaText } from '../lib/JaText'
import { setAnswer, useAnswer } from '../lib/storage'
import { gradeCard } from '../lib/reviewStore'

export function QuestionCard({ q, furigana }: { q: Question; furigana: boolean }) {
  const rec = useAnswer(q.id)
  const [checked, setChecked] = useState(false)
  const gradedFor = useRef<number | undefined>(undefined)
  const selected = rec?.selected

  function choose(n: number) {
    setAnswer(q.id, { selected: n })
  }

  // Ao revelar a correção, a questão é enviada para a revisão (SRS):
  // acerto → maior intervalo recomendado ('easy', conteúdo que a pessoa já sabe);
  // erro → menor intervalo, revisão hoje ('again', conteúdo a reforçar).
  // Só grada na transição "ocultar → mostrar" e quando a alternativa muda,
  // para não reagendar à toa ao alternar a correção.
  function toggleCheck() {
    const revealing = !checked
    if (revealing && selected !== undefined && gradedFor.current !== selected) {
      gradeCard(q.id, selected === q.answer ? 'easy' : 'again')
      gradedFor.current = selected
    }
    setChecked((v) => !v)
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

          {q.image && (
            <img
              className="q-illustration"
              src={q.image}
              alt={q.imageAlt ?? ''}
              loading="lazy"
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: 260,
                borderRadius: 10,
                margin: '10px 0',
              }}
            />
          )}

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
            <label htmlFor={`${q.id}-note`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <NotebookPen size={14} /> Sua anotação / justificativa (salva automaticamente)
            </label>
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
              onClick={toggleCheck}
              disabled={selected === undefined && !checked}
            >
              {checked ? 'Ocultar correção' : 'Verificar resposta'}
            </button>
            {selected !== undefined && <span className="saved-dot">● marcado: {selected}</span>}
          </div>

          {checked && (
            <div className={`feedback ${isCorrect ? 'ok' : 'no'}`}>
              <div className="head" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                {isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                {isCorrect ? 'Correto!' : `Resposta correta: ${q.answer}`}
              </div>
              {q.translationPt && <div className="tr">“{q.translationPt}”</div>}
              <div>{q.explanationPt}</div>
              <div
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 12, opacity: 0.85 }}
              >
                <RotateCcw size={13} />
                {isCorrect
                  ? 'Enviado à revisão como conteúdo que você já sabe (intervalo maior).'
                  : 'Enviado à revisão de hoje (conteúdo a reforçar).'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
