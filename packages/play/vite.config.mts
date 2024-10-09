import { constants } from '@internal/scripts'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({ emitErrorAsWarning: true, cacheLocation: './node_modules/.cache/.eslintcache' }),
  ],
  resolve: {
    alias: [
      { find: '@comps', replacement: constants.resolveComps('src') },
      { find: '@icons', replacement: constants.resolveIcons('src') },
      { find: '@emator', replacement: constants.resolveEmator('src') },
    ],
  },
})
