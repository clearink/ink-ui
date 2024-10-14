import type { ForwardedRef } from 'react'

import { attachDisplayName, cls, fillRef } from '@comps/_shared/utils'
import { isFunction } from '@internal/utils'
import { cloneElement, forwardRef } from 'react'

import type { CssTransitionProps, CssTransitionRef } from './props'

import useFormatClassNames from './hooks/use-format-class-names'
import useTransitionExpose from './hooks/use-transition-expose'
import useTransitionScheduler from './hooks/use-transition-scheduler'
import useTransitionStore from './hooks/use-transition-store'
import attachHelpers from './utils/attach'

function _CssTransition<E extends HTMLElement>(
  props: CssTransitionProps<E>,
  ref: ForwardedRef<CssTransitionRef<E>>,
) {
  const { children } = props

  const classNames = useFormatClassNames(props)

  const { returnEarly, actions, states } = useTransitionStore<E>(props, classNames)

  useTransitionExpose(ref, states)

  useTransitionScheduler(props, classNames, states, actions)

  if (returnEarly || !states.isMounted) return null

  const refCallback = (dom: E | null) => {
    const el = attachHelpers(dom, states.additional)

    fillRef(el, (children as any).ref)

    actions.setInstance(el)

    el && actions.markHasMounted()
  }

  return isFunction(children)
    ? children(refCallback, {
      className: cls(states.classNames),
      style: { ...states.additional },
    })
    : cloneElement(children, {
      ref: refCallback,
      className: cls(children.props.className, states.classNames),
      style: { ...children.props.style, ...states.additional },
    })
}

attachDisplayName(_CssTransition)

const CssTransition = forwardRef(_CssTransition) as <E extends HTMLElement>(
  props: CssTransitionProps<E> & React.RefAttributes<CssTransitionRef<E>>,
) => JSX.Element | null

export default CssTransition
