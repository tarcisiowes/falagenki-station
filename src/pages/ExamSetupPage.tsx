import { Link } from 'react-router-dom'
import { levels } from '../data'
import { useCustom } from '../lib/customStore'
import { examableSections, examDurationSec } from '../lib/dataAccess'

function fmtMin(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return s ? `${m}min ${s}s` : `${m}min`
}

export function ExamSetupPage() {
  const custom = useCustom()

  return (
    <div>
      <div className="crumbs">
        <Link to="/">Início</Link> / <span>Simulado</span>
      </div>

      <div className="hero" style={{ padding: '24px 28px' }}>
        <div className="ja-big ja">⏱ 模擬試験 — Simulado cronometrado</div>
        <h1 style={{ margin: '4px 0' }}>Treine no tempo da prova</h1>
        <p>
          Cada seção tem um tempo-alvo baseado no ritmo do exame. Você responde uma questão por vez,
          com cronômetro, controle de pausa e navegação. Ao finalizar, você recebe a <b>nota</b> e uma
          <b> análise</b>: tempo gasto em cada questão, acertos, erros, médias e o tempo esperado.
        </p>
        <div style={{ marginTop: 10 }}>
          <Link to="/analise" className="btn small">📊 Ver histórico e análise</Link>
        </div>
      </div>

      {levels.map((level) => {
        const sections = examableSections(level.id, custom)
        return (
          <div key={level.id} style={{ marginBottom: 24 }}>
            <h2 style={{ margin: '6px 0 12px' }}>
              <span className="badge">{level.id}</span> {level.titlePt}
            </h2>
            <div className="grid cols-2">
              {sections.map(({ section, count }) => {
                const dur = examDurationSec(section.id, count)
                return (
                  <Link
                    key={section.id}
                    to={`/simulado/${level.id}/${section.id}`}
                    className="card section-tile"
                  >
                    <div className="ic">{section.icon}</div>
                    <h3>{section.titlePt}</h3>
                    <p>{count} questões · tempo-alvo {fmtMin(dur)}</p>
                    <div className="prog-label" style={{ marginTop: 12 }}>
                      <span>≈ {Math.round(dur / count)}s por questão (esperado)</span>
                      <span>▶ iniciar</span>
                    </div>
                  </Link>
                )
              })}
            </div>
            {sections.length === 0 && <p className="muted">Sem questões de texto para simulado neste nível ainda.</p>}
          </div>
        )
      })}

      <p className="muted" style={{ fontSize: 13 }}>
        A audição não entra no simulado (é guiada pelo áudio). Pratique-a na área de <b>Audição</b> de cada nível.
      </p>
    </div>
  )
}
