import { betterDisplayName } from '@comps/_shared/utils'

import type { TextProps } from './props'

function Text(props: TextProps) {
  const { children } = props
  return <div>{children}</div>
}

betterDisplayName(Text, 'Typography.Text')

export default Text
