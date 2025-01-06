import { ZIndexContext } from '@comps/config-provider/_shared.context'
import { isUndefined } from '@internal/utils'

import { useExactState } from '../use-exact-state'
import { useWatchValue } from '../use-watch-value'

export function useZIndex(enable: boolean, state?: number) {
  const isControlled = !isUndefined(state)

  const { getZIndex } = ZIndexContext.useState()

  const [zIndex, setZIndex] = useExactState(() => isControlled || !enable ? 0 : getZIndex())

  const returnEarly = useWatchValue(enable, () => { enable && !isControlled && setZIndex(getZIndex()) })

  return [returnEarly, isControlled ? state : zIndex] as const
}
