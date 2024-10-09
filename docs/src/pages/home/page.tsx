import Button from '@comps/button'
import { HomeFooter } from '@features/home'
import { useNavigate } from 'react-router-dom'

import styles from './page.module.scss'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Button variant="filled" onClick={() => { navigate('/component') }}>
          开始使用
        </Button>
      </div>
      <HomeFooter />
    </div>
  )
}
