import type { VoidFn } from '@internal/types'

export function makeTimeout(ms: number, callback: VoidFn) {
  const id = setTimeout(callback, ms) as unknown as number

  return () => { clearTimeout(id) }
}
