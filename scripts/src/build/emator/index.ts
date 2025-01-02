import fse from 'fs-extra'
import ora from 'ora'

import { constants, logger } from '../../utils'
import buildCode from './code'
import buildDts from './dts'

export default async function build() {
  logger.info('|-------------------------------------|')
  logger.info('|                                     |')
  logger.info('|   starting build emator library...  |')
  logger.info('|                                     |')
  logger.info('|-------------------------------------|\n')

  if (constants.cwd !== constants.emator) {
    throw new Error('is not emator package')
  }

  // clean dist
  {
    const spinner = ora(logger.info('clean dist\n', false)).start()
    await Promise.all([
      fse.remove(constants.esm),
      fse.remove(constants.cjs),
      fse.remove(constants.umd),
    ])
    spinner.succeed(logger.success('clean dist successfully !\n', false))
    spinner.clear()
  }

  // build source files
  {
    const spinner = ora(logger.info('starting build source files\n', false)).start()
    await Promise.all([buildCode(), buildDts()])
    spinner.succeed(logger.success('build source files successfully!\n', false))
    spinner.clear()
  }

  logger.success('build emator library successfully !')
}
