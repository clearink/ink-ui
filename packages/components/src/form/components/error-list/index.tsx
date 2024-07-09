import { GroupTransition } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { cls } from '@comps/_shared/utils'

import useFormatExplains from './hooks/use_format_explains'
import { type FormErrorListProps } from './props'
import handlers from './utils/transition_handlers'

export default function FormErrorList(props: FormErrorListProps) {
  const { className, onExitComplete } = props

  const prefixCls = usePrefixCls('form-item-message')

  const explains = useFormatExplains(props)

  return (
    <GroupTransition
      appear
      className={cls(prefixCls, className)}
      name={`${prefixCls}-error`}
      onExitComplete={onExitComplete}
      tag="div"
      {...handlers}
    >
      {explains.map(item => (
        <div
          className={cls({
            [`${prefixCls}--${item.status}`]: item.status,
          })}
          key={item.key}
        >
          {item.value}
        </div>
      ))}
    </GroupTransition>
  )
}
