import type { CustomPluginStore } from '../interface'

import md5 from '../utils/md5'

export default function formatModuleId(filePath: string, _store: CustomPluginStore) {
  return `${_store.prefix}${md5(filePath)}`
}
