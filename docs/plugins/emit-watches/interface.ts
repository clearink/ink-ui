export interface CustomPluginOptions {
  groups?: string[]
  output?: string
}

export interface WatcherDataItem {
  meta: Record<string, string>
  filePath: string
  routePath: string
  lang?: string
}
