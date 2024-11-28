import type { DefaultComponent } from '@loadable/component'
import type { SkeletonProps } from '@shared/components/skeleton'

import loadable from '@loadable/component'
import Skeleton from '@shared/components/skeleton'

function lazyLoad<Props>(
  loader: (props: Props) => Promise<DefaultComponent<Props>>,
  loadingProps?: Partial<SkeletonProps>,
) {
  return loadable(loader, { fallback: <Skeleton {...loadingProps} /> })
}

export default lazyLoad
