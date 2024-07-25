import { SwitchTransition } from '@comps/_shared/components'
import { Link, useLocation, useOutlet } from 'react-router-dom'

function RootRoute() {
  const location = useLocation()
  const ctxHolder = useOutlet()
  return (
    <div>
      <div className="root-header" style={{ margin: '12px 0', textAlign: 'center' }}>
        <Link to="/about">about</Link>
        <Link to="/other">other</Link>
      </div>
      <SwitchTransition mode="out-in" classNames="router-fade">
        <div key={location.pathname} className="transition-wrapper">
          {ctxHolder}
        </div>
      </SwitchTransition>
    </div>
  )
}

export default RootRoute
