import { Project } from 'ts-morph'

import { constants, formatPkgJson } from '../utils'
import replaceSpecifier from './replace-specifier'
import resolveDefinition from './resolve-definition'

/**
 * 跨package解析是会有路径问题的,
 * 能否在components里面解析,然后输出到site呢?
 */

export default async function gen() {
  const project = new Project({ skipAddingFilesFromTsConfig: true })

  const { externals } = await formatPkgJson(constants.resolveComps('./package.json'))

  const filePath = constants.resolveComps('src', 'button', 'props.ts')

  // 替换所有的 alias
  replaceSpecifier(project, externals, constants.siteAlias)

  // 解析目标类型
  const result = resolveDefinition(project, filePath, 'ButtonProps2')

  console.log(result)
}
