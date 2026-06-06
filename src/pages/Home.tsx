import { Link } from 'react-router-dom'
import { BarChart3, FileText, Headphones, NotebookPen, Repeat, Save, SquarePen, Timer } from 'lucide-react'
import { courses } from '../data'
import type { Level } from '../data/types'
import { useAnswers } from '../lib/storage'
import { levelProgress } from '../lib/progress'
import { BackupBar } from '../components/BackupBar'
import { SectionIcon } from '../components/icons'
import { useSrs } from '../lib/reviewStore'
import { useCustom } from '../lib/customStore'
import { allFlatQuestions } from '../lib/dataAccess'
import { isDue } from '../lib/srs'

const LEVEL_BG: Record<string, string> = {
  N5: '#fde7ea',
  N4: '#e6eefb',
  starter: '#e4f5ea',
}
const LEVEL_SHORT: Record<string, string> = { N5: 'N5', N4: 'N4', starter: '入門' }

function levelTitleForCard(lv: Level) {
  if (lv.courseId === 'irodori') {
    return lv.titlePt.replace(/^Irodori\s*[—-]\s*/, '')
  }
  return lv.titlePt
}

function levelDescriptionForCard(lv: Level) {
  if (lv.courseId === 'irodori') {
    return lv.descriptionPt.replace(/\s+do Irodori\s+\(いろどり: Japonês para a vida no Japão, da Japan Foundation\)/g, '')
  }
  return lv.descriptionPt
}

export function Home() {
  const answers = useAnswers()
  const srs = useSrs()
  const custom = useCustom()
  const flat = allFlatQuestions(custom)
  const dueToday = flat.filter((f) => srs[f.q.id] && isDue(srs[f.q.id])).length

  function LevelCard({ lv }: { lv: Level }) {
    const p = levelProgress(lv, answers)
    const isJlpt = lv.courseId === 'jlpt'
    const description = levelDescriptionForCard(lv)
    return (
      <Link to={`/nivel/${lv.id}`} className="card level-card" style={{ background: LEVEL_BG[lv.id] }}>
        <div className="lv" style={{ fontFamily: isJlpt ? undefined : 'var(--ja-font)' }}>
          {LEVEL_SHORT[lv.id] ?? lv.id}
        </div>
        <h3>{levelTitleForCard(lv)}</h3>
        <p>{description.slice(0, 120)}{description.length > 120 ? '…' : ''}</p>
        <div className="prog" style={{ marginTop: 14 }}>
          <div className="progress accent"><i style={{ width: `${p.pct}%` }} /></div>
          <div className="prog-label">
            <span>{p.answered} de {p.total} questões</span>
            <span>{p.pct}%</span>
          </div>
        </div>
        <div className="meta">
          {isJlpt ? (
            lv.sections.map((s) => (
              <span className="badge gray" key={s.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <SectionIcon id={s.id} size={13} /> {s.titlePt}
              </span>
            ))
          ) : (
            <span className="badge gray">{lv.sections.length} módulos</span>
          )}
        </div>
      </Link>
    )
  }

  return (
    <div>
      <section className="hero">
        <div className="ja-big ja">日本語を学ぼう</div>
        <h1>Estude japonês — explicado em português</h1>
        <p>
          Duas trilhas: <b>JLPT</b> (N5/N4), focada no exame de proficiência, e <b>Irodori</b>, o
          curso da Japan Foundation para a vida no Japão. Exercícios com correção, áudios com
          controles e transcrição, revisão estilo Anki e análise — tudo salvo no seu navegador.
        </p>
        <div className="feature-list">
          <div className="item"><span className="ic"><NotebookPen size={18} /></span><span>Exercícios com campo de resposta e anotação salvos automaticamente.</span></div>
          <div className="item"><span className="ic"><Headphones size={18} /></span><span>Player de áudio com velocidade, avanço/retrocesso e repetição A–B.</span></div>
          <div className="item"><span className="ic"><FileText size={18} /></span><span>Transcrição (JLPT) e organização por módulos (Irodori), com explicações em pt-BR.</span></div>
          <div className="item"><span className="ic"><Save size={18} /></span><span>Backup das respostas, revisão e simulados em arquivo.</span></div>
        </div>
      </section>

      <BackupBar />

      <div className="grid cols-4" style={{ marginBottom: 26 }}>
        <Link to="/revisao-geral" className="card section-tile" style={{ background: 'var(--green-soft)' }}>
          <div className="ic"><Repeat size={28} /></div>
          <h3>Revisão Geral</h3>
          <p>{dueToday > 0 ? `${dueToday} carta(s) para hoje` : 'Repetição espaçada (Anki)'}</p>
        </Link>
        <Link to="/simulado" className="card section-tile" style={{ background: 'var(--blue-soft)' }}>
          <div className="ic"><Timer size={28} /></div>
          <h3>Simulado</h3>
          <p>JLPT no tempo da prova</p>
        </Link>
        <Link to="/analise-geral" className="card section-tile" style={{ background: 'var(--amber-soft)' }}>
          <div className="ic"><BarChart3 size={28} /></div>
          <h3>Análise Geral</h3>
          <p>Acertos, tempos e médias</p>
        </Link>
        <Link to="/criar" className="card section-tile" style={{ background: 'var(--accent-soft)' }}>
          <div className="ic"><SquarePen size={28} /></div>
          <h3>Criar</h3>
          <p>Seus exercícios JLPT</p>
        </Link>
      </div>

      {courses.map((course) => (
        <div key={course.id} style={{ marginBottom: 22 }}>
          <h2 style={{ margin: '8px 0 4px' }}>{course.titlePt}</h2>
          <p className="muted" style={{ marginTop: 0, fontSize: 14 }}>{course.taglinePt}</p>
          <div className="grid cols-2">
            {course.levels.map((lv) => <LevelCard key={lv.id} lv={lv} />)}
          </div>
        </div>
      ))}
    </div>
  )
}
