import type { CssTransitionRef as CssRef } from '@comps/_shared/components/transition'
import type { VoidFn } from '@internal/types'

import { useConstant, useForceUpdate, useWatchValue } from '@comps/_shared/hooks'
import { useMemo } from 'react'

import type { OverlayProps } from '../props'

export class OverlayState {
  $content = {
    current: null as CssRef | null,
  }

  // 能否挂载元素
  isMounted: boolean

  constructor(props: OverlayProps) {
    this.isMounted = !!props.keepMounted || !!props.isOpen
  }
}

export class OverlayAction {
  get isExited() {
    const instance = this.states.$content.current
    return instance && instance.isExited
  }

  constructor(private forceUpdate: VoidFn, private states: OverlayState) {}

  setIsMounted = (value: boolean) => {
    const shouldUpdate = this.states.isMounted !== value

    if (shouldUpdate) this.forceUpdate()

    this.states.isMounted = value

    return shouldUpdate
  }
}

export default function useOverlayStore(props: OverlayProps) {
  const { keepMounted, isOpen, unmountOnExit } = props

  const update = useForceUpdate()

  const states = useConstant(() => new OverlayState(props))

  const actions = useMemo(() => new OverlayAction(update, states), [update, states])

  // 监听 keepMounted, unmountOnExit
  const returnEarly1 = useWatchValue(`${keepMounted}-${unmountOnExit}`, () => {
    // keepMounted 优先级高于 unmountOnExit
    let isMounted = states.isMounted

    if (keepMounted) isMounted = true
    else if (unmountOnExit && actions.isExited) isMounted = false

    return actions.setIsMounted(isMounted)
  })

  // when 变化时需要保证页面处于渲染中,
  const returnEarly2 = useWatchValue(isOpen, () => actions.setIsMounted(true))

  return { returnEarly: returnEarly1 || returnEarly2, actions, states }
}
