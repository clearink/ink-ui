import { ctxHelper } from '@comps/_shared/utils'

import type { TouchEffectInfo } from './props'

export interface TouchEffectState {
  disabled?: ((info: TouchEffectInfo) => boolean) | boolean
  showEffect?: (info: TouchEffectInfo) => void
}

export const TouchEffectContext = ctxHelper<TouchEffectState>({}, 'TouchEffectContext')
