import { useRef, useState } from 'react'
import { CheckCircle2, HelpCircle, Play, XCircle } from 'lucide-react'
import type { AudioTrack, ScriptItem } from '../data/types'
import { JaText } from '../lib/JaText'
import { setAnswer, useAnswer } from '../lib/storage'
import { AudioPlayer, type AudioPlayerHandle } from './AudioPlayer'

function speakerClass(sp: string): string {
  const s = sp.toLowerCase()
  if (s === 'f') return 'f'
  if (s === 'm') return 'm'
  return 'n'
}

/** Nº de alternativas: もんだい3/4 têm falas numeradas (1/2/3); 1/2 são 4 opções (imagens). */
function optionCount(item: ScriptItem): number {
  const numbered = item.lines.filter((l) => /^[0-9]$/.test(l.speaker.trim())).length
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
  const rec = useAnswer(id)
  const sel = rec?.selected
  const nums = Array.from({ length: count }, (_, i) => i + 1)

  return (
    <div className="audio-answer">
      <span className="aa-label">Sua resposta:</span>
      <div className="opt-row">
        {nums.map((n) => {
          let cls = 'opt'
          if (sel === n) cls += ' selected'
          if (reveal && n === answer) cls += ' correct'
          else if (reveal && sel === n && n !== answer) cls += ' wrong'
          return (
            <button key={n} className={cls} type="button" onClick={() => setAnswer(id, { selected: n })}>
              {n}
            </button>
          )
        })}
      </div>
      {reveal && (
        <span className="aa-result">
          {sel === undefined ? (
            <>Resposta correta: <b>{answer}</b></>
          ) : sel === answer ? (
            <span style={{ color: 'var(--green)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle2 size={15} /> certo
            </span>
          ) : (
            <span style={{ color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <XCircle size={15} /> correta: <b>{answer}</b>
            </span>
          )}
        </span>
      )}
    </div>
  )
}

export function ScriptViewer({ track }: { track: AudioTrack }) {
  const playerRef = useRef<AudioPlayerHandle>(null)
  const [furigana, setFurigana] = useState(true)
  const [showPt, setShowPt] = useState(true)
  const [revealAns, setRevealAns] = useState(false)

  return (
    <div>
      <AudioPlayer ref={playerRef} src={track.src} title={track.title} />
      <p className="muted" style={{ fontSize: 14, marginTop: 10 }}>
        {track.descriptionPt}
      </p>

      <div className="script">
        <div className="ctrl">
          <label className="switch">
            <input type="checkbox" checked={furigana} onChange={(e) => setFurigana(e.target.checked)} />
            Furigana
          </label>
          <label className="switch">
            <input type="checkbox" checked={showPt} onChange={(e) => setShowPt(e.target.checked)} />
            Tradução pt-BR
          </label>
          <label className="switch">
            <input type="checkbox" checked={revealAns} onChange={(e) => setRevealAns(e.target.checked)} />
            Mostrar respostas
          </label>
        </div>

        {track.script.map((item, i) => {
          const itemId = `${track.id}-${i}`
          return (
            <div className="script-item" key={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="label ja">{item.label}</span>
                {item.time !== undefined && (
                  <button
                    className="btn small ghost"
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
                  {showPt && item.setupPt && (
                    <div className="pt" style={{ marginTop: 2 }}>{item.setupPt}</div>
                  )}
                </div>
              )}

              {item.lines.map((ln, j) => (
                <div className="script-line" key={j}>
                  <span className={`sp ${speakerClass(ln.speaker)}`}>{ln.speaker}</span>
                  <div>
                    <div className="ja"><JaText text={ln.ja} furigana={furigana} /></div>
                    {showPt && ln.pt && <div className="pt">{ln.pt}</div>}
                  </div>
                </div>
              ))}

              {item.questionJa && (
                <div className="question">
                  <HelpCircle size={15} style={{ marginRight: 4 }} />
                  <JaText text={item.questionJa} furigana={furigana} />
                </div>
              )}

              {item.answer !== undefined && (
                <AudioAnswer id={itemId} answer={item.answer} count={optionCount(item)} reveal={revealAns} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
