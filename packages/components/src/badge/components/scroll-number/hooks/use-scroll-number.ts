import { useConstant, useExactState, useWatchValue } from '@comps/_shared/hooks'
import { getClientCoords, reflow } from '@internal/utils'

import type { ScrollNumberProps } from '../props'

class ScrollNumberRefs {
  $wrapper = { current: null as HTMLDivElement | null }

  items = new Map<null | string, HTMLElement | null>()

  get wrapper() {
    return this.$wrapper.current
  }
}

export default function useScrollNumber<E extends HTMLElement = HTMLDivElement>(props: ScrollNumberProps) {
  const { char } = props

  const refs = useConstant(() => new ScrollNumberRefs())

  const [history, setHistory] = useExactState<(null | string)[]>([null, char])

  const [showChar, setShowChar] = useExactState(true)

  const updateOffset = (el: E, item: HTMLElement) => {
    const wrapCoords = getClientCoords(refs.wrapper!)
    const itemCoords = getClientCoords(item)

    const delta = wrapCoords.top - itemCoords.top

    el.style.setProperty('transform', `translate3d(0, ${delta}px, 0)`)
  }

  const handleEnter = (el: E) => {
    const item = refs.items.get(history[0])

    if (!refs.wrapper || !item) return

    updateOffset(el, item)

    reflow(el)
  }

  const handleEntering = (el: E) => {
    const item = refs.items.get(history[1])

    if (!refs.wrapper || !item) return

    updateOffset(el, item)
  }

  const handleEntered = () => {
    setShowChar(true)
  }

  const returnEarly = useWatchValue(char, () => {
    setHistory([history[1], char])

    setShowChar(false)
  })

  return {
    returnEarly,
    refs,
    showChar,
    handleEnter,
    handleEntering,
    handleEntered,
  }
}
