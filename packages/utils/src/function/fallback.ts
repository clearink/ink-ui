import type { MayBe } from '@internal/types'

import { isNullish, isUndefined } from '../is'

export function fallback<T>(a: T | undefined, ...fallbacks: T[]) {
  return isUndefined(a) ? fallbacks.find(e => !isUndefined(e)) : a
}

export function coalesce<T>(a: MayBe<T>, ...fallbacks: T[]) {
  return isNullish(a) ? fallbacks.find(e => !isNullish(e)) : a
}
