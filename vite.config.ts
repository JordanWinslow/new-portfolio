import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart({ target: 'netlify' }),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 3000,
  },
  assetsInclude: ['**/*.splinecode'],
})
