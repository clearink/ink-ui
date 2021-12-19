import { useComposeRefs } from '@comps/_shared/hooks'
import { withDisplayName } from '@comps/_shared/utils'
import { makeEventListener } from '@internal/utils'
import { cloneElement, useEffect, useRef } from 'react'

import useTouchEffect from './hooks/use_touch_effect'
import { type TouchEffectProps } from './props'

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

export default withDisplayName(TouchEffect)
