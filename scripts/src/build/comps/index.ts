import fse from 'fs-extra'
import ora from 'ora'

import { constants, logger } from '../../utils'
import buildCode from './code'
import buildCss from './css'
import buildDts from './dts'

export default async function build() {
  logger.info('🚀 starting build core library...')

  if (constants.cwd !== constants.comps)
    throw new Error('is not components package')

  // clean dist
  {
    const spinner = ora(logger.info('starting clean dist', false)).start()
    await Promise.all([
      fse.remove(constants.esm),
      fse.remove(constants.cjs),
      fse.remove(constants.umd),
    ])
    spinner.succeed(logger.success('clean dist successfully!', false))
  }

  // build source files
  {
    const spinner = ora(logger.info('starting build source files', false)).start()
    await Promise.all([buildCode(), buildDts(), buildCss()])
    spinner.succeed(logger.success('build source files successfully!', false))
  }

  logger.success('🎊 build core library successfully!')
}
