import type { ExpandedName } from '@comps/collapse/props'

import { toArray } from '@internal/utils'

export default function getExpandedNames(
  names?: ExpandedName | ExpandedName[],
  accordion?: boolean,
) {
  return accordion ? toArray(names).slice(0, 1) : toArray(names)
}
