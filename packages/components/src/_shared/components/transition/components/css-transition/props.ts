import type { StyledProps } from '@comps/_shared/types'
import type { VoidFn } from '@internal/types'
import type { ReactElement, RefCallback } from 'react'

import type { APPEAR, ENTER, ENTERED, ENTERING, EXIT, EXITED, EXITING } from '../../_shared/constants'

export type TransitionStep = typeof APPEAR | typeof ENTER | typeof EXIT

export type TransitionStatus = typeof ENTERED | typeof ENTERING | typeof EXITED | typeof EXITING

export interface CssTransitionRef<E extends HTMLElement = HTMLElement> {
  element: E | null
  status: TransitionStatus
  isEntering: boolean
  isEntered: boolean
  isExiting: boolean
  isExited: boolean
}

export type CssTransitionClassNames = Record<TransitionStep, { active?: string, done?: string, from?: string, to?: string }>

export type CssTransitionTimeouts = Record<TransitionStep, number | undefined>

export type WithStyleHelpers<E extends HTMLElement> = {
  $remove: (property: string) => void
  $set: (property: string, value: null | string, priority?: string) => void
} & E

export interface CssTransitionProps<E extends HTMLElement = HTMLElement> {
  /**
   * @description 组件挂载时是否立即进行过渡
   * @default false
   */
  appear?: boolean
  /**
   * @description 触发过渡阶段
   */
  when?: boolean
  /**
   * @zh 退出过渡结束时卸载元素
   * @default false
   */
  unmountOnExit?: boolean
  /**
   * @zh 进入过渡时才进行初次渲染
   * @default false
   */
  mountOnEnter?: boolean
  /**
   * @description 过渡元素
   */
  children: ((refCallback: RefCallback<E>, attrs: StyledProps) => ReactElement) | ReactElement
  /**
   * @description 本次过渡的类型
   */
  type?: 'animation' | 'transition'
  /**
   * @description 过渡类名, 也可以依次设置各个阶段的类名
   */
  classNames?: {
    appearActive?: string
    appearDone?: string
    appearFrom?: string
    appearTo?: string
    enterActive?: string
    enterDone?: string
    enterFrom?: string
    enterTo?: string
    exitActive?: string
    exitDone?: string
    exitFrom?: string
    exitTo?: string
  } | string
  /**
   * @zh 设置每个过渡阶段的持续时间
   */
  timeouts?: { appear?: number, enter?: number, exit?: number } | number

  // events
  onEnter?: (el: WithStyleHelpers<E>, appearing: boolean,) => void
  onEntering?: (el: WithStyleHelpers<E>, appearing: boolean,) => void
  onEntered?: (el: WithStyleHelpers<E>, appearing: boolean,) => void
  onEnterCancel?: (el: WithStyleHelpers<E>, appearing: boolean,) => void
  onExit?: (el: WithStyleHelpers<E>,) => void
  onExiting?: (el: WithStyleHelpers<E>,) => void
  onExited?: (el: WithStyleHelpers<E>,) => void
  onExitCancel?: (el: WithStyleHelpers<E>,) => void
  /**
   * @description 自定义结束事件, 可结合第三方动效库
   */
  addEndListener?: (el: WithStyleHelpers<E>, step: TransitionStep, done: VoidFn) => void | VoidFn
}
