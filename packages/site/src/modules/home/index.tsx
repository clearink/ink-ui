import { SwitchTransition } from '@comps/_shared/components'
import { useLocation, useOutlet } from 'react-router-dom'

import Footer from './components/footer'
import Header from './components/header'
import styles from './style.module.scss'

function Home() {
  const location = useLocation()

  const ctxHolder = useOutlet()

  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <div className={styles.container}>
        <SwitchTransition mode="out-in" classNames="router-fade">
          <div key={location.pathname} className={styles.content}>
            {ctxHolder}
          </div>
        </SwitchTransition>
      </div>
      <Footer className={styles.footer} />
    </div>
  )
}

export default Home
