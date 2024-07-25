type E = HTMLDivElement

const handlers = {
  onEnter: (el: E) => {
    el.style.width = '0px'
  },
  onEntering: (el: E) => {
    el.style.width = `${el.scrollWidth}px`
  },
  onEntered: (el: E) => {
    el.style.width = ''
  },
  onEnterCancel: (el: E) => {
    el.style.width = `${el.clientWidth}px`
  },
  onExit: (el: E) => {
    el.style.width = `${el.clientWidth}px`
  },
  onExiting: (el: E) => {
    el.style.width = '0px'
  },
}

export default handlers
