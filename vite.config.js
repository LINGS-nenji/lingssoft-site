import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lingssoft-site/',
  server: {
    port: 5173,
  },
  build: {
    outDir: 'build-vite'
  }
})
