import { useControllableState } from '@comps/_shared/hooks'
import { fallback } from '@internal/utils'

import { type SegmentedOption, type SegmentedProps, type SegmentedType } from '../props'

export default function useSegmentedValue<T extends SegmentedType = SegmentedType>(
  props: SegmentedProps<T>,
  options: SegmentedOption<T>[],
) {
  const { defaultValue, onChange, value } = props

  return useControllableState({
    defaultValue: fallback(defaultValue, options[0]?.value),
    onChange,
    value,
  })
}
