import type { Plugin } from 'vite'

import fse from 'fs-extra'
import matter from 'gray-matter'

import type { CustomPluginStore } from './interface'

import resolveSource from './resolve-source'
import { loadVirtualModuleContent, resolveVirtualModuleId } from './utils/virtual-module'

export default function loadMarkdown(): Plugin {
  const _store: CustomPluginStore = {
    prefix: 'iuv:',
    uniqueId: 0,
    modules: {},
  }

  return {
    name: 'vite-plugin-load-markdown',
    enforce: 'pre',
    resolveId(id) {
      return resolveVirtualModuleId(id, _store)
    },
    load(id) {
      return loadVirtualModuleContent(id, _store)
    },
    transform(source, id) {
      if (!/\.md$/.test(id)) return

      const { data: meta, content } = matter(source)

      if (!['blog', 'component', 'component-en'].includes(meta.category)) {
        return
      }

      const { sourceCode, watchFiles } = resolveSource(content, id, _store)

      watchFiles
        .filter(file => fse.existsSync(file))
        .forEach((file) => { this.addWatchFile(file) })

      return sourceCode
    },
  }
}
