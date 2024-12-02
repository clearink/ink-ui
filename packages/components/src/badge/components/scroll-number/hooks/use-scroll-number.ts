import type { WithStyleHelpers } from '@comps/_shared/components'

import { useExactState, useWatchValue2 } from '@comps/_shared/hooks'
import { getClientCoords, nextTick, reflow } from '@internal/utils'
import { useRef } from 'react'

import type { ScrollNumberProps } from '../props'

export default function useScrollNumber<E extends HTMLElement = HTMLDivElement>(props: ScrollNumberProps) {
  const { char } = props

  const $wrapper = useRef<HTMLDivElement>(null)
  const numberItems = useRef(new Map<null | string, HTMLElement | null>())
  const history = useRef<[null | string, string]>([null, char])

  const [showChar, setShowChar] = useExactState(true)

  const updateOffset = (el: WithStyleHelpers<E>, item: HTMLElement) => {
    const wrapperCoords = getClientCoords($wrapper.current!)
    const itemCoords = getClientCoords(item)

    const delta = wrapperCoords.top - itemCoords.top

    el.$set('transform', `translate3d(0, ${delta}px, 0)`)
  }

  const handleEnter = (el: WithStyleHelpers<E>) => {
    const item = numberItems.current.get(history.current[0])

    if (!$wrapper.current || !item) return

    updateOffset(el, item)

    reflow(el)
  }

  const handleEntering = (el: WithStyleHelpers<E>) => {
    const item = numberItems.current.get(history.current[1])

    if (!$wrapper.current || !item) return

    updateOffset(el, item)
  }

  const handleEntered = () => {
    // setShowChar(true)
  }

  const setHistory = (char: string) => {
    history.current = [history.current[1], char]
  }

  const setItem = (key: string, el: HTMLElement | null) => {
    numberItems.current.set(key, el)
  }

  const returnEarly = useWatchValue2(char, () => {
    setHistory(char)
    setShowChar(false)
  })

  return {
    returnEarly,
    $wrapper,
    showChar,
    setItem,
    handleEnter,
    handleEntering,
    handleEntered,
  }
}
