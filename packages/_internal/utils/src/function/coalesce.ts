import type { MayBe } from '@internal/types'

import { isNullish } from '../is/is-nullish'

export function coalesce<T>(a: MayBe<T>, ...fallbacks: T[]) {
  return isNullish(a) ? fallbacks.find(e => !isNullish(e)) : a
}
