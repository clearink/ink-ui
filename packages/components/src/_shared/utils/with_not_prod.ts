import type { AnyFn } from '@internal/types'

import { noop } from '@internal/utils'

const isProd = process.env.NODE_ENV === 'production'

export const withNotProd = isProd ? noop : (callback: AnyFn) => { callback() }
