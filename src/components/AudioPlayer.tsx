import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

export interface AudioPlayerHandle {
  seekTo: (seconds: number) => void
  play: () => void
}

interface Props {
  src: string
  title: string
}

const RATES = [0.5, 0.75, 1, 1.25, 1.5]

function fmt(t: number): string {
  if (!isFinite(t)) return '0:00'
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export const AudioPlayer = forwardRef<AudioPlayerHandle, Props>(function AudioPlayer(
  { src, title },
  ref,
) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [rate, setRate] = useState(1)
  const [pointA, setPointA] = useState<number | null>(null)
  const [pointB, setPointB] = useState<number | null>(null)
  const [loopAB, setLoopAB] = useState(false)

  useImperativeHandle(ref, () => ({
    seekTo(seconds: number) {
      const a = audioRef.current
      if (!a) return
      a.currentTime = seconds
      setCurrent(seconds)
    },
    play() {
      audioRef.current?.play()
    },
  }))

  useEffect(() => {
    const a = audioRef.current
    if (a) a.playbackRate = rate
  }, [rate])

  function onTime() {
    const a = audioRef.current
    if (!a) return
    setCurrent(a.currentTime)
    if (loopAB && pointA !== null && pointB !== null && a.currentTime >= pointB) {
      a.currentTime = pointA
    }
  }

  function toggle() {
    const a = audioRef.current
    if (!a) return
    if (a.paused) a.play()
    else a.pause()
  }

  function nudge(delta: number) {
    const a = audioRef.current
    if (!a) return
    a.currentTime = Math.min(Math.max(0, a.currentTime + delta), duration || a.duration || 0)
  }

  return (
    <div className="card player">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={onTime}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      <div className="top">
        <button className="pp" onClick={toggle} aria-label={playing ? 'Pausar' : 'Tocar'}>
          {playing ? '❚❚' : '▶'}
        </button>
        <div className="seek">
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{title}</div>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={current}
            onChange={(e) => {
              const v = Number(e.target.value)
              if (audioRef.current) audioRef.current.currentTime = v
              setCurrent(v)
            }}
          />
        </div>
        <div className="time">
          {fmt(current)} / {fmt(duration)}
        </div>
      </div>

      <div className="row2">
        <div className="rates" role="group" aria-label="Velocidade">
          {RATES.map((r) => (
            <button
              key={r}
              className={rate === r ? 'active' : ''}
              onClick={() => setRate(r)}
            >
              {r}×
            </button>
          ))}
        </div>

        <button className="btn small" onClick={() => nudge(-5)}>« 5s</button>
        <button className="btn small" onClick={() => nudge(5)}>5s »</button>

        <div className="ab" role="group" aria-label="Repetição A-B">
          <span>Repetir trecho:</span>
          <button
            className={`chip ${pointA !== null ? 'on' : ''}`}
            onClick={() => setPointA(current)}
            title="Marca o início do trecho"
          >
            A {pointA !== null ? `(${fmt(pointA)})` : ''}
          </button>
          <button
            className={`chip ${pointB !== null ? 'on' : ''}`}
            onClick={() => setPointB(current)}
            title="Marca o fim do trecho"
          >
            B {pointB !== null ? `(${fmt(pointB)})` : ''}
          </button>
          <button
            className={`chip ${loopAB ? 'on' : ''}`}
            disabled={pointA === null || pointB === null}
            onClick={() => setLoopAB((v) => !v)}
          >
            {loopAB ? 'Loop ✓' : 'Loop'}
          </button>
          <button
            className="chip"
            onClick={() => {
              setPointA(null)
              setPointB(null)
              setLoopAB(false)
            }}
          >
            limpar
          </button>
        </div>
      </div>
    </div>
  )
})
