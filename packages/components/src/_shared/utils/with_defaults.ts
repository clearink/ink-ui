import { shallowMerge } from '@internal/utils'

export function withDefaults<V extends Record<string, any>>(source: V, ...partials: Partial<V>[]) {
  return partials.reduce(shallowMerge, source) as V
}
