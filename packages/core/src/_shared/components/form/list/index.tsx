import { useConstant, useDeepMemo } from '@mink-ui/core/_shared/hooks'
import { betterDisplayName, logger } from '@mink-ui/core/_shared/utils'
import { isArray, isFunction, isUndefined, rawType, toArray } from '@mink-ui/shared'
import { useMemo } from 'react'

import type { InternalFormListProps } from './props'

import { InternalFormInstanceContext } from '../_shared.context'
import InternalFormField from '../field'
import { getIn } from '../utils/value'
import FormListControl from './control'

function InternalFormList(props: InternalFormListProps) {
  const { children, initialValue, name, preserve, rule } = props

  if (process.env.NODE_ENV !== 'production')
    logger(isUndefined(name), 'Form.List', 'Miss `name` prop.')

  const instance = InternalFormInstanceContext.useState()

  const listPath = useDeepMemo(() => {
    return toArray(instance.listPath).concat(toArray(name))
  }, [instance.listPath, name])

  const instanceContext = useMemo(() => ({ ...instance, listPath }), [instance, listPath])

  const control = useConstant(() => new FormListControl())

  control.setInternalFormListMisc(instance, listPath, rule)

  const helpers = useMemo(() => control.getFeatures(), [control])

  const invalidChildren = !isFunction(children)

  if (process.env.NODE_ENV !== 'production')
    logger(invalidChildren, 'Form.List only accepts function as children.')

  if (invalidChildren) return null

  return (
    <InternalFormInstanceContext.Provider value={instanceContext}>
      <InternalFormField
        initialValue={initialValue}
        name={[]}
        preserve={preserve}
        rule={rule}
        shouldUpdate={(prev, next, type) => {
          const path = toArray(name)

          const prevList = getIn(prev, path)

          const nextList = getIn(next, path)

          // 用户主动触发的默认不更新 或者 setFieldValue
          if (type !== 'setFields' && type !== 'fieldEvent')
            return prevList !== nextList

          // 数据类型不同
          if (rawType(prevList) !== rawType(nextList)) return true

          return isArray(nextList) && prevList.length !== nextList.length
        }}
      >
        {({ value }: any, meta) => {
          const fields = toArray(value, true).map((_, index) => ({
            isListField: true,
            key: control.ensureFieldKey(index),
            name: index,
          }))

          if (process.env.NODE_ENV !== 'production') {
            logger(!isArray(value), `'${listPath.join(' > ')}' is not an array`)
          }

          return children(fields, helpers, meta)
        }}
      </InternalFormField>
    </InternalFormInstanceContext.Provider>
  )
}

betterDisplayName(InternalFormList, 'InternalForm.List')

export default InternalFormList
