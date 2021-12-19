import { ctxHelper } from '@comps/_shared/utils'
import { noop } from '@internal/utils'

export interface InternalToolTipContextState {
  (el: Element | null): () => void
}

// 嵌套时的逻辑
export const InternalToolTipContext = ctxHelper<InternalToolTipContextState>(() => noop)
