import { CSSTransition } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { withDisplayName } from '@comps/_shared/utils'

import { NaturalList } from '../../constants'
import useScrollNumberStore from './hooks/use_scroll_number_store'
import { type ScrollNumberProps } from './props'

function ScrollNumber(props: ScrollNumberProps) {
  const { char } = props

  const prefixCls = usePrefixCls('badge-scroll-number')

  const { action, returnEarly, states } = useScrollNumberStore(props)

  if (returnEarly) return null

  if (states.showRawChar) return <span>{char}</span>

  return (
    <CSSTransition
      appear
      key={char}
      name={`${prefixCls}-motion`}
      onEnter={action.onEnter}
      onEntered={action.onEntered}
      onEntering={action.onEntering}
      when
    >
      <span className={prefixCls} ref={states.$wrap}>
        {NaturalList.map(natural => (
          <span
            key={natural}
            ref={(el) => {
              action.setItem(`${natural}`, el)
            }}
          >
            {natural}
          </span>
        ))}
      </span>
    </CSSTransition>
  )
}

export default withDisplayName(ScrollNumber)
