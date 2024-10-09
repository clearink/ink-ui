import fse from 'fs-extra'
import ora from 'ora'

import { constants, logger } from '../../utils'
import buildCode from './code'
import buildDts from './dts'
import genIcons from './gen'

export default async function build() {
  logger.info('|-----------------------------------|')
  logger.info('|                                   |')
  logger.info('|  starting build icons library...  |')
  logger.info('|                                   |')
  logger.info('|-----------------------------------|\n')

  if (constants.cwd !== constants.icons) {
    throw new Error('is not icons package')
  }

  // clean dist, internal, icons files
  {
    const spinner = ora(logger.info('clean dist and internal files\n', false)).start()
    await Promise.all([
      fse.remove(constants.esm),
      fse.remove(constants.cjs),
      fse.remove(constants.umd),
      fse.remove(constants.resolveSrc('_internal')),
      fse.remove(constants.resolveSrc('icons')),
    ])
    spinner.succeed(logger.success('clean dist and internal files successfully !\n', false))
    spinner.clear()
  }

  // copy files
  {
    const spinner = ora(logger.info('copy source files to icons\n', false)).start()
    await Promise.all([
      fse.copy(constants.resolveUtils('src'), constants.resolveSrc('_internal/utils')),
      fse.copy(constants.resolveTypes('src'), constants.resolveSrc('_internal/types')),
    ])
    spinner.succeed(logger.success('copy source files successfully!\n', false))
    spinner.clear()
  }

  // generate icon files
  {
    const spinner = ora(logger.info('generate icon files\n', false)).start()
    await genIcons()
    spinner.succeed(logger.success('generate icon files successfully !\n', false))
    spinner.clear()
  }

  // build source files
  {
    const spinner = ora(logger.info('starting build source files\n', false)).start()
    await Promise.all([buildCode(), buildDts()])
    spinner.succeed(logger.success('build source files successfully!\n', false))
    spinner.clear()
  }

  // clean copy files
  {
    const spinner = ora(logger.info('clean copy files\n', false)).start()
    await fse.remove(constants.resolveSrc('_internal'))
    spinner.succeed(logger.success('clean copy files successfully!\n', false))
    spinner.clear()
  }

  logger.success('build icons library successfully !')
}
