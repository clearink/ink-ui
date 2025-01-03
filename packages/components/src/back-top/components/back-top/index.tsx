import { betterDisplayName } from '@comps/_shared/utils'

import type { BackTopProps } from './props'

import useFormatClass from './hooks/use-format-class'

function BackTop(props: BackTopProps) {
  const classes = useFormatClass(props)

  return <div className={classes}>back-top</div>
}

betterDisplayName(BackTop)

export default BackTop
