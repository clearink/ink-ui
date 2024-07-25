import type { VoidFn } from '@internal/types'

import { useConstant, useForceUpdate, useWatchValue } from '@comps/_shared/hooks'
import { addClassNames, delClassNames } from '@internal/utils'
import { useEffect, useMemo } from 'react'

import type { CssTransitionClassNames, CssTransitionProps, TransitionStatus, TransitionStep, WithStyleHelpers } from '../props'

import { APPEAR, ENTER, ENTERED, ENTERING, EXIT, EXITED, EXITING, isEntered, isExit, isExited } from '../constants'

export class TransitionState<E extends HTMLElement> {
  // 清理函数(定时器, DOM事件)
  finishCleanup: VoidFn | void = undefined

  // 是否挂载过,处理mountOnEnter逻辑
  hasMounted = false

  // 元素实例
  instance: WithStyleHelpers<E> | null = null

  // 决定能否执行appear逻辑
  isInitial = true

  // 处理 unmountOnExit 逻辑
  isMounted = false

  // 过渡步骤 appear enter exit
  step: TransitionStep

  // 过渡 状态 entering entered exiting exited
  status: TransitionStatus

  classNames: (string | undefined)[]

  additional: Record<string, null | string> = {}

  constructor(props: CssTransitionProps<E>, classNames: CssTransitionClassNames) {
    const { appear, mountOnEnter, unmountOnExit, when } = props

    this.isMounted = when || !(unmountOnExit || mountOnEnter)

    this.status = !when || appear ? EXITED : ENTERED

    this.step = when ? appear ? APPEAR : ENTER : EXIT

    this.classNames = [classNames[isExited(this.status) ? EXIT : ENTER].done]
  }
}

export class TransitionAction<E extends HTMLElement> {
  constructor(private forceUpdate: VoidFn, private states: TransitionState<E>) {}

  setFinishCleanup = (value?: VoidFn | void) => {
    this.states.finishCleanup = value
  }

  runFinishCleanup = () => {
    this.states.finishCleanup?.()

    this.states.finishCleanup = undefined
  }

  setInstance = (value: WithStyleHelpers<E> | null) => {
    this.states.instance = value
  }

  setIsInitial = (value: boolean) => {
    this.states.isInitial = value
  }

  setIsMounted = (value: boolean) => {
    const shouldUpdate = this.states.isMounted !== value

    if (shouldUpdate) this.forceUpdate()

    this.states.isMounted = value

    return shouldUpdate
  }

  markHasMounted = () => {
    this.states.hasMounted = true
  }

  updateStatus = (value: TransitionStatus) => {
    this.states.status = value
  }

  updateStep = (value: TransitionStep) => {
    this.states.step = value
  }

  addTransitionClass = (el: E, ...classNames: (string | undefined)[]) => {
    addClassNames(el, ...classNames)

    this.states.classNames = this.states.classNames.concat(classNames)
  }

  delTransitionClass = (el: E, ...classNames: (string | undefined)[]) => {
    delClassNames(el, ...classNames)

    const set = new Set(classNames)

    this.states.classNames = this.states.classNames.filter(e => !set.has(e))
  }

  clearTransitionClass = (el: E) => {
    delClassNames(el, ...this.states.classNames)

    this.states.classNames = []
  }

  shouldTransition = (isInitial: boolean, when: boolean | undefined) => {
    const { status } = this.states

    // 可以执行 before appear
    if (isInitial && when && isExited(status)) return APPEAR

    // 可以执行 before enter
    if (!isInitial && when && isExited(status)) return ENTER

    // 可以执行 before exit
    if (!isInitial && !when && isEntered(status)) return EXIT
  }

  startTransition = (step: TransitionStep) => {
    this.updateStep(step)

    this.updateStatus(isExit(step) ? EXITING : ENTERING)
  }

  cancelTransition = (step: TransitionStep) => {
    this.runFinishCleanup()

    this.updateStep(isExit(step) ? ENTER : EXIT)

    this.updateStatus(isExit(step) ? EXITED : ENTERED)
  }

  finishTransition = (step: TransitionStep, unmounted: boolean | undefined) => {
    this.runFinishCleanup()

    this.setIsMounted(!(unmounted && isExit(step)))

    this.updateStatus(isExit(step) ? EXITED : ENTERED)

    // 结束时一般会移除附加的样式,这里触发一次视图渲染
    this.forceUpdate()
  }
}

export default function useTransitionStore<E extends HTMLElement>(
  props: CssTransitionProps<E>,
  classNames: CssTransitionClassNames,
) {
  const { mountOnEnter, unmountOnExit, when } = props

  const update = useForceUpdate()

  const states = useConstant(() => new TransitionState<E>(props, classNames))

  const actions = useMemo(() => new TransitionAction<E>(update, states), [states, update])

  // fix react strict mode
  useEffect(() => () => { actions.setIsInitial(true) }, [actions])

  // 监听 unmountOnExit 与 mountOnEnter
  const returnEarly1 = useWatchValue(`${unmountOnExit}-${mountOnEnter}`, () => {
    if (!isExited(states.status)) return false

    const isMounted = !(unmountOnExit || (mountOnEnter && !states.hasMounted))

    return actions.setIsMounted(isMounted)
  })

  // when 变化时需要保证页面处于渲染中,
  const returnEarly2 = useWatchValue(when, () => actions.setIsMounted(true))

  return { returnEarly: returnEarly1 || returnEarly2, actions, states }
}
