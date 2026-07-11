import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GraduationCap, Headphones, NotebookPen, SquarePen } from 'lucide-react'
import { SectionIcon } from '../components/icons'
import { getSection } from '../data'
import { useAnswers } from '../lib/storage'
import { sectionProgress } from '../lib/progress'
import { StudyNotes } from '../components/StudyNotes'
import { ExerciseGroupView } from '../components/ExerciseGroupView'
import { ScriptViewer } from '../components/ScriptViewer'
import { BackupBar } from '../components/BackupBar'
import { useCustom } from '../lib/customStore'
import { mergedGroups } from '../lib/dataAccess'
import { getAudioStudyCapabilities } from '../lib/audioStudy'

type Tab = 'estudo' | 'exercicios' | 'audios'

export function SectionPage() {
  const { levelId, sectionId } = useParams()
  const found = getSection(levelId, sectionId)
  const answers = useAnswers()
  const custom = useCustom()
  const [furigana, setFurigana] = useState(true)
  const [pendingExercise, setPendingExercise] = useState<string>()

  const groups = useMemo(
    () => (found ? mergedGroups(found.section, custom) : []),
    [found, custom],
  )

  const audioSummary = useMemo(() => {
    const tracks = found?.section.audios ?? []
    return {
      tracks: tracks.length,
      transcripts: tracks.filter((track) => getAudioStudyCapabilities(track).hasTranscript).length,
      reviewedTranscripts: tracks.filter((track) => track.transcript?.reviewed).length,
      machineTranscripts: tracks.filter((track) => track.transcript?.source === 'machine').length,
      exercises: new Set(tracks.flatMap((track) => track.exerciseIds ?? [])).size,
    }
  }, [found])

  const tabs = useMemo<Tab[]>(() => {
    if (!found) return []
    const t: Tab[] = []
    if (found.section.studyNotes.length) t.push('estudo')
    if (groups.length) t.push('exercicios')
    if (found.section.audios?.length) t.push('audios')
    return t
  }, [found, groups.length])

  const [tab, setTab] = useState<Tab>('estudo')

  useEffect(() => {
    if (tab !== 'exercicios' || !pendingExercise) return
    const timeout = window.setTimeout(() => {
      const target = document.getElementById(pendingExercise)
      if (!target) return
      const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
      target.focus({ preventScroll: true })
      setPendingExercise(undefined)
    }, 0)
    return () => window.clearTimeout(timeout)
  }, [pendingExercise, tab])

  if (!found) {
    return (
      <div className="card" style={{ padding: 24 }}>
        Seção não encontrada. <Link to="/">Voltar ao início</Link>
      </div>
    )
  }

  const { level, section } = found
  const activeTab = tabs.includes(tab) ? tab : tabs[0]
  const p = sectionProgress(section, answers)

  const TAB_LABEL: Record<Tab, string> = {
    estudo: 'Estudar',
    exercicios: `Exercícios${p.total ? ` (${p.answered}/${p.total})` : ''}`,
    audios: `Áudios${section.audios?.length ? ` (${section.audios.length})` : ''}`,
  }
  const TAB_ICON: Record<Tab, ReactNode> = {
    estudo: <GraduationCap size={15} />,
    exercicios: <NotebookPen size={15} />,
    audios: <Headphones size={15} />,
  }

  return (
    <div>
      <div className="crumbs">
        <Link to="/">Início</Link> / <Link to={`/nivel/${level.id}`}>{level.id}</Link> /{' '}
        <span>{section.titlePt}</span>
      </div>

      <div className="hero" style={{ padding: '26px 30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <SectionIcon id={section.id} size={34} />
          <div>
            <span className="badge">{level.id}</span>
            <h1 style={{ margin: '6px 0 2px' }}>{section.titlePt}</h1>
            <div className="ja muted">{section.titleJa}</div>
          </div>
        </div>
        <p className="section-summary" style={{ marginTop: 14 }}>{section.summaryPt}</p>
      </div>

      <BackupBar />

      <div className="tablist" role="tablist" aria-label="Conteúdo da lição">
        {tabs.map((t) => (
          <button
            key={t}
            className={activeTab === t ? 'active' : ''}
            type="button"
            role="tab"
            aria-selected={activeTab === t}
            onClick={() => setTab(t)}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>{TAB_ICON[t]} {TAB_LABEL[t]}</span>
          </button>
        ))}
      </div>

      {activeTab === 'estudo' && <StudyNotes notes={section.studyNotes} />}

      {activeTab === 'exercicios' && (
        <div>
          <div className="card" style={{ padding: '12px 16px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <label className="switch">
              <input type="checkbox" checked={furigana} onChange={(e) => setFurigana(e.target.checked)} />
              Mostrar furigana (leitura dos kanji)
            </label>
            <span className="muted" style={{ fontSize: 13 }}>
              Marque a alternativa, escreva sua justificativa e clique em <b>Verificar resposta</b>.
            </span>
            <div className="spacer" style={{ flex: 1 }} />
            {level.courseId === 'jlpt' && (
              <Link className="btn small" to={`/criar?level=${level.id}&section=${section.id}`}>
                <SquarePen size={15} /> Criar exercício desta área
              </Link>
            )}
          </div>
          {groups.map((g) => (
            <ExerciseGroupView key={g.id} group={g} furigana={furigana} />
          ))}
        </div>
      )}

      {activeTab === 'audios' && (
        <div>
          <section className="audio-session-guide" aria-labelledby="audio-session-title">
            <div>
              <h2 id="audio-session-title"><Headphones size={19} /> Sessão de escuta da lição</h2>
              <p>
                Abra uma faixa por vez. Tente compreender primeiro, pratique nas questões vinculadas
                e só depois consulte o roteiro. Controles de furigana, tradução e gabarito aparecem
                apenas quando a faixa realmente oferece esse conteúdo.
              </p>
            </div>
            <div className="audio-session-summary" aria-label="Resumo da sessão">
              <span className="badge gray">{audioSummary.tracks} faixas</span>
              <span className="badge gray">{audioSummary.transcripts} roteiros</span>
              {audioSummary.reviewedTranscripts > 0 && (
                <span className="badge gray">{audioSummary.reviewedTranscripts} conferidos</span>
              )}
              {audioSummary.machineTranscripts > 0 && (
                <span className="badge gray">{audioSummary.machineTranscripts} automáticos de apoio</span>
              )}
              <span className="badge gray">{audioSummary.exercises} exercícios revisáveis</span>
              <Link className="btn small" to={`/revisar/${level.courseId}`}>Abrir revisão {level.courseId === 'genki' ? 'Genki' : level.titlePt}</Link>
            </div>
          </section>
          <div className="grid audio-track-list">
            {section.audios?.map((track, index) => (
              <div key={track.id}>
                <ScriptViewer
                  track={track}
                  defaultExpanded={index === 0}
                  onPractice={(exerciseId) => {
                    setPendingExercise(exerciseId)
                    setTab('exercicios')
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
