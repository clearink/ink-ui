import { constants } from '@internal/scripts'
import eslint from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({ eslintOptions: { cache: false } }),
    // 解析 md 文件从而生成文档
  ],
  resolve: {
    alias: [
      { find: '@comps', replacement: constants.resolveComps('src') },
      { find: '@icons', replacement: constants.resolveIcons('src') },
      { find: '@validator', replacement: constants.resolveValidator('src') },
      { find: '@', replacement: constants.resolveRoot('packages', 'site', 'src') },
    ],
  },
})
