import { describe, expect, it } from 'vitest'
import {
  OFFLINE_MAX_RESOURCE_SIZE_BYTES,
  offlineGlobIgnores,
  offlineGlobPatterns,
  pwaManifest,
  pwaOptions,
  runtimeCaching,
} from '../../pwa.config'

describe('offline PWA configuration', () => {
  it('precaches the app shell without forcing large study media downloads', () => {
    expect(offlineGlobPatterns).toContain('**/*.{js,css,html,ico,svg,webmanifest}')
    expect(offlineGlobIgnores).toContain('audio/**/*')
    expect(offlineGlobIgnores).toContain('images/**/*')
    expect(pwaOptions.workbox?.globPatterns).toEqual(offlineGlobPatterns)
    expect(pwaOptions.workbox?.globIgnores).toEqual(offlineGlobIgnores)
    expect(OFFLINE_MAX_RESOURCE_SIZE_BYTES).toBe(8 * 1024 * 1024)
  })

  it('handles audio byte ranges without caching partial responses as complete files', () => {
    const audioRule = runtimeCaching.find((rule) => rule.options.cacheName === 'study-audio-v1')
    expect(audioRule?.handler).toBe('CacheFirst')
    expect(audioRule?.options.rangeRequests).toBe(true)
    expect(audioRule?.options.cacheableResponse.statuses).toEqual([200])
    expect(audioRule?.options.expiration.maxEntries).toBe(120)
    expect(pwaOptions.workbox?.runtimeCaching).toEqual(runtimeCaching)
  })

  it('defines an installable app manifest', () => {
    expect(pwaManifest.name).toBe('falaGENKI no Eki')
    expect(pwaManifest.start_url).toBe('/')
    expect(pwaManifest.display).toBe('standalone')
    expect(pwaManifest.icons?.length).toBeGreaterThan(0)
  })
})
