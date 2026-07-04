import { existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  OFFLINE_MAX_RESOURCE_SIZE_BYTES,
  offlineGlobPatterns,
  pwaManifest,
  pwaOptions,
} from '../../pwa.config'

function largestFileBytes(dir: string): number {
  let largest = 0
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      largest = Math.max(largest, largestFileBytes(fullPath))
    } else if (entry.isFile()) {
      largest = Math.max(largest, statSync(fullPath).size)
    }
  }
  return largest
}

describe('offline PWA configuration', () => {
  it('precaches every built resource type including audio', () => {
    expect(offlineGlobPatterns).toContain('**/*')
    expect(pwaOptions.workbox?.globPatterns).toEqual(offlineGlobPatterns)
  })

  it('allows every bundled audio file to be precached', () => {
    const audioDir = join(process.cwd(), 'public', 'audio')
    expect(existsSync(audioDir)).toBe(true)
    expect(OFFLINE_MAX_RESOURCE_SIZE_BYTES).toBeGreaterThanOrEqual(largestFileBytes(audioDir))
  })

  it('defines an installable app manifest', () => {
    expect(pwaManifest.name).toBe('falaGENKI no Eki')
    expect(pwaManifest.start_url).toBe('/')
    expect(pwaManifest.display).toBe('standalone')
    expect(pwaManifest.icons?.length).toBeGreaterThan(0)
  })
})
