import { GroupTransition } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { cls } from '@comps/_shared/utils'

import type { FormErrorListProps } from './props'

import useFormatExplains from './hooks/use_format_explains'
import handlers from './utils/transition_handlers'

export default function FormErrorList(props: FormErrorListProps) {
  const { className, onExitComplete } = props

  const prefixCls = usePrefixCls('form-item-message')

  const explains = useFormatExplains(props)

  return (
    <div className={cls(prefixCls, className)}>
      <GroupTransition
        appear
        name={`${prefixCls}-motion`}
        onExitComplete={onExitComplete}
        {...handlers}
      >
        {explains.map(item => (
          <div key={item.key} className={`${prefixCls}--${item.status}`}>
            {item.value}
          </div>
        ))}
      </GroupTransition>
    </div>
  )
}
