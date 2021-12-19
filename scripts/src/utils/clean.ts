import fse from 'fs-extra'

export function clean(...files: string[]) {
  return Promise.all(files.map(file => fse.remove(file)))
}
