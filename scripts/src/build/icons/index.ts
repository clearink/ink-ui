import fse from 'fs-extra'
import ora from 'ora'

import { clean, constants, logger } from '../../utils'
import buildCode from './code'
import buildDts from './dts'
import genIcons from './gen'

export interface BuildIconOptions {
  dts: boolean
  js: boolean
}

export default async function build(options: BuildIconOptions) {
  logger.info('|-----------------------------------|')
  logger.info('|                                   |')
  logger.info('|  starting build icons library...  |')
  logger.info('|                                   |')
  logger.info('|-----------------------------------|\n')

  if (constants.cwd !== constants.icons)
    throw new Error('is not icons package')

  // clean files
  {
    const spinner = ora(logger.info('clean dist and source file\n', false))
    await clean(
      constants.esm,
      constants.cjs,
      constants.umd,
      constants.resolveSrc('_internal'),
      constants.resolveSrc('icons'),
    )
    spinner.succeed(logger.success('clean dist and source files successfully !\n', false))
    spinner.clear()
  }

  await genIcons()

  // copy files
  {
    const spinner = ora(logger.info('copy source files to icons\n', false)).start()
    await fse.copy(constants.resolveUtils('src'), constants.resolveSrc('_internal/utils'))
    await fse.copy(constants.resolveTypes('src'), constants.resolveSrc('_internal/types'))
    spinner.succeed(logger.success('copy source files successfully!\n', false))
    spinner.clear()
  }

  if (options.js) {
    const spinner = ora(logger.info('starting build code\n', false)).start()
    await buildCode()
    spinner.succeed(logger.success('build code successfully!\n', false))
    spinner.clear()
  }

  if (options.dts) {
    const spinner = ora(logger.info('starting build dts\n', false)).start()
    await buildDts()
    spinner.succeed(logger.success('build dts successfully!\n', false))
    spinner.clear()
  }

  // clean copy files
  {
    const spinner = ora(logger.info('clean copy files\n', false)).start()
    await clean(constants.resolveSrc('_internal'))
    spinner.succeed(logger.success('clean copy files!\n', false))
    spinner.clear()
  }

  logger.success('build icons library successfully !')
}
