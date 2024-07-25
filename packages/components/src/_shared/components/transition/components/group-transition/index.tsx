import type { ForwardedRef } from 'react'

import { useWatchValue } from '@comps/_shared/hooks'
import { attachDisplayName } from '@comps/_shared/utils'
import { forwardRef, useImperativeHandle } from 'react'

import type { GroupTransitionProps, GroupTransitionRef } from './props'

import { isNodesEqual } from '../../utils/equal'
import useTransitionStore from './hooks/use-transition-store'

function _GroupTransition<E extends HTMLElement>(props: GroupTransitionProps<E>, ref: ForwardedRef<GroupTransitionRef>) {
  const { children } = props

  const { actions, states } = useTransitionStore(props)

  useImperativeHandle(ref, () => ({
    get components() { return states.components },
  }), [states])

  const returnEarly = useWatchValue(children, () => {
    if (isNodesEqual(states.current, children)) return false

    return (actions.updateElements(), true)
  })

  return returnEarly ? null : <>{actions.renderNodes(children)}</>
}

attachDisplayName(_GroupTransition)

const GroupTransition = forwardRef(_GroupTransition) as <E extends HTMLElement>(
  props: GroupTransitionProps<E> & React.RefAttributes<GroupTransitionRef<E>>,
) => JSX.Element | null

export default GroupTransition
