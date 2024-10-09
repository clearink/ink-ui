import type { ForwardedRef } from 'react'

import { Form as InternalForm } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { betterDisplayName, withDefaults } from '@comps/_shared/utils'
import { DisabledContext, SizeContext } from '@comps/config-provider/_shared/contexts'
import { omit } from '@internal/utils'
import { forwardRef, useImperativeHandle, useMemo } from 'react'

import type { FormContextState } from '../../_shared/contexts'
import type { FormInstance, FormProps } from './props'

import { FormContext } from '../../_shared/contexts'
import useForm from './hooks/use-form'
import useFormatClass from './hooks/use-format-class'
import { defaultFormProps } from './props'

const excluded = [
  'form',
  'colon',
  'layout',
  'labelAlign',
  'labelWrap',
  'labelCol',
  'wrapperCol',
  'size',
  'disabled',
  'scrollToFirstError',
  'requiredMark',
] as const

function Form<State = any>(_props: FormProps<State>, ref: ForwardedRef<FormInstance<State>>) {
  const props = withDefaults(_props, {
    ...defaultFormProps,
    disabled: DisabledContext.useState(),
    size: SizeContext.useState(),
    // ...ConfigContext.useState().form,
    // colon
    // requiredMark
  })

  const {
    colon,
    disabled,
    form,
    labelAlign,
    labelCol,
    labelWrap,
    layout,
    name,
    onFailed,
    requiredMark,
    // scrollToFirstError,
    size,
    wrapperCol,
  } = props

  const prefixCls = usePrefixCls('form')

  const classes = useFormatClass(prefixCls, props)

  const formInstance = useForm(form)

  useImperativeHandle(ref, () => formInstance, [formInstance])

  const formContext = useMemo<FormContextState>(() => {
    return {
      colon,
      form: formInstance,
      formName: name,
      labelAlign,
      labelCol,
      labelWrap,
      layout,
      requiredMark,
      wrapperCol,
    }
  }, [colon, requiredMark, formInstance, labelAlign, labelCol, labelWrap, layout, name, wrapperCol])

  const onFailedWithEffect = (errors: any) => {
    onFailed?.(errors)
    // console.log(scrollToFirstError)
    // if (!scrollToFirstError) return
    // formInstance.scrollToField()
  }

  const attrs = omit(props, excluded)

  return (
    <DisabledContext.Provider value={disabled}>
      <SizeContext.Provider value={size}>
        <FormContext.Provider value={formContext}>
          <InternalForm<State>
            {...attrs}
            className={classes}
            form={formInstance}
            name={name}
            onFailed={onFailedWithEffect}
          />
        </FormContext.Provider>
      </SizeContext.Provider>
    </DisabledContext.Provider>
  )
}

betterDisplayName(Form)

export default forwardRef(Form) as <State = any>(
  props: FormProps<State> & React.RefAttributes<FormInstance<State>>,
) => JSX.Element
