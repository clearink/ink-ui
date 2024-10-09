import { FocusTrap, Overlay } from '@comps/_shared/components'
import { keyboard } from '@comps/_shared/constants'
import { ConfigContext } from '@comps/_shared/contexts'
import { useClosableState, usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { attachDisplayName, hideElement, showElement, withDefaults } from '@comps/_shared/utils'
import Button from '@comps/button'
import { fallback, isFunction, isNullish, pick } from '@internal/utils'
import { type KeyboardEvent, type SyntheticEvent, useId, useRef } from 'react'

import useFormatClass from './hooks/use-format-class'
import { type ModalProps, defaultModalProps } from './props'

const included = [
  'getContainer',
  'mask',
  'open',
  'transitions',
  'keepMounted',
  'unmountOnExit',
  'zIndex',
] as const

function Modal(_props: ModalProps) {
  const props = withDefaults(_props, defaultModalProps)

  const { children, footer, modalRender, onCancel, onOk, open, title, transitions = {} } = props

  const { modal: modalContext } = ConfigContext.useState()

  const $wrapper = useRef<HTMLDivElement | null>(null)

  const ariaId = useId()

  const prefix = usePrefixCls()

  const prefixCls = `${prefix}-modal`

  const classNames = useFormatClass(prefixCls, props, modalContext)

  const styles = useSemanticStyles(props, modalContext)

  const [_, mergedCloseIcon] = useClosableState(props, modalContext, {
    closeIconRender: icon => (
      <button
        className={classNames.closeBtn}
        style={styles.closeBtn}
        aria-label="close"
        type="button"
        onClick={onCancel}
      >
        {icon}
      </button>
    ),
  })

  const onEscapeDown = !props.closeOnEscape
    ? undefined
    : (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== keyboard.esc) return

        e.stopPropagation()

        onCancel?.()
      }

  const onMaskClick
    = !props.maskClosable || !props.mask
      ? undefined
      : (e: SyntheticEvent) => {
          if (e.target && e.target === $wrapper.current) onCancel?.()
        }

  const onTrapExit = !props.returnFocus
    ? undefined
    : (node: Element | null) => {
        const el = node as HTMLElement | null

        if (el && isFunction(el.focus)) el.focus()
      }

  const renderNode = (
    <div className={classNames.main} style={styles.main}>
      {mergedCloseIcon}
      <div className={classNames.header} style={styles.header}>
        {!isNullish(title) && (
          <span className={`${prefixCls}__title`} id={ariaId}>
            {title}
          </span>
        )}
      </div>
      <div className={classNames.body} style={styles.body}>
        {children}
      </div>
      {!isNullish(footer) && (
        <div className={classNames.footer} style={styles.footer}>
          <Button onClick={onCancel}>取消</Button>
          <Button variant="filled" onClick={onOk}>
            确定
          </Button>
        </div>
      )}
    </div>
  )

  return (
    <Overlay
      {...pick(props, included)}
      classNames={{ mask: `${prefixCls}-mask` }}
      transitions={{
        content: fallback(transitions.content, `${prefix}-slide-bottom`),
        mask: fallback(transitions.mask, `${prefix}-fade-in`),
      }}
      onEnter={() => { showElement($wrapper.current) }}
      onExited={() => { hideElement($wrapper.current) }}
    >
      {ref => (
        <div
          ref={$wrapper}
          className={`${prefixCls}-wrapper`}
          tabIndex={-1}
          onClick={onMaskClick}
          onKeyDown={onEscapeDown}
        >
          <div
            ref={ref}
            className={classNames.root}
            style={styles.root}
            aria-labelledby={title ? ariaId : undefined}
            aria-modal="true"
            role="dialog"
          >
            <FocusTrap active={open} onExit={onTrapExit}>
              {isFunction(modalRender) ? modalRender(renderNode) : renderNode}
            </FocusTrap>
          </div>
        </div>
      )}
    </Overlay>
  )
}

attachDisplayName(Modal)

export default Modal
