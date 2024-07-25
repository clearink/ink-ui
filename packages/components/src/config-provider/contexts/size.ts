import { ctxHelper } from '@comps/_shared/utils'

export type SizeType = 'large' | 'middle' | 'small' | undefined

export const SizeContext = ctxHelper<SizeType>(undefined, 'SizeContext')
