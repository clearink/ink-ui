import path from 'node:path'

import { removeExtname } from './remove_extname'

export function formatIconName(file: string) {
  const basename = path.basename(file)

  const dirname = path.dirname(file)

  const capitalize = (str: string) => {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
  }

  return removeExtname(basename)
    .split(/-/g)
    .concat(dirname)
    .map(capitalize).join('')
}
