import { attachDisplayName } from '@comps/_shared/utils'

import type { BreadcrumbProps } from './props'

import useFormatClass from './hooks/use_format_class'

// TODO: 待开发
function Breadcrumb(_props: BreadcrumbProps) {
  const classes = useFormatClass()

  return <div className={classes}>breadcrumb</div>
}

attachDisplayName(Breadcrumb)

export default Breadcrumb
