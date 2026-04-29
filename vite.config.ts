import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Parche y Leña Menu',
        short_name: 'Parche y Leña',
        description: 'Menú digital con pedidos por WhatsApp',
        theme_color: '#f8f404',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        id:"/",
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})