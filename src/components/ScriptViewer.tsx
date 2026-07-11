import { useRef, useState } from 'react'
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ListChecks,
  Play,
  XCircle,
} from 'lucide-react'
import type { AudioTrack, ScriptItem } from '../data/types'
import { JaText } from '../lib/JaText'
import {
  audioKindLabelPt,
  getAudioStudyCapabilities,
  getTranscriptItems,
  transcriptDisclosurePt,
  transcriptLabelPt,
} from '../lib/audioStudy'
import { setAnswer, useAnswer } from '../lib/storage'
import { AudioPlayer, type AudioPlayerHandle } from './AudioPlayer'

function speakerClass(speaker: string): string {
  const value = speaker.toLowerCase()
  if (value === 'f') return 'f'
  if (value === 'm') return 'm'
  return 'n'
}

function optionCount(item: ScriptItem): number {
  const numbered = item.lines.filter((line) => /^[0-9]$/u.test(line.speaker.trim())).length
  return numbered >= 2 ? numbered : 4
}

function AudioAnswer({
  id,
  answer,
  count,
  reveal,
}: {
  id: string
  answer: number
  count: number
  reveal: boolean
}) {
  const record = useAnswer(id)
  const selected = record?.selected
  const numbers = Array.from({ length: count }, (_, index) => index + 1)

  return (
    <div className="audio-answer">
      <span className="aa-label">Sua resposta:</span>
      <div className="opt-row">
        {numbers.map((number) => {
          let className = 'opt'
          if (selected === number) className += ' selected'
          if (reveal && number === answer) className += ' correct'
          else if (reveal && selected === number && number !== answer) className += ' wrong'
          return (
            <button
              key={number}
              className={className}
              type="button"
              onClick={() => setAnswer(id, { selected: number })}
            >
              {number}
            </button>
          )
        })}
      </div>
      {reveal && (
        <span className="aa-result">
          {selected === undefined ? (
            <>Resposta correta: <b>{answer}</b></>
          ) : selected === answer ? (
            <span className="audio-result-ok"><CheckCircle2 size={15} /> certo</span>
          ) : (
            <span className="audio-result-wrong"><XCircle size={15} /> correta: <b>{answer}</b></span>
          )}
        </span>
      )}
    </div>
  )
}

interface ScriptViewerProps {
  track: AudioTrack
  onPractice?: (exerciseId: string) => void
  defaultExpanded?: boolean
}

export function ScriptViewer({ track, onPractice, defaultExpanded = false }: ScriptViewerProps) {
  const playerRef = useRef<AudioPlayerHandle>(null)
  const [expanded, setExpanded] = useState(defaultExpanded)
  const [furigana, setFurigana] = useState(true)
  const [showPt, setShowPt] = useState(true)
  const [showTranscript, setShowTranscript] = useState(false)
  const [revealAnswers, setRevealAnswers] = useState(false)
  const capabilities = getAudioStudyCapabilities(track)
  const transcript = getTranscriptItems(track)
  const exerciseCount = track.exerciseIds?.length ?? 0
  const firstExercise = track.exerciseIds?.[0]
  const transcriptDisclosure = transcriptDisclosurePt(track)

  return (
    <article className={`audio-study ${expanded ? 'is-expanded' : 'is-collapsed'}`} id={`audio-${track.id}`}>
      <header className="audio-study-header">
        <div className="audio-study-meta">
          {track.code && <span className="badge gray">{track.code}</span>}
          <span className="badge audio-kind">{audioKindLabelPt(track.kind)}</span>
          {track.sourceRefPt && <span className="audio-source">{track.sourceRefPt}</span>}
        </div>
        <div className="audio-study-title-row">
          <h2>{track.title}</h2>
          <button
            className="btn small"
            type="button"
            aria-expanded={expanded}
            onClick={() => {
              setExpanded((value) => !value)
              if (expanded) setShowTranscript(false)
            }}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {expanded ? 'Recolher' : 'Estudar faixa'}
          </button>
        </div>
        <p>{track.descriptionPt}</p>
        {!expanded && (
          <p className="audio-study-preview"><b>Objetivo:</b> {track.purposePt ?? track.descriptionPt}</p>
        )}
      </header>

      {expanded && (
        <>
          <section className="audio-purpose" aria-label="Objetivo e tarefa desta faixa">
            <BookOpen size={18} aria-hidden="true" />
            <div>
              <h3>Objetivo de estudo</h3>
              <p>{track.purposePt ?? track.descriptionPt}</p>
              {track.practiceTaskPt && (
                <div className="audio-track-task">
                  <h3>O que fazer nesta faixa</h3>
                  <p>{track.practiceTaskPt}</p>
                </div>
              )}
            </div>
          </section>

          {track.instructionsPt?.length ? (
            <ol className="audio-study-steps">
              {track.instructionsPt.map((instruction) => <li key={instruction}>{instruction}</li>)}
            </ol>
          ) : null}

          <AudioPlayer ref={playerRef} src={track.src} title={track.title} />

          <div className="audio-study-actions">
            {firstExercise && onPractice && (
              <button className="btn primary" type="button" onClick={() => onPractice(firstExercise)}>
                <ListChecks size={16} />
                {track.exerciseLinkKind === 'direct'
                  ? `Praticar ${exerciseCount} ${exerciseCount === 1 ? 'exercício deste áudio' : 'exercícios deste áudio'}`
                  : `Praticar conteúdo relacionado (${exerciseCount})`}
              </button>
            )}
            {capabilities.hasTranscript && (
              <button
                className="btn"
                type="button"
                aria-expanded={showTranscript}
                onClick={() => setShowTranscript((visible) => !visible)}
              >
                {showTranscript ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                {showTranscript ? 'Ocultar' : 'Abrir'} {transcriptLabelPt(track).toLocaleLowerCase('pt-BR')}
              </button>
            )}
            {!capabilities.hasTranscript && capabilities.hasExercises && (
              <span className="audio-practice-note">
                {track.exerciseLinkKind === 'direct'
                  ? 'Esta faixa faz parte dos exercícios: enunciados, respostas e revisão ficam nos cartões vinculados.'
                  : 'Esta faixa treina a mesma habilidade dos exercícios relacionados da lição.'}
              </span>
            )}
          </div>

          {showTranscript && capabilities.hasTranscript && (
            <section className="script" aria-label={transcriptLabelPt(track)}>
          <div className="script-heading">
            <div>
              <h3>{transcriptLabelPt(track)}</h3>
              {transcriptDisclosure && <p>{transcriptDisclosure}</p>}
            </div>
            <div className="ctrl">
              {capabilities.hasFurigana && (
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={furigana}
                    onChange={(event) => setFurigana(event.target.checked)}
                  />
                  Furigana
                </label>
              )}
              {capabilities.hasTranslation && (
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={showPt}
                    onChange={(event) => setShowPt(event.target.checked)}
                  />
                  Tradução pt-BR
                </label>
              )}
              {capabilities.hasAnswers && (
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={revealAnswers}
                    onChange={(event) => setRevealAnswers(event.target.checked)}
                  />
                  Mostrar respostas
                </label>
              )}
            </div>
          </div>

          {transcript.map((item, index) => {
            const itemId = `${track.id}-${index}`
            return (
              <div className="script-item" key={itemId}>
                <div className="script-item-heading">
                  <span className="label ja"><JaText text={item.label} furigana={furigana} /></span>
                  {item.time !== undefined && (
                    <button
                      className="btn small ghost"
                      type="button"
                      onClick={() => {
                        playerRef.current?.seekTo(item.time!)
                        playerRef.current?.play()
                      }}
                    >
                      <Play size={13} /> ouvir trecho
                    </button>
                  )}
                </div>

                {item.setupJa && (
                  <div className="setup">
                    <JaText text={item.setupJa} furigana={furigana} />
                    {showPt && item.setupPt && <div className="pt">{item.setupPt}</div>}
                  </div>
                )}

                {item.lines.map((line, lineIndex) => (
                  <div className="script-line" key={`${itemId}-${lineIndex}`}>
                    <span className={`sp ${speakerClass(line.speaker)}`}>{line.speaker}</span>
                    <div>
                      <div className="ja"><JaText text={line.ja} furigana={furigana} /></div>
                      {showPt && line.pt && <div className="pt">{line.pt}</div>}
                    </div>
                  </div>
                ))}

                {item.questionJa && (
                  <div className="question">
                    <HelpCircle size={15} aria-hidden="true" />
                    <JaText text={item.questionJa} furigana={furigana} />
                  </div>
                )}

                {item.answer !== undefined && (
                  <AudioAnswer
                    id={itemId}
                    answer={item.answer}
                    count={optionCount(item)}
                    reveal={revealAnswers}
                  />
                )}
              </div>
            )
          })}
            </section>
          )}
        </>
      )}
    </article>
  )
}
