import { toArray } from '@internal/utils'

import type { ExpandedName } from '../../_shared.props'

export default function normalizeExpandedNames(
  names?: ExpandedName | ExpandedName[],
  accordion?: boolean,
) {
  return accordion ? toArray(names).slice(0, 1) : toArray(names)
}
