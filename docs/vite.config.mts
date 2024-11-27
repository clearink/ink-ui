import { constants } from '@internal/scripts'
import react from '@vitejs/plugin-react'
// import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint2'

import emitWatches from './plugins/emit-watches'
import loadMarkdown from './plugins/load-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      cacheLocation: './node_modules/.cache/.eslintcache',
      emitErrorAsWarning: true,
    }),
    // visualizer({ gzipSize: true, brotliSize: true, open: true }),
    loadMarkdown(),
    emitWatches({
      groups: ['./src/pages/**/*.md', '../packages/components/src/**/*.md'],
      output: './src/routes/routes.config.tsx',
    }),
  ],
  resolve: {
    alias: [
      { find: '@shared', replacement: constants.resolveSrc('./_shared') },
      { find: '@features', replacement: constants.resolveSrc('./features') },
      { find: '@hooks', replacement: constants.resolveSrc('./hooks') },
      { find: '@libs', replacement: constants.resolveSrc('./libs') },
      { find: '@pages', replacement: constants.resolveSrc('./pages') },
      { find: '@routes', replacement: constants.resolveSrc('./routes') },

      /** others */
      { find: /^@ink-ui\/core(\/(esm|lib)?)?/, replacement: constants.resolveComps('./src') },
      { find: /^@ink-ui\/icons(\/(esm|lib)?)?/, replacement: constants.resolveIcons('./src') },
      { find: /^@ink-ui\/emator(\/(esm|lib)?)?/, replacement: constants.resolveEmator('./src') },
      { find: '@comps', replacement: constants.resolveComps('./src') },
      { find: '@icons', replacement: constants.resolveIcons('./src') },
      { find: '@emator', replacement: constants.resolveEmator('./src') },
    ],
  },
  base: './',
})
