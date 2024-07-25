import fse from 'fs-extra'

export async function safeWrite(filepath: string, data: string) {
  await fse.ensureFile(filepath)

  return fse.writeFile(filepath, data, { encoding: 'utf-8' })
}
