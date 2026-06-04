import { Link, useParams } from 'react-router-dom'
import { getLevel } from '../data'
import { useAnswers } from '../lib/storage'
import { sectionProgress } from '../lib/progress'
import { BackupBar } from '../components/BackupBar'
import { SectionIcon } from '../components/icons'

const TILE_BG: Record<string, string> = {
  vocabulary: '#fbf0d6',
  grammar: '#e6eefb',
  reading: '#e4f5ea',
  listening: '#fde7ea',
}

export function LevelPage() {
  const { levelId } = useParams()
  const level = getLevel(levelId)
  const answers = useAnswers()

  if (!level) {
    return (
      <div className="card" style={{ padding: 24 }}>
        Nível não encontrado. <Link to="/">Voltar ao início</Link>
      </div>
    )
  }

  return (
    <div>
      <div className="crumbs">
        <Link to="/">Início</Link> / <span>{level.id}</span>
      </div>

      <div className="hero" style={{ padding: '28px 32px' }}>
        <span className="badge">{level.id}</span>
        <h1 style={{ marginTop: 10 }}>{level.titlePt}</h1>
        <p>{level.descriptionPt}</p>
      </div>

      <BackupBar />

      <h2 style={{ margin: '6px 0 14px' }}>Áreas de estudo</h2>
      <div className="grid cols-2">
        {level.sections.map((s) => {
          const p = sectionProgress(s, answers)
          const nQ = p.total
          const nAudio = s.audios?.length ?? 0
          return (
            <Link
              to={`/nivel/${level.id}/${s.id}`}
              key={s.id}
              className="card section-tile"
              style={{ background: TILE_BG[s.id] }}
            >
              <div className="ic"><SectionIcon id={s.id} size={28} /></div>
              <h3>{s.titlePt}</h3>
              <div className="ja">{s.titleJa}</div>
              <p>{s.summaryPt}</p>
              <div className="prog">
                <div className="progress"><i style={{ width: `${p.pct}%` }} /></div>
                <div className="prog-label">
                  <span>
                    {nQ > 0 ? `${p.answered}/${nQ} questões` : 'Conteúdo de estudo'}
                    {nAudio > 0 ? ` · ${nAudio} áudio(s)` : ''}
                  </span>
                  {nQ > 0 && <span>{p.pct}%</span>}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
