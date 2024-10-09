import type { VoidFn } from '@internal/types'

import { useConstant, useForceUpdate, useWatchValue } from '@comps/_shared/hooks'
import { addClassNames, delClassNames } from '@internal/utils'
import { useMemo } from 'react'

import type { CssTransitionClassNames, CssTransitionProps, TransitionStatus, TransitionStep, WithStyleHelpers } from '../props'

import { APPEAR, ENTER, ENTERED, ENTERING, EXIT, EXITED, EXITING, isEntered, isExit, isExited } from '../../../_shared/constants'

export class TransitionState<E extends HTMLElement> {
  // 清理函数(定时器, DOM事件)
  finishCleanup: void | VoidFn = undefined

  // 是否挂载过,处理mountOnEnter逻辑
  hasMounted = false

  // 元素实例
  instance: null | WithStyleHelpers<E> = null

  // 决定能否执行appear逻辑
  isInitial = true

  // 处理 unmountOnExit 逻辑
  isMounted = false

  // 过渡步骤 appear enter exit
  step: TransitionStep

  // 过渡 状态 entering entered exiting exited
  status: TransitionStatus

  extraValues = {
    classes: [] as (string | undefined)[],
    style: {} as Record<string, null | string>,
  }

  initialValues: {
    isInitial: boolean
    status: TransitionStatus
    step: TransitionStep
  }

  constructor(props: CssTransitionProps<E>, classNames: CssTransitionClassNames) {
    const { appear, mountOnEnter, unmountOnExit, when } = props

    this.isMounted = when || !(unmountOnExit || mountOnEnter)

    this.status = !when || appear ? EXITED : ENTERED

    this.step = when ? appear ? APPEAR : ENTER : EXIT

    this.extraValues.classes = [classNames[isExited(this.status) ? EXIT : ENTER].done]

    this.initialValues = { isInitial: true, status: this.status, step: this.step }
  }
}

export class TransitionAction<E extends HTMLElement> {
  constructor(private forceUpdate: VoidFn, private states: TransitionState<E>) {}

  setFinishCleanup = (value?: void | VoidFn) => {
    this.states.finishCleanup = value
  }

  runFinishCleanup = () => {
    this.states.finishCleanup?.()

    this.states.finishCleanup = undefined
  }

  setInstance = (value: null | WithStyleHelpers<E>) => {
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

  addTransitionClass = (el: E, ...classes: (string | undefined)[]) => {
    addClassNames(el, ...classes)

    this.states.extraValues.classes = this.states.extraValues.classes.concat(classes)
  }

  delTransitionClass = (el: E, ...classNames: (string | undefined)[]) => {
    delClassNames(el, ...classNames)

    const set = new Set(classNames)

    this.states.extraValues.classes = this.states.extraValues.classes.filter(e => !set.has(e))
  }

  clearTransitionClass = (el: E) => {
    delClassNames(el, ...this.states.extraValues.classes)

    this.states.extraValues.classes = []
  }

  shouldTransition = (isInitial: boolean, when: boolean | undefined) => {
    const { status } = this.states

    if (isInitial && when && isExited(status)) return APPEAR

    if (!isInitial && when && isExited(status)) return ENTER

    if (!isInitial && !when && isEntered(status)) return EXIT
  }

  startTransition = (step: TransitionStep) => {
    this.updateStep(step)

    this.updateStatus(isExit(step) ? EXITING : ENTERING)
  }

  cancelTransition = (step: TransitionStep) => {
    this.updateStep(isExit(step) ? ENTER : EXIT)

    this.updateStatus(isExit(step) ? EXITED : ENTERED)
  }

  finishTransition = (step: TransitionStep, unmounted: boolean | undefined) => {
    this.runFinishCleanup()

    this.setIsMounted(!(unmounted && isExit(step)))

    this.updateStatus(isExit(step) ? EXITED : ENTERED)

    this.forceUpdate()
  }

  resetTransition = () => {
    Object.entries(this.states.initialValues)
      .forEach(([key, value]) => { this.states[key] = value })
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
