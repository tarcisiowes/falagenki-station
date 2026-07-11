import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Check, FastForward, Pause, Play, Rewind } from 'lucide-react'

export interface AudioPlayerHandle {
  seekTo: (seconds: number) => void
  play: () => void
}

interface Props {
  src: string
  title: string
  compact?: boolean
}

const RATES = [0.5, 0.75, 1, 1.25, 1.5]

function fmt(t: number): string {
  if (!isFinite(t)) return '0:00'
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export const AudioPlayer = forwardRef<AudioPlayerHandle, Props>(function AudioPlayer(
  { src, title, compact = false },
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
  const [loadError, setLoadError] = useState(false)
  const validLoop = pointA !== null && pointB !== null && pointA < pointB

  useImperativeHandle(ref, () => ({
    seekTo(seconds: number) {
      const a = audioRef.current
      if (!a) return
      a.currentTime = seconds
      setCurrent(seconds)
    },
    play() {
      const audio = audioRef.current
      if (audio) void audio.play().catch(() => setLoadError(true))
    },
  }))

  useEffect(() => {
    const a = audioRef.current
    if (a) a.playbackRate = rate
  }, [rate])

  useEffect(() => {
    setPlaying(false)
    setCurrent(0)
    setDuration(0)
    setPointA(null)
    setPointB(null)
    setLoopAB(false)
    setLoadError(false)
  }, [src])

  function onTime() {
    const a = audioRef.current
    if (!a) return
    setCurrent(a.currentTime)
    if (loopAB && pointA !== null && pointB !== null && pointA < pointB && a.currentTime >= pointB) {
      a.currentTime = pointA
    }
  }

  function toggle() {
    const a = audioRef.current
    if (!a) return
    if (a.paused) void a.play().catch(() => setLoadError(true))
    else a.pause()
  }

  function nudge(delta: number) {
    const a = audioRef.current
    if (!a) return
    a.currentTime = Math.min(Math.max(0, a.currentTime + delta), duration || a.duration || 0)
  }

  const advancedControls = (
    <div className="row2">
      <div className="rates" role="group" aria-label="Velocidade">
        {RATES.map((r) => (
          <button
            key={r}
            className={rate === r ? 'active' : ''}
            type="button"
            aria-pressed={rate === r}
            onClick={() => setRate(r)}
          >
            {r}×
          </button>
        ))}
      </div>

      <button className="btn small" type="button" onClick={() => nudge(-5)}><Rewind size={14} /> 5s</button>
      <button className="btn small" type="button" onClick={() => nudge(5)}>5s <FastForward size={14} /></button>

      <div className="ab" role="group" aria-label="Repetição A-B">
        <span>Repetir trecho:</span>
        <button
          className={`chip ${pointA !== null ? 'on' : ''}`}
          type="button"
          aria-pressed={pointA !== null}
          onClick={() => {
            setPointA(current)
            if (pointB !== null && current >= pointB) {
              setPointB(null)
              setLoopAB(false)
            }
          }}
          title="Marca o início do trecho"
        >
          A {pointA !== null ? `(${fmt(pointA)})` : ''}
        </button>
        <button
          className={`chip ${pointB !== null ? 'on' : ''}`}
          type="button"
          aria-pressed={pointB !== null}
          onClick={() => {
            setPointB(current)
            if (pointA !== null && current <= pointA) setLoopAB(false)
          }}
          title="Marca o fim do trecho"
        >
          B {pointB !== null ? `(${fmt(pointB)})` : ''}
        </button>
        <button
          className={`chip ${loopAB ? 'on' : ''}`}
          type="button"
          aria-pressed={loopAB}
          disabled={!validLoop}
          onClick={() => setLoopAB((value) => !value)}
        >
          {loopAB ? <>Loop <Check size={13} /></> : 'Loop'}
        </button>
        <button
          className="chip"
          type="button"
          onClick={() => {
            setPointA(null)
            setPointB(null)
            setLoopAB(false)
          }}
        >
          limpar
        </button>
        {pointA !== null && pointB !== null && !validLoop && (
          <span className="audio-loop-warning" role="status">Marque B depois de A.</span>
        )}
      </div>
    </div>
  )

  return (
    <div className={`card player${compact ? ' compact' : ''}`}>
      <audio
        ref={audioRef}
        src={src}
        crossOrigin="anonymous"
        preload="metadata"
        onLoadedMetadata={(e) => {
          setDuration(e.currentTarget.duration)
          setLoadError(false)
        }}
        onCanPlay={() => setLoadError(false)}
        onError={() => setLoadError(true)}
        onTimeUpdate={onTime}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      <div className="top">
        <button className="pp" type="button" onClick={toggle} aria-label={playing ? 'Pausar' : 'Tocar'}>
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <div className="seek">
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{title}</div>
          <input
            type="range"
            min={0}
            max={duration || Math.max(current, 0)}
            step={0.1}
            value={current}
            aria-label={`Posição de reprodução: ${title}`}
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

      {loadError && (
        <div className="audio-player-error" role="alert">
          <span>Não foi possível carregar esta faixa.</span>
          <button
            className="btn small"
            type="button"
            onClick={() => {
              setLoadError(false)
              audioRef.current?.load()
            }}
          >
            Tentar novamente
          </button>
        </div>
      )}

      {compact ? (
        <details className="player-advanced">
          <summary>Ajustar velocidade e repetir trecho</summary>
          {advancedControls}
        </details>
      ) : advancedControls}
    </div>
  )
})
