import { CSSTransition } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { withDefaults, withDisplayName } from '@comps/_shared/utils'

import useAlertStore from './hooks/use_alert_store'
import useFormatClass from './hooks/use_format_class'
import { type AlertProps } from './props'

export { type AlertProps }

const defaultProps: Partial<AlertProps> = {
  type: 'info',
}

function Alert(_props: AlertProps) {
  const props = withDefaults(_props, defaultProps)

  const { closeable, message } = props

  const prefixCls = usePrefixCls('alert')

  const classNames = useFormatClass(prefixCls, props)

  const { actions, states } = useAlertStore(props)

  const renderNode = (
    <div className={classNames.root}>
      {' '}
      {message}
    </div>
  )

  if (closeable) {
    return (
      <CSSTransition when={states.toLeave}>
        {renderNode}
      </CSSTransition>
    )
  }

  return renderNode
}

export default withDisplayName(Alert)
