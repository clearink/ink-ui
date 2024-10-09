import { isNullish } from '@internal/utils'
import { useMemo } from 'react'

import type { FieldMeta, ValidateStatus } from '../../../_shared/props'

export default function useFormatStatus(meta: FieldMeta, validateStatus?: ValidateStatus) {
  return useMemo<ValidateStatus>(() => {
    const status: ValidateStatus = ''

    if (!isNullish(validateStatus)) return validateStatus

    if (meta.validating) return 'validating'

    if (meta.errors.length) return 'error'

    if (meta.warnings.length) return 'warning'

    if (meta.touched) return 'success'

    return status
  }, [meta, validateStatus])
}
