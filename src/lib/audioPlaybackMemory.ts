const STORAGE_KEY = 'nihongo-br:audio-playback:v1'
const RESUME_REWIND_SECONDS = 2

type PlaybackMap = Record<string, number>

let positions: PlaybackMap = load()

function load(): PlaybackMap {
  try {
    const parsed = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}')
    return parsed && typeof parsed === 'object' ? parsed as PlaybackMap : {}
  } catch {
    return {}
  }
}

function persist() {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions))
  } catch {
    // In-memory continuity still works when session storage is unavailable.
  }
}

export function rememberAudioPosition(src: string, seconds: number) {
  if (!src || !Number.isFinite(seconds) || seconds < 0) return
  positions = { ...positions, [src]: seconds }
  persist()
}

export function getAudioResumeTime(src: string, duration?: number): number {
  const saved = positions[src]
  if (!Number.isFinite(saved) || saved <= 0) return 0
  const upperBound = duration !== undefined && Number.isFinite(duration) && duration > 0
    ? duration
    : saved
  return Math.min(Math.max(0, saved - RESUME_REWIND_SECONDS), upperBound)
}

export function forgetAudioPosition(src: string) {
  if (!(src in positions)) return
  const next = { ...positions }
  delete next[src]
  positions = next
  persist()
}
