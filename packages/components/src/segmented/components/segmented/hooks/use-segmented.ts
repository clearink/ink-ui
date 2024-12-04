import type { WithStyleHelpers } from '@comps/_shared/components'

import { useConstant, useExactState, useWatchValue } from '@comps/_shared/hooks'
import { getClientCoords, reflow } from '@internal/utils'

import type { SegmentedType } from '../props'

class SegmentedRefs {
  $group = { current: null as HTMLDivElement | null }

  $thumb = { current: null as HTMLDivElement | null }

  items = new Map<null | SegmentedType, HTMLElement | null>()

  inTransition = false

  get group() {
    return this.$group.current
  }

  get thumb() {
    return this.$thumb.current
  }
}

export default function useSegmented<E extends HTMLElement = HTMLElement>(
  active: SegmentedType,
) {
  const refs = useConstant(() => new SegmentedRefs())

  const [history, setHistory] = useExactState<(null | SegmentedType)[]>([null, active])

  const [showThumb, setShowThumb] = useExactState(false)

  const updateThumbStyles = (el: WithStyleHelpers<HTMLElement>, itemCoords: DOMRect) => {
    const groupCoords = getClientCoords(refs.group!)

    const delta = itemCoords.left - groupCoords.left

    el.$set('transform', `translate3d(${delta}px, 0, 0)`)

    el.$set('width', `${itemCoords.width}px`)
  }

  const keepThumbStyles = () => {
    if (!refs.thumb || !refs.inTransition) return

    const target = refs.items.get(active)

    if (!target || !refs.group) return

    updateThumbStyles(refs.thumb as any, getClientCoords(target))
  }

  const handleEnter = (el: WithStyleHelpers<E>) => {
    const from = refs.items.get(history[0])

    if (!from || !refs.group) return

    refs.inTransition = true

    updateThumbStyles(el, getClientCoords(from))

    reflow(el)
  }

  const handleEntering = (el: WithStyleHelpers<E>) => {
    const target = refs.items.get(history[1])

    if (!target || !refs.group) return

    updateThumbStyles(el, getClientCoords(target))
  }

  const handleEntered = (el: WithStyleHelpers<E>) => {
    refs.inTransition = false

    el.$remove('transform')

    el.$remove('width')

    setShowThumb(false)
  }

  const returnEarly = useWatchValue(active, () => {
    setHistory([history[1], active])

    setShowThumb(true)

    keepThumbStyles()
  })

  return {
    returnEarly,
    refs,
    showThumb,
    handleEnter,
    handleEntering,
    handleEntered,
  }
}
