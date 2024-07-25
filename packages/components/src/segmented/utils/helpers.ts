import { fallback, isObject } from '@internal/utils'

import type { SegmentedOption, SegmentedProps, SegmentedType } from '../props'

export function normalizeOptions<T extends SegmentedType = SegmentedType>(
  options: SegmentedProps<T>['options'] = [],
): SegmentedOption<T>[] {
  return options.map((item: SegmentedOption<T> | T) => {
    if (!isObject(item)) return { label: item, title: `${item}`, value: item }

    const { label, title } = item

    const htmlTitle = fallback(title, isObject(label) ? undefined : `${label}`)

    return { ...item, title: htmlTitle }
  })
}
