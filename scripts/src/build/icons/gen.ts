import { glob } from 'fast-glob'
import { XMLParser } from 'fast-xml-parser'
import fse from 'fs-extra'
import path from 'node:path'

import { buildIconSource, constants, formatIconName, optimizeIcon, removeExtname, safeWrite, toBase64 } from '../../utils'

export default async function genIcons() {
  const assets = constants.resolveIcons('assets')

  const iconsDir = constants.resolveIcons('src/icons')

  const options = { cwd: assets, ignore: constants.ignoreFiles }

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: constants.iconAttrNamePrefix,
  })

  const iconEntries: string[] = []

  const promises = glob.sync('**/*.svg', options).map(async (file) => {
    const iconName = formatIconName(file)

    const source = await fse.readFile(path.resolve(assets, file), { encoding: 'utf8' })

    iconEntries.push(`export { default as ${iconName} } from './${iconName}'`)

    const result = buildIconSource({
      base64: toBase64(source),
      filename: removeExtname(path.basename(file)),
      iconName,
      dirname: path.dirname(file),
      json: parser.parse(optimizeIcon(source).data),
    })

    return safeWrite(path.resolve(iconsDir, `${iconName}.tsx`), result)
  })

  await Promise.all(promises)

  const content = `/* eslint-disable */\n\n${iconEntries.join('\n')}`
  await safeWrite(path.resolve(iconsDir, 'index.tsx'), content)
}
