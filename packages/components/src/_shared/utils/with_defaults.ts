import { isObject, shallowMerge } from '@internal/utils'

export function withDefaults<V extends Record<string, any>>(source: V, partial: Partial<V>) {
  return shallowMerge(source, partial) as V
}

export function shallowMerges<V extends Record<string, any>>(source: V, ...partials: any[]) {
  return partials.filter(isObject).reduce(shallowMerge, source) as V
}
