import { fallback, isObjectLike } from '@internal/utils'

import { type SegmentedOption, type SegmentedProps, type SegmentedType } from '../props'

export function normalizeOptions<T extends SegmentedType = SegmentedType>(
  options: SegmentedProps<T>['options'] = [],
): SegmentedOption<T>[] {
  return options.map((item: SegmentedOption<T> | T) => {
    if (isObjectLike(item)) {
      const { label, title } = item

      const htmlTitle = fallback(title, isObjectLike(label) ? undefined : `${label}`)

      return { ...item, title: htmlTitle }
    }

    return { label: item, title: `${item}`, value: item }
  })
}
