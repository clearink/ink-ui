import type { WithStyleHelpers } from '@comps/_shared/components'

import { useExactState, useWatchValue2 } from '@comps/_shared/hooks'
import { getClientCoords, reflow } from '@internal/utils'
import { useRef } from 'react'

import type { SegmentedType } from '../props'

export default function useSegmented<E extends HTMLElement = HTMLElement>(
  active: SegmentedType,
) {
  const $group = useRef<HTMLDivElement>(null)
  const $thumb = useRef<HTMLDivElement>(null)
  const items = useRef(new Map<null | SegmentedType, HTMLElement | null>())
  const history = useRef<[null | SegmentedType, null | SegmentedType]>([null, active])
  const inTransition = useRef(false)

  const [showThumb, setShowThumb] = useExactState(false)

  const updateThumbStyles = (el: WithStyleHelpers<HTMLElement>, itemCoords: DOMRect) => {
    const groupCoords = getClientCoords($group.current!)

    const delta = itemCoords.left - groupCoords.left

    el.$set('transform', `translate3d(${delta}px, 0, 0)`)

    el.$set('width', `${itemCoords.width}px`)
  }

  const handleEnter = (el: WithStyleHelpers<E>) => {
    const from = items.current.get(history.current[0])

    if (!from || !$group.current) return

    inTransition.current = true

    updateThumbStyles(el, getClientCoords(from))

    reflow(el)
  }

  const handleEntering = (el: WithStyleHelpers<E>) => {
    const target = items.current.get(history.current[1])

    if (!target || !$group.current) return

    updateThumbStyles(el, getClientCoords(target))
  }

  const handleEntered = (el: WithStyleHelpers<E>) => {
    inTransition.current = false

    el.$remove('transform')

    el.$remove('width')

    setShowThumb(false)
  }

  const setItem = (value: SegmentedType, el: HTMLElement | null) => {
    el ? items.current.set(value, el) : items.current.delete(value)
  }

  const returnEarly = useWatchValue2(active, () => {
    history.current = [history.current[1], active]

    setShowThumb(true)

    if ($thumb.current && inTransition.current) {
      handleEntering($thumb.current as any)
    }
  })

  return {
    returnEarly,
    $group,
    $thumb,
    showThumb,
    setItem,
    handleEnter,
    handleEntering,
    handleEntered,
  }
}
