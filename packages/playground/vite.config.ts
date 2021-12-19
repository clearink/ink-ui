import { constants } from '@internal/scripts'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: [
      { find: '@comps', replacement: constants.resolveComps('src') },
      { find: '@icons', replacement: constants.resolveIcons('src') },
      { find: '@validator', replacement: constants.resolveValidator('src') },
    ],
  },
})
