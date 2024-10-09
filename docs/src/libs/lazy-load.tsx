import type { SkeletonProps } from '@components/skeleton'
import type { DefaultComponent } from '@loadable/component'

import Skeleton from '@components/skeleton'
import loadable from '@loadable/component'

function lazyLoad<Props>(
  loader: (props: Props) => Promise<DefaultComponent<Props>>,
  loadingProps?: Partial<SkeletonProps>,
) {
  return loadable(loader, { fallback: <Skeleton {...loadingProps} /> })
}

export default lazyLoad
