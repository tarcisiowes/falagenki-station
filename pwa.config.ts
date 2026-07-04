import type { ManifestOptions, VitePWAOptions } from 'vite-plugin-pwa'

export const OFFLINE_MAX_RESOURCE_SIZE_BYTES = 50 * 1024 * 1024
export const offlineGlobPatterns = ['**/*']

export const pwaManifest = {
  name: 'falaGENKI no Eki',
  short_name: 'falaGENKI',
  description: 'Plataforma de estudo de japones JLPT e Irodori para falantes de portugues-BR.',
  lang: 'pt-BR',
  start_url: '/',
  scope: '/',
  display: 'standalone',
  background_color: '#fbf7ef',
  theme_color: '#f97316',
  icons: [
    {
      src: '/favicon.svg',
      sizes: 'any',
      type: 'image/svg+xml',
      purpose: 'any maskable',
    },
  ],
} satisfies Partial<ManifestOptions>

export const pwaOptions = {
  registerType: 'autoUpdate',
  includeAssets: ['favicon.svg'],
  manifest: pwaManifest,
  workbox: {
    globPatterns: offlineGlobPatterns,
    globIgnores: ['**/sw.js', '**/workbox-*.js'],
    maximumFileSizeToCacheInBytes: OFFLINE_MAX_RESOURCE_SIZE_BYTES,
    navigateFallback: '/index.html',
    cleanupOutdatedCaches: true,
    clientsClaim: true,
    skipWaiting: true,
  },
} satisfies Partial<VitePWAOptions>
