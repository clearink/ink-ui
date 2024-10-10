import type { WithStyleHelpers } from '@comps/_shared/components'

type E = WithStyleHelpers<HTMLDivElement>

const handlers = {
  onEnter: (el: E) => { el.$set('width', '0px') },
  onEntering: (el: E) => { el.$set('width', `${el.scrollWidth}px`) },
  onEntered: (el: E) => { el.$remove('width') },
  onEnterCancel: (el: E) => { el.$set('width', `${el.offsetWidth}px`) },
  onExit: (el: E) => { el.$set('width', `${el.offsetWidth}px`) },
  onExiting: (el: E) => { el.$set('width', '0px') },
  onExited: (el: E) => { el.$remove('width') },
  onExitCancel: (el: E) => { el.$set('width', `${el.offsetWidth}px`) },
}

export default handlers
