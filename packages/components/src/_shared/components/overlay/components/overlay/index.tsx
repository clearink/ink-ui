import { useSemanticStyles } from '@comps/_shared/hooks'
import { betterDisplayName, cls, withDefaults } from '@comps/_shared/utils'
import { type ForwardedRef, forwardRef } from 'react'

import type { OverlayProps, OverlayRef } from './props'

import Portal from '../../../portal'
import { CssTransition } from '../../../transition'
import useOverlayLevel from './hooks/use-overlay-level'
import useOverlayStore from './hooks/use-overlay-store'
import { defaultOverlayProps } from './props'

function Overlay(_props: OverlayProps, ref: ForwardedRef<OverlayRef>) {
  const props = withDefaults(_props, defaultOverlayProps)

  const {
    isOpen,
    keepMounted,
    getContainer,
    unmountOnExit,
    className,
    children,
    mask,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    classNames = {},
    transitions = {},
  } = props

  const styles = useSemanticStyles(props)

  const { returnEarly, states, actions } = useOverlayStore(props)

  const level = useOverlayLevel(states.isMounted, props)

  // TODO: lock scroll

  if (returnEarly || !states.isMounted) return null

  return (
    <Portal ref={ref} getContainer={getContainer}>
      <div
        className={cls(className, classNames.root)}
        style={withDefaults(styles.root || {}, { position: 'absolute', zIndex: level })}
      >
        {!!mask && (
          <CssTransition appear classNames={transitions.mask} when={isOpen}>
            <div className={classNames.mask} style={styles.mask} aria-hidden="true" />
          </CssTransition>
        )}
        <CssTransition
          ref={states.$content}
          appear
          classNames={transitions.content}
          when={isOpen}
          onEnter={(el, appearing) => {
            onEnter?.(el, appearing)
            actions.setIsMounted(true)
          }}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
          onExiting={onExiting}
          onExited={(el) => {
            onExited?.(el)
            actions.setIsMounted(!(unmountOnExit && !keepMounted))
          }}
        >
          {children}
        </CssTransition>
      </div>
    </Portal>
  )
}

betterDisplayName(Overlay)

export default forwardRef(Overlay)
