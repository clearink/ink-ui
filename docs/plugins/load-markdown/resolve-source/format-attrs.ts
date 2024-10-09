export default function formatAttrs(input: string) {
  return input
    .split(/\s+/)
    .reduce((result, sequence) => {
      if (!sequence) return result

      const [name, value] = sequence.split('=')

      result[name] = value ? value.replace(/^['"]|['"]$/g, '') : 'true'

      return result
    }, {} as Record<string, string>)
}
