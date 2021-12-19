import { useDeepMemo, useEvent } from '@comps/_shared/hooks'
import { logger } from '@comps/_shared/utils'
import { shallowEqual, toArray } from '@internal/utils'
import { useEffect, useMemo, useState } from 'react'

import { InternalFormInstanceContext } from '../../../_shared/context'
import { type ExternalNamePath } from '../../../props'
import { HOOK_MARK } from '../control'
import { type ExternalFormInstance, type InternalFormInstance } from '../control/props'

export default function useWatch<T>(namePath?: ExternalNamePath, form?: ExternalFormInstance) {
  const [value, setValue] = useState<T | undefined>()

  const formInstance = InternalFormInstanceContext.useState()

  const instance = (form ?? formInstance) as InternalFormInstance | undefined

  const internalHook = useMemo(() => instance?.getInternalHooks(HOOK_MARK), [instance])

  const currentPath = useDeepMemo(() => toArray(namePath), [namePath])

  if (process.env.NODE_ENV !== 'production') {
    logger(
      !instance,
      'useWatch requires a form instance since it can not auto detect from context.',
    )
  }

  const registerWatch = useEvent(() =>
    internalHook?.registerWatch(() => {
      const nextValue = instance?.getFieldValue(currentPath)
      // 只浅比较
      if (!shallowEqual(nextValue, value)) setValue(nextValue)
    }),
  )

  useEffect(registerWatch, [registerWatch, currentPath])

  return value
}
