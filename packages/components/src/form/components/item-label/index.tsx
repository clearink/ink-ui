import { usePrefixCls } from '@comps/_shared/hooks'
import { withDefaults } from '@comps/_shared/utils'
import Col from '@comps/col'
import { isString } from '@internal/utils'

import { FormContext } from '../../_shared/context'
import useFormatClass from './hooks/use_format_class'
import { type FormItemLabelProps } from './props'
import normalizeChildren from './utils/normalize_children'

function FormItemLabel(_props: FormItemLabelProps) {
  const ctx = FormContext.useState()

  const props = withDefaults(_props, {
    colon: ctx.colon,
    labelAlign: ctx.labelAlign,
    labelCol: ctx.labelCol,
    labelWrap: ctx.labelWrap,
    requiredMark: ctx.requiredMark,
  })

  const { htmlFor, label } = props

  const prefixCls = usePrefixCls('form-item__label')

  const classes = useFormatClass(prefixCls, props, ctx)

  const htmlTitle = isString(label) ? label : undefined

  return (
    <Col {...props.labelCol} className={classes}>
      <label htmlFor={htmlFor} title={htmlTitle}>
        {normalizeChildren(props, ctx)}
      </label>
    </Col>
  )
}

export default FormItemLabel
