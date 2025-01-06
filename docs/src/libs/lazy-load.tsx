import type { SkeletonProps } from '@shared/components/skeleton'
import type { ComponentType } from 'react'

import loadable from '@loadable/component'
import Skeleton from '@shared/components/skeleton'

function lazyLoad<Props>(
  loader: (props: Props) => Promise<{ default: ComponentType<Props> }>,
  loadingProps?: Partial<SkeletonProps>,
) {
  return loadable(
    loader as any,
    {
      fallback: <Skeleton {...loadingProps} />,
    },
  ) as unknown as ComponentType<Props>
}

export default lazyLoad
