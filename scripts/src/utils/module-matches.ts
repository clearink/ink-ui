export function moduleMatches(pattern: RegExp | string, value: string) {
  if (pattern instanceof RegExp) return pattern.test(value)

  if (pattern.length > value.length) return false

  return pattern === value || value.startsWith(`${pattern}/`)
}
