import { useWatchValue } from '@comps/_shared/hooks'
import { betterDisplayName } from '@comps/_shared/utils'

import type { SwitchTransitionProps } from './props'

import { isNodeEqual } from '../utils/node-equal'
import useTransitionStore from './hooks/use-transition-store'

function SwitchTransition<E extends HTMLElement>(props: SwitchTransitionProps<E>) {
  const { children, mode } = props

  const { actions, states } = useTransitionStore(props)

  const returnEarly = useWatchValue(children, () => {
    if (isNodeEqual(states.current, children)) return

    if (mode === 'out-in') actions.runOutInSwitch()
    else if (mode === 'in-out') actions.runInOutSwitch()
    else actions.runDefaultSwitch()
  })

  return returnEarly ? null : <>{actions.renderNodes(children)}</>
}

betterDisplayName(SwitchTransition)

export default SwitchTransition
