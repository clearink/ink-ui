import type { AnyObj } from '@internal/types'

export function isObject(obj: any): obj is AnyObj {
  return obj != null && typeof obj === 'object'
}
