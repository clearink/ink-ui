import { cls } from '@comps/_shared/utils'

import type { FooterProps } from './props'

function Footer(props: FooterProps) {
  const { className } = props

  return (
    <footer className={cls(className)}>
      copyright@clearink
    </footer>
  )
}

export default Footer
