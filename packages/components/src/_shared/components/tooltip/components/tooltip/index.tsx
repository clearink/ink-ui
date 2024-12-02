import Overlay from '@comps/_shared/components/overlay'
import ShouldUpdate from '@comps/_shared/components/should-update'
import { useSemanticStyles, useThrottleFrame, useThrottleTick } from '@comps/_shared/hooks'
import { betterDisplayName, cls, withDefaults } from '@comps/_shared/utils'
import { batch } from '@internal/utils'
import { useMemo } from 'react'

import type { InternalToolTipContextState } from '../../_shared/contexts'
import type { InternalTooltipProps } from './props'

import { InternalToolTipContext } from '../../_shared/contexts'
import TooltipArrow from '../arrow'
import TooltipContent from '../content'
import TooltipTrigger from '../trigger'
import useTooltip from './hooks/use-tooltip'
import useTooltipEvents from './hooks/use-tooltip-events'
import useTooltipOpen from './hooks/use-tooltip-open'
import useWatchCoords from './hooks/use-watch-coords'
import { defaultInternalTooltipProps } from './props'

function InternalTooltip(_props: InternalTooltipProps) {
  const props = withDefaults(_props, defaultInternalTooltipProps)

  const {
    arrow,
    trigger,
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

  const parentContext = InternalToolTipContext.useState()

  const styles = useSemanticStyles(props)

  const {
    $popup,
    $trigger,
    $chain,
    arrowCoords,
    popupCoords,
    currentContext,
    updateCoords,
  } = useTooltip()

  const [isOpen, setIsOpen] = useTooltipOpen(props)

  const tooltipContext = useMemo<InternalToolTipContextState>(() => {
    return batch(parentContext, currentContext)
  }, [currentContext, parentContext])

  const [triggerEvents, popupEvents] = useTooltipEvents({
    $popup,
    $trigger,
    $chain,
    trigger,
    setIsOpen,
  })

  const onUpdate = () => { isOpen && updateCoords(props) }

  useWatchCoords(props, onUpdate)

  const handleResize = useThrottleTick(onUpdate)

  const handleScroll = useThrottleFrame(onUpdate)

  return (
    <>
      <TooltipTrigger
        ref={$trigger}
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
              ref={$popup}
              className={classNames.wrapper}
              style={{ ...styles.wrapper, ...popupCoords }}
            >
              <div
                ref={motion}
                className={cls(className, classNames.root, attrs.className)}
                style={{ ...styles.root, ...attrs.style }}
                {...popupEvents}
              >
                <TooltipArrow
                  className={classNames.arrow}
                  style={{ ...styles.arrow, ...arrowCoords }}
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
