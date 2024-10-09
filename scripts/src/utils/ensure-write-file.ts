import fse from 'fs-extra'

export async function ensureWriteFile(filePath: string, data: string) {
  await fse.ensureFile(filePath)

  return fse.writeFile(filePath, data, { encoding: 'utf-8' })
}
