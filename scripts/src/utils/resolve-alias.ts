import path from 'node:path'
import slash from 'slash'

import { moduleMatches } from './module-matches'

export interface ResolveAliasOptions {
  filepath: string
  specifier: string
  alias: { find: RegExp | string, replacement: string }[]
  externals: (RegExp | string)[]
}

export function resolveAlias(options: ResolveAliasOptions) {
  const { externals, specifier, alias, filepath } = options

  const isExternal = externals.find(e => moduleMatches(e, specifier))

  if (isExternal) return

  const matched = alias.find(e => moduleMatches(e.find, specifier))

  if (!matched) return

  const { find, replacement } = matched

  let text = slash(path.relative(path.dirname(filepath), replacement))

  if (!text.startsWith('.')) text = `./${text}`

  const re = find instanceof RegExp ? find : new RegExp(`^${find}`)

  return slash(specifier.replace(re, text))
}
