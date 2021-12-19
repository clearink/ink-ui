import { ctxHelper } from '@comps/_shared/utils'

export type DisabledType = false | true | undefined

export const DisabledContext = ctxHelper<DisabledType>(undefined)
