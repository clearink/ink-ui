import type { MayBe } from '@internal/types'

import { type GetTargetElement, getTargetElement } from '@comps/_shared/utils'
import { observe } from '@internal/utils'
import { useEffect, useState } from 'react'

import { useEvent } from '../use-event'

export function useResizeObserver<T extends Element>(
  target: GetTargetElement<T>,
  handler: (el: Element) => void,
) {
  const callback = useEvent(handler)

  const [el, set] = useState<MayBe<T>>(null)

  useEffect(() => { set(getTargetElement(target)) }, [target])

  useEffect(() => (el ? observe(el, callback) : undefined), [el, callback])
}
