import { usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { betterDisplayName } from '@comps/_shared/utils'
import Tooltip from '@comps/tooltip'

import type { PopoverProps } from './props'

import useFormatClass from './hooks/use-format-class'

function Popover(props: PopoverProps) {
  const prefix = usePrefixCls()

  const prefixCls = `${prefix}-tooltip`

  const classNames = useFormatClass(prefixCls, props)

  const styles = useSemanticStyles(props)

  return (
    <Tooltip
      {...props}
      classNames={classNames}
      styles={styles}
      content={(
        <>
          <div className={classNames.title}>title</div>
          <div className={classNames.content}>content</div>
        </>
      )}
    />
  )
}

betterDisplayName(Popover)

export default Popover
