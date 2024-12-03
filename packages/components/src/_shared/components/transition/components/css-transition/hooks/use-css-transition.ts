import type { VoidFn } from '@internal/types'
import type { CSSProperties } from 'react'

import { useAccessor, useExactState, useWatchValue2 } from '@comps/_shared/hooks'

import type { CssTransitionClassNames, CssTransitionProps, TransitionStatus, TransitionStep, WithStyleHelpers } from '../props'

import { APPEAR, ENTER, ENTERED, EXIT, EXITED, isExited } from '../../../_shared/constants'

export default function useCssTransition<E extends HTMLElement>(
  props: CssTransitionProps<E>,
  classNames: CssTransitionClassNames,
) {
  const { when, appear, mountOnEnter, unmountOnExit } = props

  const finishCleanup = useAccessor<void | VoidFn>(undefined)

  const hasMounted = useAccessor(false)

  const isInitial = useAccessor(true)

  const instance = useAccessor<null | WithStyleHelpers<E>>(null)

  const step = useAccessor<TransitionStep>(() => {
    return when ? appear ? APPEAR : ENTER : EXIT
  })

  const status = useAccessor<TransitionStatus>(() => {
    return !when || appear ? EXITED : ENTERED
  })

  const styled = useAccessor(() => {
    const className = classNames[isExited(status.get()) ? EXIT : ENTER].done

    return {
      className: [className] as (string | undefined)[],
      style: {} as CSSProperties,
    }
  })

  const [isMounted, setIsMounted] = useExactState(() => {
    return when || !(unmountOnExit || mountOnEnter)
  })

  // 监听 unmountOnExit 与 mountOnEnter
  const returnEarly1 = useWatchValue2(`${unmountOnExit}-${mountOnEnter}`, () => {
    if (!isExited(status.get())) return

    const isMounted = !(unmountOnExit || (mountOnEnter && !hasMounted.get()))

    setIsMounted(isMounted)
  })

  // when 变化时需要保证页面处于渲染中,
  const returnEarly2 = useWatchValue2(when, () => { setIsMounted(true) })

  return {
    returnEarly: returnEarly1 || returnEarly2,
    isMounted,
    setIsMounted,
    finishCleanup,
    hasMounted,
    isInitial,
    instance,
    step,
    status,
    styled,
  }
}
