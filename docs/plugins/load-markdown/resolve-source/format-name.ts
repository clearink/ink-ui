import path from 'node:path'

function capitalize<T extends string>(str: T) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}` as Capitalize<T>
}

export default function formatCompName(filePath: string) {
  return path
    .basename(filePath)
    .slice(0, -path.extname(filePath).length)
    .split(/[-_]/)
    .filter(Boolean)
    .reduce((result, str) => `${result}${capitalize(str)}`, '')
}
