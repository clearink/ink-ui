import { getPresetStatusIcon } from '@comps/_shared/constants'
import { useClosableState, useDebounceTimeout, usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { betterDisplayName, cls, withDefaults, withFallbackCloneElement } from '@comps/_shared/utils'
import { isNullish } from '@internal/utils'
import { forwardRef, useEffect, useMemo } from 'react'

import type { NotificationNoticeProps } from './props'

import useFormatClass from './hooks/use-format-class'
import { defaultNotificationNoticeProps } from './props'

function NotificationNotice(_props: NotificationNoticeProps, _ref: React.ForwardedRef<HTMLDivElement>) {
  const props = withDefaults(_props, defaultNotificationNoticeProps)

  const { message, description, duration, type, showProgress, onClick, onClose } = props

  const prefixCls = usePrefixCls('notification-notice')

  const classNames = useFormatClass(prefixCls, props)

  const styles = useSemanticStyles(props)

  // 需要手动控制,所以这里不能直接使用
  const handler = useDebounceTimeout(duration!, onClose)

  useEffect(handler, [handler])

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()

    e.preventDefault()

    onClose()
  }

  const mergedStatusIcon = useMemo(() => {
    const statusIcon = getPresetStatusIcon(type)

    return withFallbackCloneElement(statusIcon, {
      fallback: <span className={classNames.icon}>{statusIcon}</span>,
      props: _original => ({
        className: cls(_original.className, classNames.icon),
        style: { ..._original.style, ...styles.icon },
      }),
    })
  }, [classNames.icon, styles.icon, type])

  const [_, mergedCloseIcon] = useClosableState(props, undefined, {
    closeIconRender: icon => (
      <button
        className={classNames.closeBtn}
        style={styles.closeBtn}
        tabIndex={0}
        type="button"
        onClick={handleClose}
      >
        {icon}
      </button>
    ),
  })

  return (
    <div
      ref={_ref}
      className={classNames.root}
      style={styles.root}
      onClick={onClick}
    >
      {mergedStatusIcon}
      <div className={classNames.content}>
        <div className={classNames.message}>{message}</div>
        {!isNullish(description) && <div className={classNames.description}>{description}</div>}
      </div>
      {mergedCloseIcon}
      {!!showProgress && <progress className={classNames.progress} style={styles.progress} />}
    </div>
  )
}

betterDisplayName(NotificationNotice, 'Notification.Notice')

export default forwardRef(NotificationNotice)
