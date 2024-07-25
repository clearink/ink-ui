export function showElement(el: HTMLElement | null, display = '') {
  el && el.style.setProperty('display', display === 'none' ? '' : display)
}

export function hideElement(el: HTMLElement | null) {
  el && el.style.setProperty('display', 'none')
}
