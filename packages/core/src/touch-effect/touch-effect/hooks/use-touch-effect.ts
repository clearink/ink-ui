import { usePrefixCls, useThrottleFrame } from '@mink-ui/core/_shared/hooks'
import { isBoolean, isFunction } from '@mink-ui/shared'

import type { TouchEffectProps } from '../props'

import { TouchEffectContext } from '../../_shared.context'
import showWaveEffect from '../../utils/show-wave-effect'

export default function useTouchEffect(props: TouchEffectProps) {
  const { component, selector } = props

  const { disabled, showEffect } = TouchEffectContext.useState()

  const prefixCls = usePrefixCls('touch-effect')

  return useThrottleFrame((container: HTMLElement, event: MouseEvent) => {
    if (isBoolean(disabled) && disabled) return

    let target: HTMLElement | null = container

    if (isFunction(selector)) target = selector(container)
    else if (selector) target = container.querySelector(selector)

    const info = { component, container, event, prefixCls, target }

    if (isFunction(disabled) && disabled(info)) return

    showEffect ? showEffect(info) : showWaveEffect(info)
  })
}
