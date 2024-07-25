import { CssTransition } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { attachDisplayName } from '@comps/_shared/utils'

import type { ScrollNumberProps } from './props'

import { naturalList } from '../../constants'
import useScrollNumberStore from './hooks/use-scroll-number-store'

function ScrollNumber(props: ScrollNumberProps) {
  const { char } = props

  const prefixCls = usePrefixCls('badge-scroll-number')

  const { actions, returnEarly, states } = useScrollNumberStore(props)

  if (returnEarly) return null

  if (states.showRawChar) return <>{char}</>

  return (
    <CssTransition
      key={char}
      appear
      when
      classNames={`${prefixCls}-motion`}
      onEnter={actions.onEnter}
      onEntering={actions.onEntering}
      onEntered={actions.onEntered}
    >
      <span ref={states.$wrapper} className={prefixCls}>
        {naturalList.map(natural => (
          <span
            key={natural}
            ref={(el) => { actions.setItem(natural, el) }}
          >
            {natural}
          </span>
        ))}
      </span>
    </CssTransition>
  )
}

attachDisplayName(ScrollNumber)

export default ScrollNumber
