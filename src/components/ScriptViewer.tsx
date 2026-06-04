import { useRef, useState } from 'react'
import type { AudioTrack } from '../data/types'
import { JaText } from '../lib/JaText'
import { AudioPlayer, type AudioPlayerHandle } from './AudioPlayer'

function speakerClass(sp: string): string {
  const s = sp.toLowerCase()
  if (s === 'f') return 'f'
  if (s === 'm') return 'm'
  return 'n'
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

        {track.script.map((item, i) => (
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
                  ▶ ouvir trecho
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
                <strong>❓ </strong>
                <JaText text={item.questionJa} furigana={furigana} />
                {revealAns && item.answer !== undefined && (
                  <div className="ans">Resposta correta: {item.answer}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
