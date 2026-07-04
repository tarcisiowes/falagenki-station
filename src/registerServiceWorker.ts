import { registerSW } from 'virtual:pwa-register'

registerSW({
  immediate: true,
  onRegisterError(error) {
    console.error('Service worker registration failed', error)
  },
})
