import { marked } from 'marked'

import type { CustomPluginStore, FormattedSection } from '../interface'

import generateSourceText from '../utils/generate'
import groupTokens from '../utils/group-tokens'
import { isHeadingToken } from '../utils/is'
import transformSource from '../utils/transform-source'
import parseCodeExample from './code-example'
import parseSemanticDom from './semantic-dom'

export default function resolveSource(
  content: string,
  fileId: string,
  _store: CustomPluginStore,
) {
  const groups = groupTokens(marked.lexer(content), isHeadingToken)

  const sections = groups.reduce((result, [heading, section]) => {
    const title = heading.text.trim()

    const source = section.map(t => t.raw).join('').trim()

    if (title.toLowerCase() === '代码演示'.toLowerCase()) {
      result.push(parseCodeExample(section, fileId, _store))
    }
    else if (title.toLowerCase() === 'Semantic DOM'.toLowerCase()) {
      result.push(parseSemanticDom(section, fileId, _store))
    }
    else if (source) {
      result.push({ title, code: `<MarkdownBlock rawText={${JSON.stringify(source)}} />` })
    }

    return result
  }, [] as FormattedSection[])

  const sourceText = generateSourceText(sections)

  const sourceCode = transformSource(sourceText)

  const watchFiles = sections.reduce((result, section) => {
    section.files?.forEach((file) => { result.push(file) })
    return result
  }, [] as string[])

  return { watchFiles, sourceCode }
}
