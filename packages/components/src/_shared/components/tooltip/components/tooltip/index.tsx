import Overlay from '@comps/_shared/components/overlay'
import ShouldUpdate from '@comps/_shared/components/should-update'
import { useSemanticStyles, useThrottleFrame, useThrottleTick } from '@comps/_shared/hooks'
import { betterDisplayName, cls, withDefaults } from '@comps/_shared/utils'
import { batch, noop } from '@internal/utils'
import { useMemo } from 'react'

import type { InternalToolTipContextState } from '../../_shared/contexts'
import type { InternalTooltipProps } from './props'

import { InternalToolTipContext } from '../../_shared/contexts'
import TooltipArrow from '../arrow'
import TooltipContent from '../content'
import TooltipTrigger from '../trigger'
import useTooltipEvents from './hooks/use-tooltip-events'
import useTooltipOpen from './hooks/use-tooltip-open'
import useTooltipStore from './hooks/use-tooltip-store'
import useWatchCoords from './hooks/use-watch-coords'
import { defaultInternalTooltipProps } from './props'

function InternalTooltip(_props: InternalTooltipProps) {
  const props = withDefaults(_props, defaultInternalTooltipProps)

  const {
    arrow,
    children,
    className,
    classNames = {},
    content,
    fresh,
    getContainer,
    keepMounted,
    transition,
    unmountOnExit,
    // overlay
    zIndex,
  } = props

  const styles = useSemanticStyles(props)

  const [isOpen, setIsOpen] = useTooltipOpen(props)

  const { actions, states } = useTooltipStore()

  const parentContext = InternalToolTipContext.useState()

  const tooltipContext = useMemo<InternalToolTipContextState>(() => {
    return batch(parentContext, (el) => {
      if (!el) return noop

      actions.appendPopupItem(el)

      return () => { actions.removePopupItem(el) }
    })
  }, [actions, parentContext])

  const [triggerEvents, popupEvents] = useTooltipEvents(props, states, setIsOpen)

  const onUpdate = () => { isOpen && actions.updateCoords(props) }

  useWatchCoords(props, onUpdate)

  const handleResize = useThrottleTick(onUpdate)

  const handleScroll = useThrottleFrame(onUpdate)

  return (
    <>
      <TooltipTrigger
        ref={states.$trigger}
        events={triggerEvents}
        isOpen={isOpen}
        onResize={handleResize}
        onScroll={handleScroll}
      >
        {children}
      </TooltipTrigger>

      <Overlay
        style={{ left: 0, top: 0 }}
        getContainer={getContainer}
        keepMounted={keepMounted}
        mask={false}
        isOpen={isOpen}
        transitions={{ content: transition }}
        unmountOnExit={unmountOnExit}
        zIndex={zIndex}
      >
        {(motion, attrs) => (
          <TooltipContent
            isOpen={isOpen}
            onMounted={tooltipContext}
            onResize={handleResize}
            onScroll={handleScroll}
          >
            <div
              ref={states.$popup}
              className={classNames.wrapper}
              style={{ ...styles.wrapper, ...states.popupCoords }}
            >
              <div
                ref={motion}
                className={cls(className, classNames.root, attrs.className)}
                style={{ ...styles.root, ...attrs.style }}
                {...popupEvents}
              >
                <TooltipArrow
                  className={classNames.arrow}
                  style={{ ...styles.arrow, ...states.arrowCoords }}
                  show={!!arrow}
                />
                <InternalToolTipContext.Provider value={tooltipContext}>
                  <ShouldUpdate when={isOpen || !!fresh}>{content}</ShouldUpdate>
                </InternalToolTipContext.Provider>
              </div>
            </div>
          </TooltipContent>
        )}
      </Overlay>
    </>
  )
}

betterDisplayName(InternalTooltip)

export default InternalTooltip
