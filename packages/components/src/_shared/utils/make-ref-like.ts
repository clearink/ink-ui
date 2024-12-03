function makeRefLike<T>(initialValue: null | T): { current: null | T }
function makeRefLike<T>(initialValue: T): { current: T } {
  return { current: initialValue }
}

export { makeRefLike }
