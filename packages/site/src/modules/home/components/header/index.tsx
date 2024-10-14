import { cls } from '@comps/_shared/utils'
import { NavLink } from 'react-router-dom'

import type { HeaderProps } from './props'

import styles from './style.module.scss'

function Header(props: HeaderProps) {
  const { className } = props

  return (
    <header className={cls(styles.root, className)}>
      <div className={styles.left}>
        ink-ui
      </div>
      <div className={styles.right}>
        <NavLink
          to="/components"
          className={({ isActive }) => cls(
            styles['link-item'],
            { [styles['is-active']]: isActive },
          )}
        >
          组件
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => cls(
            styles['link-item'],
            { [styles['is-active']]: isActive },
          )}
        >
          博客
        </NavLink>
      </div>
    </header>
  )
}

export default Header
