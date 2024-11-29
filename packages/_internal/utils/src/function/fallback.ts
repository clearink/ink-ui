import { isUndefined } from '../is/is-undefined'

export function fallback<T>(a: T | undefined, ...fallbacks: T[]) {
  return isUndefined(a) ? fallbacks.find(e => !isUndefined(e)) : a
}
