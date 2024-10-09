import type { CustomPluginStore } from '../interface'

export default function formatSalt(
  sourceCode: string,
  moduleId: string,
  _store: CustomPluginStore,
) {
  const cache = _store.modules[moduleId]

  const shouldUpdate = !cache || cache.sourceCode !== sourceCode

  return shouldUpdate ? `${_store.uniqueId++}` : cache.salt
}
