import path from 'node:path'

export function removeExtname(file: string) {
  return file.slice(0, -path.extname(file).length)
}
