import type { MayBe } from '@internal/types'

import { type GetTargetElement, getTargetElement } from '@comps/_shared/utils'
import { observe } from '@internal/utils'
import { useEffect } from 'react'

import { useEvent } from '../use-event'
import { useExactState } from '../use-exact-state'

export function useResizeObserver<T extends Element>(
  target: GetTargetElement<T>,
  handler: (el: Element) => void,
) {
  const callback = useEvent(handler)

  const [el, set] = useExactState<MayBe<T>>(() => getTargetElement(target))

  useEffect(() => { set(getTargetElement(target)) }, [target])

  useEffect(() => (el ? observe(el, callback) : undefined), [el, callback])
}
