import { useDebounceValue } from '@comps/_shared/hooks'
import { fallback, isString, pushItem } from '@internal/utils'
import { type ReactNode, useMemo } from 'react'

import { type ValidateStatus } from '../../../props'
import { type FormErrorListProps } from '../props'

function makeExplains(type: 'error' | 'help' | 'warning',
  items: ReactNode[],
  status?: ValidateStatus) {
  return items.map((item, index) => ({
    key: isString(item) ? item : `${type}_${index}`,
    status: fallback(status, type),
    value: item,
  }))
}

export default function useFormatExplains(props: FormErrorListProps) {
  const { help, helpStatus } = props

  const errors = useDebounceValue(40, props.errors || [])

  const warnings = useDebounceValue(40, props.warnings || [])

  return useMemo(() => {
    if (help) return makeExplains('help', [help], helpStatus)

    return pushItem(makeExplains('error', errors), makeExplains('warning', warnings))
  }, [errors, help, helpStatus, warnings])
}
