import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, CheckCircle2, Repeat, Timer, Trash2, XCircle } from 'lucide-react'
import { useExams, deleteAttempt, type ExamAttempt } from '../lib/examStore'
import { useSrs, gradeCard } from '../lib/reviewStore'
import { useCustom } from '../lib/customStore'
import { allFlatQuestions, SEC_PER_QUESTION } from '../lib/dataAccess'
import { isDue } from '../lib/srs'

function fmtClock(sec: number): string {
  const s = Math.max(0, Math.round(sec))
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`
}

export function StatsPage() {
  const exams = useExams()
  const srs = useSrs()
  const custom = useCustom()
  const [open, setOpen] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)

  function flash(msg: string) {
    setToast(msg)
    window.setTimeout(() => setToast(null), 2600)
  }

  function sendWrong(attempt: ExamAttempt) {
    const wrong = attempt.results.filter((r) => !r.correct)
    wrong.forEach((r) => gradeCard(r.id, 'again'))
    flash(`${wrong.length} questão(ões) errada(s) enviada(s) para a revisão de hoje.`)
  }

  function sendOne(id: string, number: number) {
    gradeCard(id, 'again')
    flash(`Questão ${number} enviada para a revisão de hoje.`)
  }

  const flat = allFlatQuestions(custom)
  const studied = Object.keys(srs).length
  const dueToday = flat.filter((f) => srs[f.q.id] && isDue(srs[f.q.id])).length
  const newCount = flat.filter((f) => !srs[f.q.id]).length

  const totalAttempts = exams.length
  const avgPct = totalAttempts
    ? Math.round(exams.reduce((s, e) => s + (e.correct / e.total) * 100, 0) / totalAttempts)
    : 0

  return (
    <div>
      <div className="crumbs">
        <Link to="/">Início</Link> / <span>Análise</span>
      </div>

      <div className="hero" style={{ padding: '24px 28px' }}>
        <div className="ja-big ja"><BarChart3 size={18} /> 分析 — Análise e progresso</div>
        <h1 style={{ margin: '4px 0' }}>Seu desempenho</h1>
        <p>Resumo da revisão e histórico dos simulados, com a análise de tempo por questão.</p>
      </div>

      <div className="grid cols-4" style={{ marginBottom: 22 }}>
        <div className="card stat"><div className="big">{studied}</div><div className="lbl">Cartas estudadas</div></div>
        <div className="card stat"><div className="big" style={{ color: 'var(--accent)' }}>{dueToday}</div><div className="lbl">A revisar hoje</div></div>
        <div className="card stat"><div className="big">{newCount}</div><div className="lbl">Cartas novas</div></div>
        <div className="card stat"><div className="big" style={{ color: 'var(--green)' }}>{avgPct}%</div><div className="lbl">Média nos simulados</div></div>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
        <Link to="/revisar" className="btn primary"><Repeat size={15} /> Revisar agora</Link>
        <Link to="/simulado" className="btn"><Timer size={15} /> Fazer simulado</Link>
      </div>

      <h2 style={{ margin: '6px 0 12px' }}>Histórico de simulados</h2>
      {exams.length === 0 && <p className="muted">Nenhum simulado feito ainda.</p>}
      <div className="grid" style={{ gap: 12 }}>
        {exams.map((e) => {
          const pct = Math.round((e.correct / e.total) * 100)
          const expPerQ = SEC_PER_QUESTION[e.sectionId]
          const avgMs = e.results.reduce((s, r) => s + r.ms, 0) / e.total
          const isOpen = open === e.id
          return (
            <div key={e.id} className="card" style={{ padding: '14px 18px' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <span className="badge">{e.levelId}</span>
                <b>{e.sectionTitlePt}</b>
                <span className="badge green">{pct}% ({e.correct}/{e.total})</span>
                <span className="muted">tempo {fmtClock(e.usedSec)} / {fmtClock(e.durationSec)}</span>
                <span className="muted">méd {(avgMs / 1000).toFixed(1)}s/q · esperado {expPerQ}s</span>
                <div className="spacer" style={{ flex: 1 }} />
                <span className="muted" style={{ fontSize: 12 }}>{new Date(e.finishedAt).toLocaleString('pt-BR')}</span>
                <button
                  className="btn small primary"
                  disabled={e.total - e.correct === 0}
                  onClick={() => sendWrong(e)}
                  title="Marca as questões erradas como devidas hoje na revisão"
                >
                  <Repeat size={14} /> Erradas → revisão ({e.total - e.correct})
                </button>
                <button className="btn small" onClick={() => setOpen(isOpen ? null : e.id)}>{isOpen ? 'Ocultar' : 'Detalhes'}</button>
                <button className="btn small ghost" onClick={() => { if (confirm('Excluir este simulado do histórico?')) deleteAttempt(e.id) }}><Trash2 size={14} /></button>
              </div>

              {isOpen && (
                <div style={{ overflowX: 'auto', marginTop: 12 }}>
                  <table className="exam-table">
                    <thead>
                      <tr><th>#</th><th>Resultado</th><th>Marcou</th><th>Correta</th><th>Tempo</th><th>Esperado</th><th>vs esp.</th><th>Revisar</th></tr>
                    </thead>
                    <tbody>
                      {e.results.map((r) => {
                        const diff = r.ms / 1000 - expPerQ
                        return (
                          <tr key={r.id}>
                            <td>{r.number}</td>
                            <td>
                              {r.selected === undefined
                                ? '— em branco'
                                : r.correct
                                  ? <CheckCircle2 size={15} color="var(--green)" />
                                  : <XCircle size={15} color="var(--accent)" />}
                            </td>
                            <td>{r.selected ?? '—'}</td>
                            <td>{r.answer}</td>
                            <td>{(r.ms / 1000).toFixed(1)}s</td>
                            <td className="muted">{expPerQ}s</td>
                            <td style={{ color: diff > 0 ? 'var(--accent)' : 'var(--green)' }}>{diff > 0 ? '+' : ''}{diff.toFixed(1)}s</td>
                            <td>{!r.correct && <button className="btn small" onClick={() => sendOne(r.id, r.number)}><Repeat size={13} /> hoje</button>}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
