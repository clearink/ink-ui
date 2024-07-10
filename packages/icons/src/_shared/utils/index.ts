import { shallowMerge } from '@internal/utils'

export function withDefaults<V extends Record<string, any>>(source: V, partial: Partial<V>) {
  return shallowMerge(source, partial) as V
}
