import { describe, expect, it } from 'vitest'
import {
  forgetAudioPosition,
  getAudioResumeTime,
  rememberAudioPosition,
} from './audioPlaybackMemory'

describe('audio playback memory', () => {
  it('resumes the same source two seconds before its saved position', () => {
    rememberAudioPosition('/audio/track-a.mp3', 18.5)
    expect(getAudioResumeTime('/audio/track-a.mp3', 60)).toBe(16.5)
  })

  it('does not share progress between different sources', () => {
    rememberAudioPosition('/audio/track-b.mp3', 30)
    expect(getAudioResumeTime('/audio/track-c.mp3', 60)).toBe(0)
  })

  it('never resumes before the start and can forget completed tracks', () => {
    rememberAudioPosition('/audio/short.mp3', 1.25)
    expect(getAudioResumeTime('/audio/short.mp3', 10)).toBe(0)
    forgetAudioPosition('/audio/short.mp3')
    expect(getAudioResumeTime('/audio/short.mp3', 10)).toBe(0)
  })
})
