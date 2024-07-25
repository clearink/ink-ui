import { ctxHelper } from '@comps/_shared/utils'

export interface ZIndexContextState {
  getZIndex: () => number
}

let baseZIndex = 2000
export const ZIndexContext = ctxHelper<ZIndexContextState>({
  getZIndex: () => baseZIndex++,
}, 'ZIndexContext')
