import type { TokensList } from 'marked'

import type { CustomPluginStore, SemanticItem } from '../../interface'

import { updateVirtualModules } from '../../utils/virtual-module'
import formatAttrs from '../format-attrs'
import formatId from '../format-id'
import formatName from '../format-name'
import formatPath from '../format-path'
import formatSalt from '../format-salt'
import formatContent from './format-content'

export default function parseSemanticDom(
  tokens: TokensList,
  fileId: string,
  _store: CustomPluginStore,
) {
  const semantics = tokens.reduce((result, token) => {
    Array.from(token.raw.trim().matchAll(/^<semantic([^]*?)\/>$/gi))
      .forEach((matched) => {
        const attrs = formatAttrs(matched[1])

        if (!attrs.src || result.find(_ => _.src === attrs.src)) return

        const semantic = { ...attrs } as unknown as SemanticItem

        semantic.filePath = formatPath(attrs.src, fileId)

        semantic.compName = formatName(semantic.filePath)

        semantic.moduleId = formatId(semantic.filePath, _store)

        const sourceCode = formatContent(semantic.filePath)

        const salt = formatSalt(sourceCode, semantic.moduleId, _store)

        result.push({ ...semantic, sourceCode, salt })
      })
    return result
  }, [] as SemanticItem[])

  updateVirtualModules(semantics, _store)

  return {
    title: 'Semantic DOM',
    files: semantics.map(item => item.filePath),
    imports: semantics
      .map(item => `import ${item.compName} from '${item.moduleId}?salt=${item.salt}'`)
      .join('\n'),
    code: semantics
      .map(item => `<SemanticBlock><${item.compName} /></SemanticBlock>`)
      .join('\n'),
  }
}
