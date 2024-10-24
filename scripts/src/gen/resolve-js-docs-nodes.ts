import type { PropertySignature } from 'ts-morph'

export default function resolveJsDocsNodes(property: PropertySignature, tagName: string) {
  let shouldContinue = false

  const jsDocsMapping = property.getJsDocs().flatMap(node => node.getTags()).reduce((result, node) => {
    const name = node.getTagName()

    result[name] = node.getCommentText()

    shouldContinue = shouldContinue || name === tagName

    return result
  }, {} as Record<string, string | undefined>)

  return { jsDocsMapping, shouldContinue }
}
