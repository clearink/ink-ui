import { useConstant, useForceUpdate } from '@comps/_shared/hooks'
import { makeUniqueId } from '@comps/_shared/utils'
import { batch, pick } from '@internal/utils'
import { type ReactElement, cloneElement, createElement, useMemo } from 'react'

import type {
  CSSTransitionProps as CSS,
  CSSTransitionRef as CSSRef,
} from '../../css-transition/props'
import type { GroupTransitionProps as Group } from '../props'

import { isExit, isExited } from '../../../constants'
import CSSTransition from '../../css-transition'
import diff from '../utils/diff'
import union from '../utils/union'

const included = [
  'name',
  'type',
  'duration',
  'appear',
  'classNames',
  'addEndListener',
  'onEnter',
  'onEntering',
  'onEntered',
  'onEnterCancel',
  'onExit',
  'onExiting',
  'onExited',
  'onExitCancel',
] as const

export class TransitionState<E extends HTMLElement> {
  components = new Map<ReactElement['key'], CSSRef>()

  current: ReactElement[] = []

  elements = new Map<ReactElement['key'], { fresh: boolean, node: ReactElement<CSS> }>()

  isInitial = true

  previous: ReactElement[] = []

  constructor(public _props: Group<E>) {
    this.previous = _props.children

    this.current = _props.children
  }
}

class TransitionAction<E extends HTMLElement> {
  constructor(private forceUpdate: () => void, private states: TransitionState<E>) {
    states.current.forEach((el) => {
      states.elements.set(el.key, this.makeElement(el, { when: true }))
    })
  }

  setIsInitial = (value: boolean) => { this.states.isInitial = value }

  setLatestProps = (value: Group<E>) => {
    this.states._props = value
  }

  updateCurrent = (current: TransitionState<E>['current']) => {
    this.states.previous = this.states.current

    this.states.current = current
  }

  runFinishCleanup = () => {
    let isCompleted = true

    this.states.elements.forEach((_, key) => {
      const comp = this.states.components.get(key)

      if (!comp) return

      if (isExited(comp.status)) this.states.elements.delete(key)

      if (isCompleted && isExit(comp.status)) isCompleted = false
    })

    if (!isCompleted) return

    this._props.onExitComplete?.()

    this.forceUpdate()
  }

  updateElements = () => {
    const { children, onExited } = this._props

    const [enters, exits] = diff(this.states.current, children)

    const allElements = union(this.states.elements, enters, children)

    this.states.elements = allElements.reduce((map, [key, el]) => {
      if (map.has(key)) throw new Error(`two children with the same key, '${key}'. `)

      if (enters.has(key))
        return map.set(key, this.makeElement(el, { appear: true, when: true }))

      const props: Partial<CSS<E>> = { onExited: batch(onExited, this.runFinishCleanup) }

      if (exits.has(key)) props.when = false

      return map.set(key, { fresh: props.when !== false, node: cloneElement(el, props) })
    }, new Map() as TransitionState<E>['elements'])

    this.updateCurrent(children)

    this.forceUpdate()
  }

  private get _props() {
    return this.states._props
  }

  private uniqueId = makeUniqueId('group-transition-')

  private makeElement = (element: ReactElement, extra: Partial<CSS>) => {
    const preset = pick(this._props, included) as CSS

    const ref = (instance: CSSRef | null) => {
      if (!instance) this.states.components.delete(element.key)
      else this.states.components.set(element.key, instance)
    }

    Object.assign(preset, extra, { key: this.uniqueId(), ref, unmountOnExit: true })

    return { fresh: true, node: createElement(CSSTransition, preset, element) }
  }

  renderNodes = () => {
    const { children } = this._props

    const elements: ReactElement[] = []

    this.states.elements.forEach((item, key) => {
      const node = children.find(el => el.key === key)

      if (!item.fresh || !node) return elements.push(item.node)

      const isEqual = item.node.props.children === node

      elements.push(isEqual ? item.node : cloneElement(item.node, undefined, node))
    })

    return elements
  }
}

export default function useTransitionStore<E extends HTMLElement = HTMLElement>(props: Group<E>) {
  const update = useForceUpdate()

  const states = useConstant(() => new TransitionState(props))

  const actions = useMemo(() => new TransitionAction(update, states), [update, states])

  useMemo(() => { actions.setLatestProps(props) }, [actions, props])

  return { actions, states }
}
