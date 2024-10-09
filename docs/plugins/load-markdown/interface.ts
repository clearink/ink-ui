export interface CustomPluginStore {
  prefix: string
  uniqueId: number
  // 存放 virtual module
  modules: Record<string, { salt: string, sourceCode: string }>
}

export interface ExampleItem {
  src: string
  /** 完整路径 */
  filePath: string
  /** 组件名称 */
  compName: string
  /** 标题 */
  title: string
  /** 模块Id */
  moduleId: string
  /** salt */
  salt: string
  /** 源代码 */
  sourceCode: string
  /** 原始文本 */
  rawText: string
  /** 描述 */
  desc: Record<string, string>
  /** 是否禁用 */
  disabled: boolean
}

export interface SemanticItem {
  src: string
  /** 完整路径 */
  filePath: string
  /** 组件名称 */
  compName: string
  /** 模块Id */
  moduleId: string
  /** salt */
  salt: string
  /** 源代码 */
  sourceCode: string
  /** 是否禁用 */
  disabled: boolean
}

export interface FormattedSection {
  code: string
  title: string
  imports?: string
  files?: string[]
}
