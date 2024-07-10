import { useComposeRefs } from '@comps/_shared/hooks'
import { attachDisplayName } from '@comps/_shared/utils'
import { makeEventListener } from '@internal/utils'
import { cloneElement, useEffect, useRef } from 'react'

import type { TouchEffectProps } from './props'

import useTouchEffect from './hooks/use_touch_effect'

// button checkbox radio 等一些组件中点击动效
function TouchEffect(props: TouchEffectProps) {
  const { children, disabled } = props

  const $container = useRef<HTMLElement>(null)

  const showTouchEffect = useTouchEffect(props)

  useEffect(() => {
    const container = $container.current

    if (!container || container.nodeType !== 1 || disabled) return

    const handler = (event) => { showTouchEffect(container, event) }

    return makeEventListener(container, 'click', handler, true)
  }, [showTouchEffect, disabled])

  const ref = useComposeRefs($container, (children as any).ref)

  return cloneElement(children as any, { ref })
}

attachDisplayName(TouchEffect)

export default TouchEffect
