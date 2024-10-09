import { useEvent, useIsomorphicEffect } from '@comps/_shared/hooks'
import {
  batch,
  currFrame,
  fallback,
  getElementStyle,
  isBrowser,
  isNullish,
  makeEventListener,
  makeTimeout,
  nextFrame,
  nextTick,
} from '@internal/utils'

import type { CssTransitionClassNames, CssTransitionProps, TransitionStep, WithStyleHelpers } from '../props'
import type useTransitionStore from './use-transition-store'

import { isAppear, isExit, isRunning } from '../../../_shared/constants'
import runCounter from '../../../_shared/utils/run-counter'
import collectTimeoutInfo from '../utils/collect'
import useFormatTimeouts from './use-format-timeouts'

export default function useTransitionEvent<E extends HTMLElement>(
  props: CssTransitionProps<E>,
  classNames: CssTransitionClassNames,
  states: ReturnType<typeof useTransitionStore<E>>['states'],
  actions: ReturnType<typeof useTransitionStore<E>>['actions'],
) {
  const {
    when,
    type,
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

  const timeouts = useFormatTimeouts(props)

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

    // 防止意外触发 finish 事件
    actions.runFinishCleanup()

    // 回调函数在收尾工作之前调用
    isExit(step) ? onExitCancel?.(el) : onEnterCancel?.(el, isAppear(step))

    actions.cancelTransition(step)
  }

  const runCssListener = (el: WithStyleHelpers<E>, step: TransitionStep) => {
    const resolve = () => { runCssFinish(el, step) }

    const handler = (e: Event) => { e.target === el && runCssFinish(el, step) }

    const collection = getElementStyle(el)

    const transition = collectTimeoutInfo(collection, 'transition')

    const animation = collectTimeoutInfo(collection, 'animation')

    const timeout = timeouts[step]

    if (transition.timeout <= 0 && animation.timeout <= 0)
      return makeTimeout(fallback(timeout, 0)!, resolve)

    if (type === 'transition' && transition.timeout > 0) {
      return batch(
        makeEventListener(el, 'transitionend', runCounter(transition.count, handler)),
        makeTimeout(fallback(timeout, transition.timeout)!, resolve),
      )
    }

    if (type === 'animation' && animation.timeout > 0) {
      return batch(
        makeEventListener(el, 'animationend', runCounter(animation.count, handler)),
        makeTimeout(fallback(timeout, animation.timeout)!, resolve),
      )
    }

    if (transition.timeout > animation.timeout) {
      return batch(
        makeEventListener(el, 'transitionend', runCounter(transition.count, handler)),
        makeTimeout(fallback(timeout, transition.timeout)!, resolve),
      )
    }

    return batch(
      makeEventListener(el, 'animationend', runCounter(animation.count, handler)),
      makeTimeout(fallback(timeout, animation.timeout)!, resolve),
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
    const runTickCleanup = nextTick(() => {
      actions.startTransition(step)

      actions.setFinishCleanup(runManualListener(el, step))
    })

    return () => {
      runTickCleanup()

      // 防止意外触发 finish 事件
      actions.runFinishCleanup()
    }
  }

  const runTransition = useEvent((el: WithStyleHelpers<E>, step: TransitionStep) => {
    return (addEndListener ? runManualTransition : runCssTransition)(el, step)
  })

  // fix react strict mode
  useIsomorphicEffect(() => () => { actions.resetTransition() }, [actions])

  useIsomorphicEffect(() => {
    const { instance, isInitial } = states

    if (isInitial) actions.setIsInitial(false)

    const step = actions.shouldTransition(isInitial, when)

    if (isNullish(step) || !instance) return

    return isBrowser
      ? currFrame(() => runTransition(instance, step))
      : runTransition(instance, step)
  }, [when, states, actions, runTransition])
}
