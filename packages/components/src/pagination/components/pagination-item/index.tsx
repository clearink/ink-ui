import { betterDisplayName, cls } from '@comps/_shared/utils'
import { useMemo } from 'react'

import type { PaginationItemProps } from './props'

function PaginationItem(props: PaginationItemProps) {
  const { active, className, disabled, itemRender, page, prefix, showHtmlTitle, ...rest } = props

  const classes = cls(
    `${prefix}-item`,
    {
      [`${prefix}-item--active`]: active,
      [`${prefix}-item--disabled`]: disabled,
    },
    className,
  )

  const title = useMemo(() => (showHtmlTitle ? `${page}` : undefined), [page, showHtmlTitle])

  return (
    <li className={classes} tabIndex={disabled ? -1 : 0} title={title} {...rest}>
      {itemRender(page, 'page', <a rel="nofollow">{page}</a>)}
    </li>
  )
}

betterDisplayName(PaginationItem)

export default PaginationItem
