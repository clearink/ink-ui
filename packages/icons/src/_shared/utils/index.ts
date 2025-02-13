import { shallowMerge } from '@mink-ui/shared'

export function withDefaults<V extends Record<string, any>>(source: V, partial: Partial<V>) {
  return shallowMerge(source, partial) as V
}
