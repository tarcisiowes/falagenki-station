import { Link } from 'react-router-dom'
import { levels } from '../data'
import { useAnswers } from '../lib/storage'
import { levelProgress } from '../lib/progress'
import { BackupBar } from '../components/BackupBar'
import { useSrs } from '../lib/reviewStore'
import { useCustom } from '../lib/customStore'
import { allFlatQuestions } from '../lib/dataAccess'
import { isDue } from '../lib/srs'

const LEVEL_STYLE: Record<string, { bg: string; desc: string }> = {
  N5: { bg: '#fde7ea', desc: 'Primeiro nível. Hiragana, katakana, kanji básico e frases do dia a dia.' },
  N4: { bg: '#e6eefb', desc: 'Nível básico-intermediário. Mais kanji, gramática e textos um pouco maiores.' },
}

export function Home() {
  const answers = useAnswers()
  const srs = useSrs()
  const custom = useCustom()
  const flat = allFlatQuestions(custom)
  const dueToday = flat.filter((f) => srs[f.q.id] && isDue(srs[f.q.id])).length

  return (
    <div>
      <section className="hero">
        <div className="ja-big ja">日本語を学ぼう 🇯🇵</div>
        <h1>Estude japonês para o JLPT — explicado em português</h1>
        <p>
          Uma plataforma de estudo com os fluxos de cada parte do exame (vocabulário, gramática,
          leitura e audição), exercícios interativos com correção, áudios com controles de
          reprodução e transcrição oficial sincronizada. Sem login: tudo fica salvo no seu
          navegador, com backup que você pode baixar e recarregar.
        </p>
        <div className="feature-list">
          <div className="item"><span className="ic">📝</span><span>Exercícios fiéis ao exame, com campo de resposta e anotação salvos automaticamente.</span></div>
          <div className="item"><span className="ic">🎧</span><span>Player de áudio com velocidade ajustável, avanço/retrocesso e repetição de trecho (A–B).</span></div>
          <div className="item"><span className="ic">📄</span><span>Transcrição oficial dos áudios com furigana e tradução em pt-BR.</span></div>
          <div className="item"><span className="ic">💾</span><span>Backup das respostas em arquivo, para nunca perder seu progresso.</span></div>
        </div>
      </section>

      <BackupBar />

      <div className="grid cols-4" style={{ marginBottom: 26 }}>
        <Link to="/revisar" className="card section-tile" style={{ background: 'var(--green-soft)' }}>
          <div className="ic">🔁</div>
          <h3>Revisar</h3>
          <p>{dueToday > 0 ? `${dueToday} carta(s) para hoje` : 'Repetição espaçada (Anki)'}</p>
        </Link>
        <Link to="/simulado" className="card section-tile" style={{ background: 'var(--blue-soft)' }}>
          <div className="ic">⏱</div>
          <h3>Simulado</h3>
          <p>Treine no tempo da prova</p>
        </Link>
        <Link to="/analise" className="card section-tile" style={{ background: 'var(--amber-soft)' }}>
          <div className="ic">📊</div>
          <h3>Análise</h3>
          <p>Acertos, tempos e médias</p>
        </Link>
        <Link to="/criar" className="card section-tile" style={{ background: 'var(--accent-soft)' }}>
          <div className="ic">✍️</div>
          <h3>Criar</h3>
          <p>Seus exercícios N5/N4</p>
        </Link>
      </div>

      <h2 style={{ margin: '8px 0 14px' }}>Escolha um nível</h2>
      <div className="grid cols-2">
        {levels.map((lv) => {
          const p = levelProgress(lv, answers)
          const style = LEVEL_STYLE[lv.id]
          return (
            <Link
              to={`/nivel/${lv.id}`}
              key={lv.id}
              className="card level-card"
              style={{ background: style?.bg }}
            >
              <div className="lv">{lv.id}</div>
              <h3>{lv.titlePt}</h3>
              <p>{style?.desc ?? lv.descriptionPt}</p>
              <div className="prog" style={{ marginTop: 14 }}>
                <div className="progress accent"><i style={{ width: `${p.pct}%` }} /></div>
                <div className="prog-label">
                  <span>{p.answered} de {p.total} questões</span>
                  <span>{p.pct}%</span>
                </div>
              </div>
              <div className="meta">
                {lv.sections.map((s) => (
                  <span className="badge gray" key={s.id}>{s.icon} {s.titlePt}</span>
                ))}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
