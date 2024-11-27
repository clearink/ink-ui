import type { AnyFn } from '@internal/types'

export function isFunction(obj: any): obj is AnyFn {
  return typeof obj === 'function'
}
