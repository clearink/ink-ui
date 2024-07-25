import type { WithStyleHelpers } from '@comps/_shared/components'

type E = WithStyleHelpers<HTMLDivElement>

const handlers = {
  onEnter: (el: E) => { el.$set('height', '0px') },
  onEntering: (el: E) => { el.$set('height', `${el.scrollHeight}px`) },
  onEntered: (el: E) => { el.$remove('height') },
  onEnterCancel: (el: E) => { el.$set('height', `${el.scrollHeight}px`) },
  onExit: (el: E) => { el.$set('height', `${el.scrollHeight}px`) },
  onExiting: (el: E) => { el.$set('height', '0px') },
  onExitCancel: (el: E) => { el.$set('height', `${el.scrollHeight}px`) },
}

export default handlers
