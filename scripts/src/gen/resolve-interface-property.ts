import type { PropertySignature } from 'ts-morph'

import resolveJsDocsNodes from './resolve-js-docs-nodes'
import resolveSignatureType from './resolve-signature-type'

// 解析 interface 自身的属性
export default function resolveInterfaceProperty(property: PropertySignature) {
  // 判断是否应该解析
  const { jsDocsMapping, shouldContinue } = resolveJsDocsNodes(property, 'zh')

  if (!shouldContinue) return

  // TODO: 优化定义
  const item = {
    // 描述, 默认值, 版本 都在 tags 中
    ...jsDocsMapping,
    // 属性
    name: property.getName(),
    // 类型
    type: resolveSignatureType(property.getType()),
    // 必填
    required: !property.hasQuestionToken(),
  }

  return item
}
