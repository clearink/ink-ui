import { usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { attachDisplayName } from '@comps/_shared/utils'

import type { PopoverProps } from './props'

import Tooltip from '../tooltip'
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

attachDisplayName(Popover)

export default Popover
