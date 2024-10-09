import type { ForwardedRef } from 'react'

import { CssTransition } from '@comps/_shared/components'
import { usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { betterDisplayName, withDefaults } from '@comps/_shared/utils'
import { SizeContext } from '@comps/config-provider/_shared/contexts'
import { forwardRef, useMemo } from 'react'

import type { SegmentedProps } from './props'

import SegmentedItem from '../segmented-item'
import useFormatClass from './hooks/use-format-class'
import useSegmentedStore from './hooks/use-segmented-store'
import useSegmentedValue from './hooks/use-segmented-value'
import { defaultSegmentedProps } from './props'
import { normalizeOptions } from './utils/helpers'

function Segmented(_props: SegmentedProps, _ref: ForwardedRef<HTMLDivElement>) {
  const props = withDefaults(_props, {
    ...defaultSegmentedProps,
    size: SizeContext.useState(),
  })

  const { disabled, options: _options } = props

  const prefixCls = usePrefixCls('segmented')

  const classNames = useFormatClass(prefixCls, props)

  const styles = useSemanticStyles(props)

  const options = useMemo(() => normalizeOptions(_options), [_options])

  const [active, onChange] = useSegmentedValue(props, options)

  const { returnEarly, states, actions } = useSegmentedStore(active)

  if (returnEarly) return null

  return (
    <div ref={_ref} className={classNames.root} style={styles.root}>
      <div ref={states.$group} className={classNames.group} style={styles.group}>
        {/* TODO: 舍弃该实现方式,采用 shardLayout方式实现 */}
        {states.showThumb && (
          <CssTransition
            appear
            when
            timeouts={3000}
            classNames={`${prefixCls}-thumb-motion`}
            onEnter={actions.handleEnter}
            onEntering={actions.handleEntering}
            onEntered={actions.handleEntered}
          >
            <div ref={states.$thumb} className={classNames.thumb} style={styles.thumb} />
          </CssTransition>
        )}
        {options.map(item => (
          <SegmentedItem
            {...item}
            key={item.value}
            ref={(el) => { actions.setItem(item.value, el) }}
            checked={active === item.value}
            disabled={disabled || item.disabled}
            showThumb={states.showThumb}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  )
}

betterDisplayName(Segmented)

export default forwardRef(Segmented) as <T>(
  props: React.RefAttributes<HTMLDivElement> & SegmentedProps<T>,
) => JSX.Element
