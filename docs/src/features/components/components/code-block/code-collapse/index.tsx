import { CssTransition } from '@comps/_shared/components'
import MarkedBlock from '@shared/components/markdown-block'

import styles from './style.module.scss'

export interface CodeCollapseProps {
  rawText: string
  isOpen: boolean
}

export default function CodeCollapse(props: CodeCollapseProps) {
  const { isOpen, rawText } = props
  return (
    <CssTransition
      when={isOpen}
      classNames="code-collapse-motion"
      onEnter={(el) => { el.$set('height', '0px') }}
      onEntering={(el) => { el.$set('height', `${el.scrollHeight}px`) }}
      onEntered={(el) => { el.$remove('height') }}
      onEnterCancel={(el) => { el.$set('height', `${el.offsetHeight}px`) }}
      onExit={(el) => { el.$set('height', `${el.offsetHeight}px`) }}
      onExiting={(el) => { el.$set('height', '0px') }}
      onExited={(el) => { el.$remove('height') }}
      onExitCancel={(el) => { el.$set('height', `${el.offsetHeight}px`) }}
    >
      <div>
        <MarkedBlock rawText={rawText} className={styles.code_collapse__content} />
      </div>
    </CssTransition>
  )
}
