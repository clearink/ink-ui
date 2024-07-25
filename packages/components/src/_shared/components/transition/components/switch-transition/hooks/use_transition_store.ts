import { useConstant, useForceUpdate } from '@comps/_shared/hooks'
import { makeUniqueId } from '@comps/_shared/utils'
import { atIndex, batch, omit } from '@internal/utils'
import { type ReactElement, cloneElement, createElement, useMemo } from 'react'

import type { CSSTransitionProps as CSS } from '../../css-transition/props'
import type { SwitchTransitionProps as Switch } from '../props'

import runCounter from '../../../utils/run_counter'
import CSSTransition from '../../css-transition'

class TransitionState<E extends HTMLElement> {
  count = 0

  current: ReactElement

  elements: { fresh: boolean, node: ReactElement }[] = []

  constructor(public _props: Switch<E>) {
    this.current = _props.children
  }
}

class TransitionAction<E extends HTMLElement> {
  runDefaultSwitch = () => {
    this.updateCurrent(this._props.children)

    const count = this.updateCount()

    const resolve = runCounter(2, () => {
      if (this.states.count !== count) return

      this.updateElements([this.states.elements[1]])
    })

    this.updateElements([
      this.cloneElement(atIndex(this.elements, -1).node, {
        appear: true,
        when: false,
        onExited: batch(this._props.onExited, resolve),
      }),
      this.makeElement(this._props.children, {
        appear: true,
        when: true,
        onEntered: batch(this._props.onEntered, resolve),
      }),
    ])
  }

  runInOutSwitch = () => {
    this.updateCurrent(this._props.children)

    const count = this.updateCount()

    this.updateElements([
      this.cloneElement(atIndex(this.elements, -1).node),
      this.makeElement(this._props.children, {
        appear: true,
        when: true,
        onEntered: batch(this._props.onEntered, () => {
          if (this.states.count !== count) return

          this.updateElements([
            this.cloneElement(this.elements[0].node, {
              when: false,
              onExited: batch(this._props.onExited, () => {
                if (this.states.count !== count) return

                this.updateElements([this.elements[1]])
              }),
            }),
            this.states.elements[1],
          ])
        }),
      }),
    ])
  }

  runOutInSwitch = () => {
    const count = this.updateCount()

    this.updateElements([
      this.cloneElement(this.elements[0].node, {
        appear: true,
        when: false,
        onExited: batch(this._props.onExited, () => {
          if (this.states.count !== count) return

          this.updateCurrent(this._props.children)

          this.updateElements([
            this.makeElement(this.states.current, { appear: true, when: true }),
          ])
        }),
      }),
    ])
  }

  setLatestProps = (value: Switch<E>) => {
    this.states._props = value
  }

  updateCount = () => {
    return ++this.states.count
  }

  updateCurrent = (current: TransitionState<E>['current']) => {
    this.states.current = current
  }

  updateElements = (elements: TransitionState<E>['elements']) => {
    this.states.elements = elements
    this.forceUpdate()
  }

  constructor(public forceUpdate: () => void, private states: TransitionState<E>) {
    states.elements = [this.makeElement(states.current, { when: true })]
  }

  private get elements() {
    return this.states.elements
  }

  private get _props() {
    return this.states._props
  }

  private cloneElement = (element: ReactElement, props?: Partial<CSS<E>>) => {
    return { fresh: false, node: props ? cloneElement(element, props) : element }
  }

  private uniqueId = makeUniqueId('switch-transition-')

  private makeElement = (element: ReactElement, extra: Partial<CSS<E>>) => {
    const preset = omit(this._props, ['mode', 'children']) as CSS

    Object.assign(preset, extra, { key: this.uniqueId() })

    return { fresh: true, node: createElement(CSSTransition, preset, element) }
  }

  renderNodes = () => {
    const { children } = this._props

    return this.elements.map((item) => {
      if (!item.fresh) return item.node

      const isEqual = item.node.props.children === children

      return isEqual ? item.node : cloneElement(item.node, undefined, children)
    })
  }
}

export default function useTransitionStore<E extends HTMLElement = HTMLElement>(props: Switch<E>) {
  const update = useForceUpdate()

  const states = useConstant(() => new TransitionState(props))

  const actions = useMemo(() => new TransitionAction(update, states), [update, states])

  useMemo(() => { actions.setLatestProps(props) }, [actions, props])

  return { actions, states }
}
