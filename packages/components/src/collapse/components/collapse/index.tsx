import type { ForwardedRef } from 'react'

import { useControllableState, useEvent, usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { betterDisplayName, withDefaults } from '@comps/_shared/utils'
import { isArray, isUndefined } from '@internal/utils'
import { forwardRef, useMemo } from 'react'

import type { CollapseContextState } from '../../_shared/contexts'
import type { ExpandedName } from '../../_shared/props'
import type { CollapseProps } from './props'

import { CollapseContext } from '../../_shared/contexts'
import CollapseItem from '../collapse-item'
import useFormatClass from './hooks/use-format-class'
import { defaultCollapseProps } from './props'
import getExpandedNames from './utils/get-expanded-names'

function Collapse(_props: CollapseProps, ref: ForwardedRef<HTMLDivElement>) {
  const props = withDefaults(_props, defaultCollapseProps)

  const {
    accordion,
    children,
    collapsible,
    defaultExpandedNames: _default,
    disabled,
    expandIcon,
    expandIconPosition,
    expandedNames: _names,
    items,
    keepMounted,
    onChange,
    unmountOnExit,
  } = props

  const styles = useSemanticStyles(props)

  const prefixCls = usePrefixCls('collapse')

  const classNames = useFormatClass(prefixCls, props)

  const [expandedNames, setExpandedNames] = useControllableState({
    defaultValue: () => getExpandedNames(_default, accordion),
    value: isUndefined(_names) ? undefined : getExpandedNames(_names, accordion),
  })

  const onItemClick = useEvent((name: ExpandedName) => {
    let names = expandedNames.concat()

    const index = names.indexOf(name)

    const isExpanded = index > -1

    if (accordion) names = isExpanded ? [] : [name]
    else if (isExpanded) names.splice(index, 1)
    else names.push(name)

    setExpandedNames(names)

    onChange?.(name, names)
  })

  const collapseContext = useMemo<CollapseContextState>(
    () => ({
      accordion,
      collapsible,
      disabled,
      expandIcon,
      expandIconPosition,
      expandedNames,
      keepMounted,
      onItemClick,
      unmountOnExit,
    }),
    [
      accordion,
      expandIcon,
      expandIconPosition,
      expandedNames,
      keepMounted,
      onItemClick,
      unmountOnExit,
      collapsible,
      disabled,
    ],
  )

  return (
    <div
      ref={ref}
      className={classNames.root}
      style={styles.root}
      role={accordion ? 'tablist' : undefined}
    >
      <CollapseContext.Provider value={collapseContext}>
        {isArray(items)
          ? items.map(item => <CollapseItem {...item} key={item.name} />)
          : children}
      </CollapseContext.Provider>
    </div>
  )
}

betterDisplayName(Collapse)

export default forwardRef(Collapse) as <K extends ExpandedName>(
  props: CollapseProps<K> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element