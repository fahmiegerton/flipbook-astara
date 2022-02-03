import { defineConfig } from 'vite'
const { createVuePlugin } = require('vite-plugin-vue2');
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'Menu Astara Hotel',
      short_name: 'Menu Astara H',
      description: 'Menu untuk Astara Hotel',
      theme_color: '#334155',
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ]
    }
  })],
})
