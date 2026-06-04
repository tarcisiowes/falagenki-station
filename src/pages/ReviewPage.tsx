import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { JaText } from '../lib/JaText'
import { allFlatQuestions, type FlatQuestion } from '../lib/dataAccess'
import { customStore } from '../lib/customStore'
import { srsStore, gradeCard, useSrs } from '../lib/reviewStore'
import { isDue, previewInterval, type Grade } from '../lib/srs'
import { useCustom } from '../lib/customStore'

const NEW_LIMIT = 20
type LevelFilter = 'all' | 'N5' | 'N4'

function buildQueue(filter: LevelFilter): FlatQuestion[] {
  const cust = customStore.get()
  const srs = srsStore.get()
  let flat = allFlatQuestions(cust)
  if (filter !== 'all') flat = flat.filter((f) => f.levelId === filter)
  const due = flat.filter((f) => srs[f.q.id] && isDue(srs[f.q.id]))
  const fresh = flat.filter((f) => !srs[f.q.id]).slice(0, NEW_LIMIT)
  return [...due, ...fresh]
}

const GRADES: { g: Grade; label: string; cls: string }[] = [
  { g: 'again', label: 'De novo', cls: 'again' },
  { g: 'hard', label: 'Difícil', cls: 'hard' },
  { g: 'good', label: 'Bom', cls: 'good' },
  { g: 'easy', label: 'Fácil', cls: 'easy' },
]

export function ReviewPage() {
  const srs = useSrs()
  const custom = useCustom()
  const [filter, setFilter] = useState<LevelFilter>('all')
  const [queue, setQueue] = useState<FlatQuestion[]>(() => buildQueue('all'))
  const [furigana, setFurigana] = useState(true)
  const [selected, setSelected] = useState<number | undefined>()
  const [revealed, setRevealed] = useState(false)
  const [done, setDone] = useState(0)

  // contagem total de cartas pendentes (para o resumo quando não há sessão ativa)
  const counts = useMemo(() => {
    let flat = allFlatQuestions(custom)
    if (filter !== 'all') flat = flat.filter((f) => f.levelId === filter)
    const dueN = flat.filter((f) => srs[f.q.id] && isDue(srs[f.q.id])).length
    const newN = flat.filter((f) => !srs[f.q.id]).length
    return { dueN, newN, total: flat.length }
  }, [srs, custom, filter])

  function restart(f: LevelFilter) {
    setFilter(f)
    setQueue(buildQueue(f))
    setSelected(undefined)
    setRevealed(false)
    setDone(0)
  }

  const current = queue[0]

  function answer(g: Grade) {
    if (!current) return
    gradeCard(current.q.id, g)
    setQueue((q) => {
      const [head, ...rest] = q
      // "De novo" recoloca a carta no fim da sessão (revisão no mesmo dia)
      return g === 'again' ? [...rest, head] : rest
    })
    setDone((d) => d + 1)
    setSelected(undefined)
    setRevealed(false)
  }

  const correct = current && selected === current.q.answer

  return (
    <div>
      <div className="crumbs">
        <Link to="/">Início</Link> / <span>Revisão</span>
      </div>

      <div className="hero" style={{ padding: '24px 28px' }}>
        <div className="ja-big ja">🔁 復習 — Revisão estilo Anki</div>
        <h1 style={{ margin: '4px 0' }}>Revise os exercícios com repetição espaçada</h1>
        <p>
          Cada exercício vira uma carta. Você responde, vê a correção e diz o quão difícil foi
          (<b>De novo / Difícil / Bom / Fácil</b>). Quem você errar (ou marcar “De novo”) volta
          ainda <b>hoje</b>; o resto é reagendado para os próximos dias.
        </p>
      </div>

      <div className="card" style={{ padding: '12px 16px', marginBottom: 16, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="tablist" style={{ margin: 0 }}>
          {(['all', 'N5', 'N4'] as LevelFilter[]).map((f) => (
            <button key={f} className={filter === f ? 'active' : ''} onClick={() => restart(f)}>
              {f === 'all' ? 'Todos' : f}
            </button>
          ))}
        </div>
        <span className="badge gray">a revisar hoje: {counts.dueN}</span>
        <span className="badge gray">novas: {Math.min(counts.newN, NEW_LIMIT)}</span>
        <div className="spacer" style={{ flex: 1 }} />
        <label className="switch">
          <input type="checkbox" checked={furigana} onChange={(e) => setFurigana(e.target.checked)} />
          Furigana
        </label>
        <button className="btn small" onClick={() => restart(filter)}>↻ Reiniciar sessão</button>
      </div>

      {!current ? (
        <div className="card" style={{ padding: 40, textAlign: 'center' }}>
          <div style={{ fontSize: 40 }}>🎉</div>
          <h2 style={{ marginTop: 8 }}>Sessão concluída!</h2>
          <p className="muted">
            Você revisou <b>{done}</b> carta(s). Não há mais cartas pendentes para “{filter === 'all' ? 'todos os níveis' : filter}” agora.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 10 }}>
            <button className="btn primary" onClick={() => restart(filter)}>Revisar de novo</button>
            <Link to="/" className="btn">Voltar ao início</Link>
          </div>
        </div>
      ) : (
        <div className="card q review-card">
          <div className="review-meta">
            <span className="badge">{current.levelId}</span>
            <span className="muted">{current.sectionTitlePt} · {current.groupTitle}</span>
            <div className="spacer" style={{ flex: 1 }} />
            <span className="muted">restantes na sessão: {queue.length}</span>
          </div>

          {current.q.context && (
            <div className="context ja"><JaText text={current.q.context} furigana={furigana} /></div>
          )}
          <div className="stem ja" style={{ fontSize: 18, margin: '6px 0 12px' }}>
            <JaText text={current.q.prompt} furigana={furigana} />
          </div>

          <div className="choices">
            {current.q.choices.map((c) => {
              let cls = 'choice'
              if (selected === c.n) cls += ' selected'
              if (revealed && c.n === current.q.answer) cls += ' correct'
              else if (revealed && selected === c.n && c.n !== current.q.answer) cls += ' wrong'
              return (
                <button
                  key={c.n}
                  className={cls}
                  disabled={revealed}
                  onClick={() => setSelected(c.n)}
                  type="button"
                >
                  <span className="num">{c.n}</span>
                  <JaText text={c.text} furigana={furigana} />
                </button>
              )
            })}
          </div>

          {!revealed ? (
            <div className="actions" style={{ marginTop: 14 }}>
              <button className="btn primary" disabled={selected === undefined} onClick={() => setRevealed(true)}>
                Mostrar resposta
              </button>
              {selected === undefined && <span className="muted" style={{ fontSize: 13 }}>marque uma alternativa</span>}
            </div>
          ) : (
            <>
              <div className={`feedback ${correct ? 'ok' : 'no'}`}>
                <div className="head">{correct ? '✅ Você acertou' : `❌ Errou — correta: ${current.q.answer}`}</div>
                {current.q.translationPt && <div className="tr">“{current.q.translationPt}”</div>}
                <div>{current.q.explanationPt}</div>
              </div>

              <div className="grade-row">
                {GRADES.map(({ g, label, cls }) => {
                  const card = srs[current.q.id]
                  const recommended = !correct && g === 'again'
                  return (
                    <button
                      key={g}
                      className={`grade ${cls}${recommended ? ' recommend' : ''}`}
                      onClick={() => answer(g)}
                    >
                      <span className="gl">{label}</span>
                      <span className="gi">{previewInterval(card, g)}</span>
                    </button>
                  )
                })}
              </div>
              {!correct && (
                <p className="muted" style={{ fontSize: 12, marginTop: 8 }}>
                  Como você errou, o recomendado é <b>De novo</b> (volta ainda hoje).
                </p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
