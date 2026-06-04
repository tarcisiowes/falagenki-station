import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getSection } from '../data'
import { JaText } from '../lib/JaText'
import { useCustom } from '../lib/customStore'
import { SEC_PER_QUESTION, examDurationSec, sectionQuestions } from '../lib/dataAccess'
import { addAttempt, type ExamAttempt, type ExamQResult } from '../lib/examStore'
import { gradeCard } from '../lib/reviewStore'

function fmtClock(sec: number): string {
  const s = Math.max(0, Math.round(sec))
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`
}
function fmtSecs(ms: number): string {
  return `${(ms / 1000).toFixed(1)}s`
}

export function ExamRunnerPage() {
  const { levelId, sectionId } = useParams()
  const navigate = useNavigate()
  const custom = useCustom()
  const found = getSection(levelId, sectionId)

  const questions = useMemo(
    () => (found ? sectionQuestions(levelId!, sectionId!, custom) : []),
    [found, levelId, sectionId, custom],
  )
  const durationSec = found ? examDurationSec(found.section.id, questions.length) : 0

  const [phase, setPhase] = useState<'running' | 'finished'>('running')
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<Record<string, number>>({})
  const [paused, setPaused] = useState(false)
  const [, setTick] = useState(0)
  const [attempt, setAttempt] = useState<ExamAttempt | null>(null)

  const perMsRef = useRef<Record<string, number>>({})
  const activeIdRef = useRef<string>(questions[0]?.id ?? '')
  const lastTsRef = useRef<number>(Date.now())
  const remainingMsRef = useRef<number>(durationSec * 1000)
  const pausedRef = useRef(false)
  const phaseRef = useRef<'running' | 'finished'>('running')
  // espelha o estado mais recente para o fim automático por tempo (evita closure obsoleto)
  const selectedRef = useRef(selected)
  selectedRef.current = selected

  // adiciona o tempo decorrido desde o último flush à questão ativa
  function flush() {
    const now = Date.now()
    const delta = now - lastTsRef.current
    lastTsRef.current = now
    if (!pausedRef.current && phaseRef.current === 'running') {
      const id = activeIdRef.current
      perMsRef.current[id] = (perMsRef.current[id] ?? 0) + delta
      remainingMsRef.current -= delta
    }
  }

  function finish() {
    flush()
    phaseRef.current = 'finished'
    const results: ExamQResult[] = questions.map((q) => {
      const sel = selectedRef.current[q.id]
      return {
        id: q.id,
        number: q.number,
        selected: sel,
        answer: q.answer,
        correct: sel === q.answer,
        ms: Math.round(perMsRef.current[q.id] ?? 0),
      }
    })
    const correct = results.filter((r) => r.correct).length
    const usedSec = Math.round(results.reduce((s, r) => s + r.ms, 0) / 1000)
    const saved = addAttempt({
      levelId: found!.level.id,
      sectionId: found!.section.id,
      sectionTitlePt: found!.section.titlePt,
      finishedAt: new Date().toISOString(),
      durationSec,
      usedSec,
      total: questions.length,
      correct,
      results,
    })
    setAttempt(saved)
    setPhase('finished')
  }

  // cronômetro
  useEffect(() => {
    if (phase !== 'running' || questions.length === 0) return
    lastTsRef.current = Date.now()
    const t = window.setInterval(() => {
      flush()
      if (remainingMsRef.current <= 0) {
        finish()
        return
      }
      setTick((x) => x + 1)
    }, 500)
    return () => window.clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, questions.length])

  if (!found) {
    return (
      <div className="card" style={{ padding: 24 }}>
        Seção não encontrada. <Link to="/simulado">Voltar ao simulado</Link>
      </div>
    )
  }
  if (questions.length === 0) {
    return (
      <div className="card" style={{ padding: 24 }}>
        Esta seção não tem questões para simulado. <Link to="/simulado">Voltar</Link>
      </div>
    )
  }

  function goTo(i: number) {
    if (i < 0 || i >= questions.length) return
    flush()
    activeIdRef.current = questions[i].id
    setIdx(i)
  }
  function togglePause() {
    flush()
    pausedRef.current = !pausedRef.current
    setPaused(pausedRef.current)
  }

  // ---- tela de resultado --------------------------------------------------
  if (phase === 'finished' && attempt) {
    const expPerQ = SEC_PER_QUESTION[found.section.id]
    const pct = Math.round((attempt.correct / attempt.total) * 100)
    const avgMs = attempt.results.reduce((s, r) => s + r.ms, 0) / attempt.total
    const target = 60 // meta de referência (%)
    return (
      <div>
        <div className="crumbs">
          <Link to="/">Início</Link> / <Link to="/simulado">Simulado</Link> /{' '}
          <span>Resultado</span>
        </div>

        <div className="hero" style={{ padding: '24px 28px' }}>
          <span className="badge">{attempt.levelId}</span>
          <h1 style={{ margin: '8px 0 2px' }}>Resultado — {attempt.sectionTitlePt}</h1>
          <p className="muted">{new Date(attempt.finishedAt).toLocaleString('pt-BR')}</p>
        </div>

        <div className="grid cols-4" style={{ marginBottom: 18 }}>
          <div className="card stat">
            <div className="big" style={{ color: pct >= target ? 'var(--green)' : 'var(--accent)' }}>{pct}%</div>
            <div className="lbl">Nota ({attempt.correct}/{attempt.total})</div>
          </div>
          <div className="card stat"><div className="big" style={{ color: 'var(--green)' }}>{attempt.correct}</div><div className="lbl">Acertos</div></div>
          <div className="card stat"><div className="big" style={{ color: 'var(--accent)' }}>{attempt.total - attempt.correct}</div><div className="lbl">Erros</div></div>
          <div className="card stat"><div className="big">{fmtClock(attempt.usedSec)}</div><div className="lbl">Tempo usado / {fmtClock(attempt.durationSec)}</div></div>
        </div>

        <div className="card" style={{ padding: '14px 18px', marginBottom: 18 }}>
          <div className="muted" style={{ fontSize: 14 }}>
            Tempo médio por questão: <b>{fmtSecs(avgMs)}</b> · Esperado: <b>{expPerQ}s</b> ·{' '}
            Meta de referência: <b>{target}%</b>{' '}
            {pct >= target ? '— você atingiu a meta 🎉' : '— abaixo da meta, continue praticando'}.
          </div>
        </div>

        <h2 style={{ margin: '6px 0 10px' }}>Análise por questão</h2>
        <div className="card" style={{ overflowX: 'auto' }}>
          <table className="exam-table">
            <thead>
              <tr>
                <th>#</th><th>Resultado</th><th>Marcou</th><th>Correta</th>
                <th>Tempo</th><th>Esperado</th><th>vs esperado</th>
              </tr>
            </thead>
            <tbody>
              {attempt.results.map((r) => {
                const diff = r.ms / 1000 - expPerQ
                return (
                  <tr key={r.id}>
                    <td>{r.number}</td>
                    <td>{r.selected === undefined ? '— em branco' : r.correct ? '✅' : '❌'}</td>
                    <td>{r.selected ?? '—'}</td>
                    <td>{r.answer}</td>
                    <td>{fmtSecs(r.ms)}</td>
                    <td className="muted">{expPerQ}s</td>
                    <td style={{ color: diff > 0 ? 'var(--accent)' : 'var(--green)' }}>
                      {diff > 0 ? '+' : ''}{diff.toFixed(1)}s
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
          <button
            className="btn primary"
            onClick={() => {
              attempt.results.filter((r) => !r.correct).forEach((r) => gradeCard(r.id, 'again'))
              navigate('/revisar')
            }}
          >
            🔁 Enviar erradas para a revisão de hoje
          </button>
          <button className="btn" onClick={() => window.location.reload()}>↻ Refazer simulado</button>
          <Link to="/analise" className="btn">📊 Histórico</Link>
          <Link to="/simulado" className="btn ghost">Voltar</Link>
        </div>
      </div>
    )
  }

  // ---- tela de execução ---------------------------------------------------
  const q = questions[idx]
  const remainingSec = remainingMsRef.current / 1000
  const answeredCount = Object.keys(selected).length
  const low = remainingSec <= 30

  return (
    <div>
      <div className="exam-bar card">
        <div className={`exam-clock ${low ? 'low' : ''}`}>⏱ {fmtClock(remainingSec)}</div>
        <div className="muted">questão {idx + 1} / {questions.length} · respondidas {answeredCount}</div>
        <div className="progress accent" style={{ flex: 1, minWidth: 120 }}>
          <i style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
        </div>
        <button className="btn small" onClick={togglePause}>{paused ? '▶ Retomar' : '⏸ Pausar'}</button>
        <button className="btn small primary" onClick={finish}>Finalizar</button>
      </div>

      {paused && (
        <div className="card" style={{ padding: 30, textAlign: 'center', margin: '14px 0' }}>
          ⏸ Pausado. O cronômetro está parado. <button className="btn small primary" onClick={togglePause}>Retomar</button>
        </div>
      )}

      {!paused && (
        <div className="card q" style={{ marginTop: 14 }}>
          <div className="qhead">
            <span className="qnum">{q.number}</span>
            <div style={{ flex: 1 }}>
              {q.context && <div className="context ja"><JaText text={q.context} /></div>}
              <div className="stem ja" style={{ fontSize: 18 }}><JaText text={q.prompt} /></div>
              <div className="choices">
                {q.choices.map((c) => (
                  <button
                    key={c.n}
                    className={`choice${selected[q.id] === c.n ? ' selected' : ''}`}
                    onClick={() => setSelected((s) => ({ ...s, [q.id]: c.n }))}
                    type="button"
                  >
                    <span className="num">{c.n}</span>
                    <JaText text={c.text} />
                  </button>
                ))}
              </div>
              <p className="muted" style={{ fontSize: 12, marginTop: 10 }}>
                No simulado a correção só aparece ao finalizar.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="exam-nav">
        <button className="btn" disabled={idx === 0} onClick={() => goTo(idx - 1)}>« Anterior</button>
        <div className="exam-dots">
          {questions.map((qq, i) => (
            <button
              key={qq.id}
              className={`dot${i === idx ? ' cur' : ''}${selected[qq.id] !== undefined ? ' done' : ''}`}
              onClick={() => goTo(i)}
              title={`questão ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button className="btn" disabled={idx === questions.length - 1} onClick={() => goTo(idx + 1)}>Próxima »</button>
      </div>
    </div>
  )
}
