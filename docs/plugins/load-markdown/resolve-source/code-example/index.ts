import type { TokensList } from 'marked'

import type { CustomPluginStore, ExampleItem } from '../../interface'

import { updateVirtualModules } from '../../utils/virtual-module'
import formatAttrs from '../format-attrs'
import formatModuleId from '../format-id'
import formatCompName from '../format-name'
import formatFilePath from '../format-path'
import formatSalt from '../format-salt'
import formatContent from './format-content'

export default function parseCodeExample(
  tokens: TokensList,
  fileId: string,
  _store: CustomPluginStore,
) {
  const examples = tokens.reduce((result, token) => {
    Array.from(token.raw.trim().matchAll(/^<example([^]*?)\/>$/gi))
      .forEach((matched) => {
        const attrs = formatAttrs(matched[1])

        if (!attrs.src || result.find(e => e.src === attrs.src)) return

        const example = { ...attrs } as unknown as ExampleItem

        example.filePath = formatFilePath(attrs.src, fileId)

        example.compName = formatCompName(example.filePath)

        example.moduleId = formatModuleId(example.filePath, _store)

        const [sourceCode, rawText, desc] = formatContent(example.filePath)

        const salt = formatSalt(sourceCode, example.moduleId, _store)

        result.push({ ...example, sourceCode, rawText, desc, salt })
      })
    return result
  }, [] as ExampleItem[])

  updateVirtualModules(examples, _store)

  return {
    title: '代码演示',
    files: examples.map(item => item.filePath),
    imports: examples
      .map(item => `import ${item.compName} from '${item.moduleId}?salt=${item.salt}'`)
      .join('\n'),
    code: `<CodeBlockList items={[
      ${examples.map(item => `{
          desc: ${JSON.stringify(item.desc)},
          disabled: ${JSON.stringify(!!item.disabled)},
          element: <${item.compName} />,
          rawText: ${JSON.stringify(item.rawText)},
          title: ${JSON.stringify(item.title)},
        }`).join(',\n')}
    ]} />`,
  }
}
