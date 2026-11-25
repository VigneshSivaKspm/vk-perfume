import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { chatApi } from './server/vitePlugin.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Not prefixed with VITE_, so these values stay on the server and out of the browser bundle.
  const env = loadEnv(mode, process.cwd(), 'GROQ_')

  return {
    plugins: [react(), chatApi({ apiKey: env.GROQ_API_KEY, model: env.GROQ_MODEL })],
  }
})
