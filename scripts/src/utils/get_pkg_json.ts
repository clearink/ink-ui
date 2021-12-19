import fse from 'fs-extra'

import { constants } from './constants'

export async function getPkgJson() {
  return fse.readJson(constants.resolveCwd('./package.json'))
}
