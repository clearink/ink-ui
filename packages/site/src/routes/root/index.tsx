import { SwitchTransition } from '@comps/_shared/components'
import { useLocation, useOutlet } from 'react-router-dom'

import styles from './style.module.scss'

function RootRoute() {
  const location = useLocation()
  const ctxHolder = useOutlet()

  console.log(styles)
  return (
    <div className={styles.root}>
      <div className={styles.header}>header</div>
      <SwitchTransition mode="out-in" classNames={styles['router-fade']}>
        <div key={location.pathname} className={styles.content}>
          {ctxHolder}
        </div>
      </SwitchTransition>
    </div>
  )
}

export default RootRoute
