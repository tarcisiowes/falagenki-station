import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowUp, GraduationCap, Headphones, History, NotebookPen, SquarePen } from 'lucide-react'
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
import {
  findExerciseLocation,
  findLatestExerciseId,
  getAdjacentExerciseId,
  getExerciseFallbackId,
} from '../lib/exerciseSession'

type Tab = 'estudo' | 'exercicios' | 'audios'

interface StoredExerciseSession {
  tab?: Tab
  questionId?: string
}

const EXERCISE_SESSION_PREFIX = 'nihongo-br:exercise-session:v1'

function exerciseSessionKey(levelId: string | undefined, sectionId: string | undefined): string {
  return `${EXERCISE_SESSION_PREFIX}:${levelId ?? ''}:${sectionId ?? ''}`
}

function readExerciseSession(key: string): StoredExerciseSession {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) ?? '{}')
    return parsed && typeof parsed === 'object' ? parsed as StoredExerciseSession : {}
  } catch {
    return {}
  }
}

function updateExerciseSession(key: string, patch: Partial<StoredExerciseSession>) {
  try {
    localStorage.setItem(key, JSON.stringify({ ...readExerciseSession(key), ...patch }))
  } catch {
    // The session remains usable in memory when storage is unavailable.
  }
}

export function SectionPage() {
  const { levelId, sectionId } = useParams()
  const found = getSection(levelId, sectionId)
  const answers = useAnswers()
  const custom = useCustom()
  const [furigana, setFurigana] = useState(true)
  const [pendingExercise, setPendingExercise] = useState<string>()
  const [activeQuestionId, setActiveQuestionId] = useState<string>()
  const [expandedGroupId, setExpandedGroupId] = useState<string>()
  const [scrollTargetId, setScrollTargetId] = useState<string>()
  const [showTopAction, setShowTopAction] = useState(false)
  const sessionKey = exerciseSessionKey(levelId, sectionId)

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

  const latestExerciseId = useMemo(
    () => findLatestExerciseId(groups, answers),
    [groups, answers],
  )
  const previousExerciseId = useMemo(
    () => activeQuestionId ? getAdjacentExerciseId(groups, activeQuestionId, -1) : undefined,
    [groups, activeQuestionId],
  )
  const nextExerciseId = useMemo(
    () => activeQuestionId ? getAdjacentExerciseId(groups, activeQuestionId, 1) : undefined,
    [groups, activeQuestionId],
  )

  useEffect(() => {
    const stored = readExerciseSession(sessionKey)
    const storedLocation = findExerciseLocation(groups, stored.questionId)
    const questionId = storedLocation?.question.id ?? getExerciseFallbackId(groups, answers)
    const location = findExerciseLocation(groups, questionId)

    setTab(stored.tab ?? 'estudo')
    setActiveQuestionId(questionId)
    setExpandedGroupId(location?.groupId)
  }, [sessionKey])

  useEffect(() => {
    const onScroll = () => setShowTopAction(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function selectTab(nextTab: Tab) {
    setTab(nextTab)
    updateExerciseSession(sessionKey, { tab: nextTab })
  }

  function openQuestion(questionId: string, scroll = true) {
    const location = findExerciseLocation(groups, questionId)
    if (!location) return
    setActiveQuestionId(questionId)
    setExpandedGroupId(location.groupId)
    selectTab('exercicios')
    updateExerciseSession(sessionKey, { questionId })
    if (scroll) setScrollTargetId(questionId)
  }

  useEffect(() => {
    if (tab !== 'exercicios' || !pendingExercise) return
    openQuestion(pendingExercise)
    setPendingExercise(undefined)
  }, [pendingExercise, tab])

  useEffect(() => {
    if (tab !== 'exercicios' || !scrollTargetId) return
    const timeout = window.setTimeout(() => {
      const target = document.getElementById(scrollTargetId)
      if (!target) return
      const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
      target.focus({ preventScroll: true })
      setScrollTargetId(undefined)
    }, 40)
    return () => window.clearTimeout(timeout)
  }, [scrollTargetId, tab])

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
            onClick={() => selectTab(t)}
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
          <div className="exercise-session" id="exercise-session">
            {groups.map((group) => {
              const isExpanded = expandedGroupId === group.id
              const groupActiveQuestionId = isExpanded ? activeQuestionId : undefined

              return (
                <ExerciseGroupView
                  key={group.id}
                  group={group}
                  furigana={furigana}
                  answers={answers}
                  expanded={isExpanded}
                  activeQuestionId={groupActiveQuestionId}
                  hasPrevious={Boolean(previousExerciseId)}
                  hasNext={Boolean(nextExerciseId)}
                  onToggle={() => {
                    if (isExpanded) {
                      setExpandedGroupId(undefined)
                      setActiveQuestionId(undefined)
                      return
                    }
                    const questionId = getExerciseFallbackId([group], answers)
                    if (questionId) openQuestion(questionId, false)
                  }}
                  onQuestionChange={(questionId) => openQuestion(questionId)}
                  onPrevious={() => previousExerciseId && openQuestion(previousExerciseId)}
                  onNext={() => nextExerciseId && openQuestion(nextExerciseId)}
                  onFinish={() => {
                    if (nextExerciseId) {
                      openQuestion(nextExerciseId)
                    } else {
                      setActiveQuestionId(undefined)
                    }
                  }}
                />
              )
            })}
          </div>

          <div className="exercise-floating-actions" aria-label="Atalhos da página">
            <button
              className="exercise-floating-button"
              type="button"
              onClick={() => {
                const storedId = readExerciseSession(sessionKey).questionId
                const resumeId = findExerciseLocation(groups, storedId)?.question.id
                  ?? latestExerciseId
                  ?? getExerciseFallbackId(groups, answers)
                if (resumeId) openQuestion(resumeId)
              }}
              title="Ir ao último exercício"
            >
              <History size={19} /> <span>Retomar</span>
            </button>
            {showTopAction && (
              <button
                className="exercise-floating-button icon-only"
                type="button"
                onClick={() => {
                  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
                  window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
                }}
                aria-label="Voltar ao topo"
                title="Voltar ao topo"
              >
                <ArrowUp size={20} />
              </button>
            )}
          </div>
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
                    selectTab('exercicios')
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
