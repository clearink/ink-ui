import { useConstant, useWatchValue } from '@comps/_shared/hooks'
import { withDefaults, withDisplayName } from '@comps/_shared/utils'
import { isFunction, isNullish, omit } from '@internal/utils'
import { type FormEvent, type ForwardedRef, createElement, forwardRef, useEffect, useImperativeHandle, useMemo } from 'react'
import isEqual from 'react-fast-compare'

import { InternalFormContext, InternalFormInstanceContext } from '../../_shared/context'
import { HOOK_MARK } from './control'
import { type InternalFormInstance } from './control/props'
import useForm from './hooks/use_form'
import { type InternalFormProps } from './props'

const excluded = [
  'name',
  'tag',
  'form',
  'children',
  'onReset',
  'initialValues',
  'validateTrigger',
  'preserve',
  'validationSchema',
  'fields',
  'onFinish',
  'onFieldsChange',
  'onValuesChange',
  'onFailed',
] as const

const defaultProps: Partial<InternalFormProps> = {
  preserve: true,
  tag: 'form',
  validateTrigger: 'onChange',
}

function InternalForm<State = any>(
  _props: InternalFormProps<State>,
  ref: ForwardedRef<InternalFormInstance<State>>,
) {
  const props = withDefaults(_props, defaultProps)

  const { children, fields, form, initialValues, name, onReset, tag, validateTrigger } = props

  const instance = useForm(form) as InternalFormInstance<State>

  // 用于多表单联动
  const parentForm = InternalFormContext.useState()

  useImperativeHandle(ref, () => instance, [instance])

  const internalHook = useMemo(() => instance.getInternalHooks(HOOK_MARK)!, [instance])

  internalHook.setInternalFormMisc(props, parentForm)

  // 设置初始值, 仅在挂载前设置一次
  useConstant(() => internalHook.setInitialValues(initialValues))

  useEffect(() => parentForm.register(instance, name), [instance, name, parentForm])

  // 同步 fields 字段
  useWatchValue(fields, {
    compare: isEqual,
    listener: () => fields && internalHook.setFields(fields),
  })

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault()
    e?.stopPropagation()

    instance.submitForm()
  }

  const handleReset = (e: FormEvent) => {
    e?.preventDefault()
    e?.stopPropagation()

    instance.resetFields()

    onReset?.(e)
  }

  const instanceContext = useMemo(() => {
    return { ...instance, formName: name, validateTrigger }
  }, [instance, validateTrigger, name])

  const elements = (
    <InternalFormInstanceContext.Provider value={instanceContext}>
      {isFunction(children) ? children(instance.getFieldsValue(true), instance) : children}
    </InternalFormInstanceContext.Provider>
  )

  if (isNullish(tag)) return elements

  // 表单剩余字段
  const attrs = {
    ...omit(props, excluded),
    onReset: handleReset,
    onSubmit: handleSubmit,
  }

  return createElement(tag as any, attrs, elements)
}

export default forwardRef(withDisplayName(InternalForm)) as <State = any>(
  props: InternalFormProps<State> & React.RefAttributes<InternalFormInstance<State>>,
) => JSX.Element
