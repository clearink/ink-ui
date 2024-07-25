import { useEvent } from '@comps/_shared/hooks'
import { batch, getElementStyle, isUndefined, makeEventListener, makeTimeout, nextFrame, nextTick } from '@internal/utils'

import type { CssTransitionProps, TransitionStep, WithStyleHelpers } from '../props'
import type useTransitionStore from './use-transition-store'

import runCounter from '../../../utils/run-counter'
import { isAppear, isExit, isRunning } from '../constants'
import collectTimeoutInfo from '../utils/collect'
import useFormatClassNames from './use-format-class-names'
import useFormatTimeouts from './use-format-timeouts'

export default function useTransitionEvent<E extends HTMLElement>(
  props: CssTransitionProps<E>,
  states: ReturnType<typeof useTransitionStore<E>>['states'],
  actions: ReturnType<typeof useTransitionStore<E>>['actions'],
) {
  const {
    type,
    duration,
    unmountOnExit,
    addEndListener,
    onEnter,
    onEntering,
    onEntered,
    onEnterCancel,
    onExit,
    onExiting,
    onExited,
    onExitCancel,
  } = props

  const timeouts = useFormatTimeouts(duration)

  const classNames = useFormatClassNames(props)

  const runCssFinish = (el: WithStyleHelpers<E>, step: TransitionStep) => {
    actions.finishTransition(step, unmountOnExit)

    const { from, active, to, done } = classNames[step]

    actions.delTransitionClass(el, from, active, to)

    actions.addTransitionClass(el, done)

    // 回调函数在收尾工作结束调用
    isExit(step) ? onExited?.(el) : onEntered?.(el, isAppear(step))
  }

  const runCssCancel = (el: WithStyleHelpers<E>, step: TransitionStep) => {
    if (!isRunning(states.status)) return

    // 回调函数在收尾工作之前调用
    isExit(step) ? onExitCancel?.(el) : onEnterCancel?.(el, isAppear(step))

    actions.cancelTransition(step)

    const { from, active, to } = classNames[step]

    actions.delTransitionClass(el, from, active, to)
  }

  const runCssListener = (el: WithStyleHelpers<E>, step: TransitionStep) => {
    const resolve = () => { runCssFinish(el, step) }

    const handler = (e: Event) => { e.target === el && runCssFinish(el, step) }

    const timeout = timeouts[step]

    if (!isUndefined(timeout)) return makeTimeout(timeout, resolve)

    const collection = getElementStyle(el)

    const transition = collectTimeoutInfo(collection, 'transition')

    const animation = collectTimeoutInfo(collection, 'animation')

    if (transition.timeout <= 0 && animation.timeout <= 0) return makeTimeout(0, resolve)

    if (type === 'transition' && transition.timeout > 0) {
      return batch(
        makeEventListener(el, 'transitionend', runCounter(transition.count, handler)),
        makeTimeout(transition.timeout, resolve),
      )
    }

    if (type === 'animation' && animation.timeout > 0) {
      return batch(
        makeEventListener(el, 'animationend', runCounter(animation.count, handler)),
        makeTimeout(animation.timeout, resolve),
      )
    }

    if (transition.timeout > animation.timeout) {
      return batch(
        makeEventListener(el, 'transitionend', runCounter(transition.count, handler)),
        makeTimeout(transition.timeout, resolve),
      )
    }

    return batch(
      makeEventListener(el, 'animationend', runCounter(animation.count, handler)),
      makeTimeout(animation.timeout, resolve),
    )
  }

  const runCssTransition = (el: WithStyleHelpers<E>, step: TransitionStep) => {
    const { active, from, to } = classNames[step]

    const runTickCleanup = nextTick(() => {
      actions.startTransition(step)

      actions.clearTransitionClass(el)

      actions.addTransitionClass(el, from)

      isExit(step) ? onExit?.(el) : onEnter?.(el, isAppear(step))

      actions.addTransitionClass(el, active)
    })

    const runFrameCleanup = nextFrame(() => {
      actions.delTransitionClass(el, from)

      actions.addTransitionClass(el, to)

      isExit(step) ? onExiting?.(el) : onEntering?.(el, isAppear(step))

      actions.setFinishCleanup(runCssListener(el, step))
    })

    return () => {
      runTickCleanup()

      runFrameCleanup()

      runCssCancel(el, step)
    }
  }

  const runManualFinish = (el: WithStyleHelpers<E>, step: TransitionStep) => {
    actions.finishTransition(step, unmountOnExit)

    isExit(step) ? onExited?.(el) : onEntered?.(el, isAppear(step))
  }

  const runManualListener = (el: WithStyleHelpers<E>, step: TransitionStep) => {
    if (!addEndListener) return

    return addEndListener(el, step, () => { runManualFinish(el, step) })
  }

  const runManualTransition = (el: WithStyleHelpers<E>, step: TransitionStep) => {
    return nextTick(() => {
      actions.startTransition(step)

      actions.setFinishCleanup(runManualListener(el, step))
    })
  }

  const runTransition = useEvent((el: WithStyleHelpers<E>, step: TransitionStep) => {
    return (addEndListener ? runManualTransition : runCssTransition)(el, step)
  })

  return { runTransition }
}
