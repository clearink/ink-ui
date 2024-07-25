import type { ForwardedRef } from 'react'

import { attachDisplayName, cls, fillRef } from '@comps/_shared/utils'
import { isNullish } from '@internal/utils'
import { cloneElement, forwardRef, useEffect } from 'react'

import type { CssTransitionProps, CssTransitionRef } from './props'

import useFormatClassNames from './hooks/use-format-class-names'
import useTransitionEvent from './hooks/use-transition-event'
import useTransitionExpose from './hooks/use-transition-expose'
import useTransitionStore from './hooks/use-transition-store'
import attachCustomHelpers from './utils/attach'

function _CssTransition<E extends HTMLElement>(
  props: CssTransitionProps<E>,
  ref: ForwardedRef<CssTransitionRef<E>>,
) {
  const { when, children } = props

  const classNames = useFormatClassNames(props)

  const { returnEarly, actions, states } = useTransitionStore<E>(props, classNames)

  useTransitionExpose(ref, states)

  const { runTransition } = useTransitionEvent(props, states, actions)

  useEffect(() => {
    const { instance: el, isInitial } = states

    if (isInitial) actions.setIsInitial(false)

    const step = el && actions.shouldTransition(isInitial, when)

    if (!isNullish(step)) return runTransition(el!, step)
  }, [runTransition, when, states, actions])

  if (returnEarly || !states.isMounted) return null

  return cloneElement(children, {
    ref: (dom: E | null) => {
      const el = attachCustomHelpers(dom, states.additional)

      fillRef(el, (children as any).ref)

      actions.setInstance(el)

      el && actions.markHasMounted()
    },
    className: cls(children.props.className, states.classNames),
    style: { ...children.props.style, ...states.additional },
  })
}

attachDisplayName(_CssTransition)

const CssTransition = forwardRef(_CssTransition) as <E extends HTMLElement>(
  props: CssTransitionProps<E> & React.RefAttributes<CssTransitionRef<E>>,
) => JSX.Element | null

export default CssTransition
