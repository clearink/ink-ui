import { type MayBe } from '@internal/types'
import { shallowMerge } from '@internal/utils'

export function withDefaults<V extends Record<string, any>>(source: V, partial: Partial<V>) {
  return shallowMerge(source, partial) as V
}

export function cls(...args: MayBe<boolean | string>[]) {
  return args.filter(Boolean).join(' ') || undefined
}
