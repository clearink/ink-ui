import { useWatchValue } from '@comps/_shared/hooks'
import { attachDisplayName } from '@comps/_shared/utils'

import type { SwitchTransitionProps } from './props'

import { isNodeEqual } from '../../utils/equal'
import useTransitionStore from './hooks/use-transition-store'

// 转场动画
function SwitchTransition<E extends HTMLElement>(props: SwitchTransitionProps<E>) {
  const { children, mode } = props

  const { actions, states } = useTransitionStore(props)

  const returnEarly = useWatchValue(children, () => {
    if (isNodeEqual(states.current, children)) return false

    if (mode === 'out-in') actions.runOutInSwitch()
    else if (mode === 'in-out') actions.runInOutSwitch()
    else actions.runDefaultSwitch()

    return true
  })

  return returnEarly ? null : <>{actions.renderNodes(children)}</>
}

attachDisplayName(SwitchTransition)

export default SwitchTransition
