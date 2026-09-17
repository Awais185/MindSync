import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true, // allows access from network (needed for ngrok)
    allowedHosts: [
      'ungrowling-ardis-ungenuinely.ngrok-free.dev',
      '.ngrok-free.dev',   // allows ANY ngrok-free.dev subdomain
      '.ngrok.io',         // allows legacy ngrok domains
      'localhost',
    ],
  },
})