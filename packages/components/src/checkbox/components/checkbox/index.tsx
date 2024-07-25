import { DisabledContext } from '@comps/_shared/contexts'
import { usePrefixCls } from '@comps/_shared/hooks'
import { attachDisplayName, withDefaults } from '@comps/_shared/utils'
import { CheckboxGroupContext } from '@comps/checkbox/_shared/context'
import TouchEffect from '@comps/touch-effect'
import { isNullish, omit } from '@internal/utils'

import type { CheckboxProps } from './props'

import useCheckboxValue from './hooks/use-checkbox-value'
import useFormatClass from './hooks/use-format-class'

const excluded = [
  'autoFocus',
  'children',
  'disabled',
  'checked',
  'defaultChecked',
  'indeterminate',
  'onChange',
] as const

function Checkbox(_props: CheckboxProps) {
  const group = CheckboxGroupContext.useState()

  const props = withDefaults(
    {
      ..._props,
      disabled: _props.disabled || group.disabled,
    },
    {
      disabled: DisabledContext.useState(),
    },
  )

  const { children, disabled } = props

  const prefixCls = usePrefixCls('checkbox')

  const [checked, setChecked] = useCheckboxValue(props)

  const classes = useFormatClass(prefixCls, props, {
    checked,
    disabled,
  })

  const attrs = omit(props, excluded)

  return (
    <TouchEffect component="Checkbox" disabled={checked} selector={`.${prefixCls}__input`}>
      <label {...attrs} className={classes}>
        <input
          className={`${prefixCls}__original`}
          checked={!!checked}
          type="checkbox"
          onChange={(e) => {
            !disabled && setChecked(e.target.checked)
          }}
        />
        <span className={`${prefixCls}__input`} />
        {!isNullish(children) && <span className={`${prefixCls}__label`}>{children}</span>}
      </label>
    </TouchEffect>
  )
}

attachDisplayName(Checkbox)

export default Checkbox
