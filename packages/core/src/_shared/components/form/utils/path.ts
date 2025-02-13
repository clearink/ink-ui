import { rawType, toArray } from '@mink-ui/shared'

import type { ExternalNamePath } from '../_shared.props'

export function _getName(namePath?: ExternalNamePath) {
  return toArray(namePath).reduce<string>((str, path) => {
    return `${str}_${rawType(path)}:${path}`
  }, '')
}

export function isValidIndex(array: any[], ...positions: number[]) {
  const len = array.length
  return positions.every(position => position < len && position >= 0)
}
