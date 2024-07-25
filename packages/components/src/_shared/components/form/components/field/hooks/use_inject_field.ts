import { logger } from '@comps/_shared/utils'
import { type ReactElement, cloneElement } from 'react'

import type { InternalFormInstance, InternalHookReturn } from '../../form/control/props'
import type { FormFieldControl } from '../control'
import type { InternalFormFieldProps } from '../props'

import normalizeChildren from '../utils/children'
import collectInjectProps from '../utils/collect'

// 向 Form.Field 包裹的组件内部注入数据
export default function useInjectField(
  props: InternalFormFieldProps,
  instance: InternalFormInstance,
  control: FormFieldControl,
  internalHooks?: InternalHookReturn,
) {
  // 收集注册到子组件的数据
  const handleCollect = collectInjectProps(props, instance, control, internalHooks)

  // 处理 children
  const handleNormalize = normalizeChildren(handleCollect, instance, control)

  const { children, functional, valid } = handleNormalize(props.children)

  if (process.env.NODE_ENV !== 'production')
    logger(!functional && !valid, 'Form.Field `children` is not valid react element.')

  if (functional || !valid) return children

  const collected = handleCollect((children as ReactElement).props)

  return cloneElement(children as ReactElement, collected)
}
