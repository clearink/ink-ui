import { CssTransition } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { betterDisplayName } from '@comps/_shared/utils'
import { naturalList } from '@comps/badge/_shared/constants'

import type { ScrollNumberProps } from './props'

import useScrollNumber from './hooks/use-scroll-number'

function ScrollNumber(props: ScrollNumberProps) {
  const { char } = props

  const prefixCls = usePrefixCls('badge-scroll-number')

  const {
    returnEarly,
    $wrapper,
    showChar,
    setItem,
    handleEnter,
    handleEntering,
    handleEntered,
  } = useScrollNumber(props)

  if (returnEarly) return null

  if (showChar) return <>{char}</>

  return (
    <CssTransition
      key={char}
      appear
      when
      classNames={`${prefixCls}-motion`}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
    >
      <span ref={$wrapper} className={prefixCls}>
        {naturalList.map(natural => (
          <span
            key={natural}
            ref={(el) => { setItem(natural, el) }}
          >
            {natural}
          </span>
        ))}
      </span>
    </CssTransition>
  )
}

betterDisplayName(ScrollNumber)

export default ScrollNumber
