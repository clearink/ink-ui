import type { FocusTrapRef } from '@comps/_shared/components'
import type { KeyboardEvent, SyntheticEvent } from 'react'

import { FocusTrap, Overlay } from '@comps/_shared/components'
import { keyboard } from '@comps/_shared/constants'
import { useClosableState, usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { betterDisplayName, cls, hideElement, showElement, withDefaults } from '@comps/_shared/utils'
import Button from '@comps/button'
import { ConfigContext } from '@comps/config-provider/_shared/contexts'
import { fallback, isFunction, isNull, isNullish, pick } from '@internal/utils'
import { useEffect, useId, useRef } from 'react'

import type { ModalProps } from './props'

import useFormatClass from './hooks/use-format-class'
import { defaultModalProps } from './props'

const included = [
  'getContainer',
  'mask',
  'isOpen',
  'transitions',
  'keepMounted',
  'unmountOnExit',
  'zIndex',
] as const

function Modal(_props: ModalProps) {
  const props = withDefaults(_props, defaultModalProps)

  const { children, footer, modalRender, onCancel, onOk, isOpen, title, transitions = {} } = props

  const { modal: modalContext } = ConfigContext.useState()

  useEffect(() => {
    console.log('effect')
  }, [])

  const $wrapper = useRef<HTMLDivElement | null>(null)

  const $trap = useRef<FocusTrapRef | null>(null)

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

  const contentNode = (
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
      {!isNull(footer) && (
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
        content: fallback(transitions.content, `${prefix}-zoom-in`),
        mask: fallback(transitions.mask, `${prefix}-fade-in`),
      }}
      onEnter={() => {
        showElement($wrapper.current)
        $trap.current?.focus()
        // el.$set('transform-origin', `${300}px ${450}px`)
      }}
      onEntered={() => {
        // el.$remove('transform-origin')
      }}
      onExit={() => {
        // el.$set('transform-origin', `${300}px ${450}px`)
      }}
      onExited={() => {
        hideElement($wrapper.current)
        // el.$remove('transform-origin')
      }}
    >
      {(motion, attrs) => (
        <div
          ref={$wrapper}
          className={`${prefixCls}-wrapper`}
          tabIndex={-1}
          onClick={onMaskClick}
          onKeyDown={onEscapeDown}
        >
          <div
            ref={motion}
            className={cls(classNames.root, attrs.className)}
            style={{ ...styles.root, ...attrs.style }}
            aria-labelledby={title ? ariaId : undefined}
            aria-modal="true"
            role="dialog"
          >
            <FocusTrap ref={$trap} active={isOpen} onExit={onTrapExit}>
              {isFunction(modalRender) ? modalRender(contentNode) : contentNode}
            </FocusTrap>
          </div>
        </div>
      )}
    </Overlay>
  )
}

betterDisplayName(Modal)

export default Modal
