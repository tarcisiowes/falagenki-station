import type { ManifestOptions, VitePWAOptions } from 'vite-plugin-pwa'

export const OFFLINE_MAX_RESOURCE_SIZE_BYTES = 8 * 1024 * 1024
export const offlineGlobPatterns = ['**/*.{js,css,html,ico,svg,webmanifest}']
export const offlineGlobIgnores = ['**/sw.js', '**/workbox-*.js', 'audio/**/*', 'images/**/*']

export const runtimeCaching = [
  {
    urlPattern: /\/audio\/.*\.(?:mp3|m4a|wav)(?:\?.*)?$/i,
    handler: 'CacheFirst' as const,
    options: {
      cacheName: 'study-audio-v1',
      rangeRequests: true,
      cacheableResponse: { statuses: [200] },
      expiration: {
        maxEntries: 120,
        maxAgeSeconds: 60 * 60 * 24 * 90,
        purgeOnQuotaError: true,
      },
    },
  },
  {
    urlPattern: /\/images\/.*\.(?:avif|gif|jpe?g|png|webp|svg)(?:\?.*)?$/i,
    handler: 'CacheFirst' as const,
    options: {
      cacheName: 'study-images-v1',
      cacheableResponse: { statuses: [0, 200] },
      expiration: {
        maxEntries: 200,
        maxAgeSeconds: 60 * 60 * 24 * 90,
        purgeOnQuotaError: true,
      },
    },
  },
]

export const pwaManifest = {
  name: 'falaGENKI no Eki',
  short_name: 'falaGENKI',
  description: 'Plataforma de estudo de japones JLPT, Irodori e Genki para falantes de portugues-BR.',
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
    globIgnores: offlineGlobIgnores,
    maximumFileSizeToCacheInBytes: OFFLINE_MAX_RESOURCE_SIZE_BYTES,
    runtimeCaching,
    navigateFallback: '/index.html',
    cleanupOutdatedCaches: true,
    clientsClaim: true,
    skipWaiting: true,
  },
} satisfies Partial<VitePWAOptions>
