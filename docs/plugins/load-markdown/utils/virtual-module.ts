import type { CustomPluginStore, ExampleItem, SemanticItem } from '../interface'

import transformSource from './transform-source'

export function updateVirtualModules(examples: (ExampleItem | SemanticItem)[], _store: CustomPluginStore) {
  for (let i = 0; i < examples.length; i++) {
    const { sourceCode, moduleId, salt } = examples[i]

    _store.modules[moduleId] = { salt, sourceCode }
  }
}

export function resolveVirtualModuleId(moduleId: string, _store: CustomPluginStore) {
  return moduleId.startsWith(_store.prefix) ? moduleId : undefined
}

export function loadVirtualModuleContent(moduleId: string, _store: CustomPluginStore) {
  if (!moduleId.startsWith(_store.prefix)) return

  const rawId = moduleId.split('?salt=', 1)[0]

  const { sourceCode } = _store.modules[rawId] || {}

  return sourceCode ? transformSource(sourceCode) : undefined
}
