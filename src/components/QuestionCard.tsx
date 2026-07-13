import { useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, NotebookPen, RotateCcw, XCircle } from 'lucide-react'
import type { Question } from '../data/types'
import { StudyText } from '../lib/StudyText'
import { setAnswer, useAnswer } from '../lib/storage'
import { gradeCard } from '../lib/reviewStore'
import { useShuffledChoices } from '../lib/choiceOrder'
import { AudioPlayer } from './AudioPlayer'
import { StudyHelp } from './StudyHelp'
import { isExerciseCompleted } from '../lib/exerciseSession'

interface QuestionCardProps {
  q: Question
  furigana: boolean
  onFinish?: () => void
  finishLabel?: string
}

export function QuestionCard({ q, furigana, onFinish, finishLabel = 'Próximo exercício' }: QuestionCardProps) {
  const rec = useAnswer(q.id)
  const [checked, setChecked] = useState(() => isExerciseCompleted(rec))
  const gradedFor = useRef<number | undefined>(isExerciseCompleted(rec) ? rec?.selected : undefined)
  const selected = rec?.selected
  const isSelfCheck = q.assessment === 'self-check'

  const { order, displayNum, answerDisplay } = useShuffledChoices(q)

  function choose(n: number) {
    if (checked) return
    setAnswer(q.id, { selected: n, completedAt: null })
  }

  // When revealing the correction, send the question to SRS:
  // correct -> the minimum normal interval ('good'), without an ease penalty;
  // wrong -> review today ('again').
  // Grade only when switching from hidden to visible and the selected answer changed,
  // so toggling the correction does not reschedule the card unnecessarily.
  function toggleCheck() {
    const revealing = !checked
    if (revealing && selected !== undefined) {
      if (gradedFor.current !== selected) {
        gradeCard(q.id, selected === q.answer ? 'good' : 'again')
        gradedFor.current = selected
      }
      setAnswer(q.id, { completedAt: Date.now() })
    }
    setChecked((v) => !v)
  }

  const isCorrect = checked && selected === q.answer

  return (
    <div className="card q" id={q.id} tabIndex={-1}>
      <div className="qhead">
        <span className="qnum">{q.number}</span>
        <div style={{ flex: 1 }}>
          {q.context && (
            <div className="context ja">
              <StudyText text={q.context} furigana={furigana} />
            </div>
          )}
          <div className="stem ja">
            <StudyText text={q.prompt} furigana={furigana} />
          </div>

          {q.audio && (
            <div className="question-audio">
              <AudioPlayer src={q.audio.src} title={q.audio.title} compact />
            </div>
          )}

          {q.helpPt && <StudyHelp><StudyText text={q.helpPt} furigana={furigana} /></StudyHelp>}

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
            {order.map((c, i) => {
              let cls = 'choice'
              if (selected === c.n) cls += ' selected'
              if (!isSelfCheck && checked && c.n === q.answer) cls += ' correct'
              else if (!isSelfCheck && checked && selected === c.n && c.n !== q.answer) cls += ' wrong'
              return (
                <button key={c.n} className={cls} disabled={checked} onClick={() => choose(c.n)} type="button">
                  <span className="num">{i + 1}</span>
                  <StudyText text={c.text} furigana={furigana} />
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
              {checked
                ? (isSelfCheck ? 'Ocultar orientação' : 'Ocultar correção')
                : (isSelfCheck ? 'Registrar prática' : 'Verificar resposta')}
            </button>
            {selected !== undefined && <span className="saved-dot">● marcado: {displayNum.get(selected)}</span>}
          </div>

          {checked && (
            <div className={`feedback ${isCorrect ? 'ok' : isSelfCheck ? 'review' : 'no'}`}>
              <div className="head" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                {isSelfCheck
                  ? (isCorrect ? <CheckCircle2 size={16} /> : <RotateCcw size={16} />)
                  : (isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />)}
                {isSelfCheck
                  ? (isCorrect ? 'Prática registrada' : 'Faixa marcada para repetir')
                  : (isCorrect ? 'Correto!' : `Resposta correta: ${answerDisplay}`)}
              </div>
              {q.translationPt && <div className="tr">“{q.translationPt}”</div>}
              <div><StudyText text={q.explanationPt} furigana={furigana} /></div>
              <div
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 12, opacity: 0.85 }}
              >
                <RotateCcw size={13} />
                {isCorrect
                  ? 'Enviado à revisão com o intervalo recomendado mínimo.'
                  : isSelfCheck
                    ? 'Esta faixa volta hoje para uma nova tentativa.'
                    : 'Enviado à revisão de hoje (conteúdo a reforçar).'}
              </div>
              {onFinish && (
                <button className="btn primary small exercise-finish" type="button" onClick={onFinish}>
                  {finishLabel} <ArrowRight size={15} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
