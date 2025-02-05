import { usePrefixCls } from '@comps/_shared/hooks'
import { withDefaults } from '@comps/_shared/utils'
import Col from '@comps/col'
import { isString } from '@internal/utils'

import type { FormItemLabelProps } from './props'

import { FormContext } from '../_shared.context'
import useFormatClassNames from './hooks/use-format-class-names'
import normalizeLabelChildren from './utils/normalize-label-children'

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

  const classNames = useFormatClassNames(prefixCls, props, ctx)

  const htmlTitle = isString(label) ? label : undefined

  return (
    <Col {...props.labelCol} className={classNames.root}>
      <label htmlFor={htmlFor} title={htmlTitle}>
        {normalizeLabelChildren(props, ctx)}
      </label>
    </Col>
  )
}

export default FormItemLabel
