import { isNullish, isNumber } from '@internal/utils'
import { useMemo } from 'react'

import type { CssTransitionProps, CssTransitionTimeouts } from '../props'

import { APPEAR, ENTER, EXIT } from '../constants'

export default function useFormatTimeouts(duration: CssTransitionProps['duration']) {
  return useMemo(() => {
    const values = [APPEAR, ENTER, EXIT].reduce((res, step) => {
      res[step] = undefined
      return res
    }, {} as CssTransitionTimeouts)

    if (isNullish(duration)) return values

    const isNumeric = isNumber(duration)

    values[APPEAR] = isNumeric ? duration : duration.appear
    values[ENTER] = isNumeric ? duration : duration.enter
    values[EXIT] = isNumeric ? duration : duration.exit

    return values
  }, [duration])
}
