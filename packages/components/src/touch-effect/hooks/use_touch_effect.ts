import { usePrefixCls, useThrottleFrame } from '@comps/_shared/hooks'
import { isBoolean, isFunction } from '@internal/utils'

import { TouchEffectContext } from '../_shared/context'
import { type TouchEffectProps } from '../props'
import showWaveEffect from '../utils/wave'

export default function useTouchEffect(props: TouchEffectProps) {
  const { component, selector } = props

  const { disabled, showEffect } = TouchEffectContext.useState()

  const prefixCls = usePrefixCls('touch-effect')

  return useThrottleFrame((container: HTMLElement, event: MouseEvent) => {
    if (isBoolean(disabled) && disabled) return

    let target: HTMLElement | null = container

    if (isFunction(selector)) target = selector(container)
    else if (selector) target = container.querySelector(selector)

    const info = { component, event, prefixCls, target }

    if (isFunction(disabled) && disabled(info)) return

    showEffect ? showEffect(info) : showWaveEffect(info)
  })
}
