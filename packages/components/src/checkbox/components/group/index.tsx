import { usePrefixCls } from '@comps/_shared/hooks'
import { omit } from '@internal/utils'

import type { CheckboxGroupProps } from './props'

import useFormatClass from './hooks/use_format_class'

const excluded = ['children'] as const

function CheckboxGroup(props: CheckboxGroupProps) {
  const { children } = props

  const prefixCls = usePrefixCls('checkbox-group')

  const classes = useFormatClass(prefixCls, props)

  const attrs = omit(props, excluded)

  return (
    <div {...attrs} className={classes}>
      <input type="checkbox" />
      <span>{children}</span>
    </div>
  )
}

export default CheckboxGroup
