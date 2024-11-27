export const TabbableQuery = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]:not(slot)',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
  'details>summary:first-of-type',
  'details',
].join(',')

export const guardStyles: React.CSSProperties = {
  position: 'fixed',
  overflow: 'hidden',
  width: 0,
  height: 0,
  top: -1,
  left: -1,
  padding: 0,
}
