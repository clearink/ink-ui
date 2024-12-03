import { useConstant, useWatchValue2 } from '@comps/_shared/hooks'
import { ZIndexContext } from '@comps/config-provider/_shared/contexts'
import { isUndefined } from '@internal/utils'

import type { OverlayProps } from '../props'

export default function useOverlayLevel(isMounted: boolean, props: OverlayProps) {
  const { isOpen, zIndex } = props

  const { getZIndex } = ZIndexContext.useState()

  const isControlled = !isUndefined(zIndex)

  const level = useConstant(() => ({
    value: isControlled || (!isOpen && !isMounted) ? 0 : getZIndex(),
  }))

  useWatchValue2(isOpen, () => {
    if (isOpen && !isControlled) level.value = getZIndex()
  })

  return isControlled ? zIndex : level.value
}
