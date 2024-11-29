import type { AnyObj } from '@internal/types'

import { rawType } from '../object/raw-type'

export function isPlainObject(obj: any): obj is AnyObj {
  return rawType(obj) === 'Object'
}
