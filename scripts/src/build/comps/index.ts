import fse from 'fs-extra'
import ora from 'ora'

import { clean, constants, logger } from '../../utils'
import buildCode from './code'
import buildCss from './css'
import buildDts from './dts'

export interface BuildCodeOptions {
  css: boolean
  dts: boolean
  js: boolean
}

export default async function build(options: BuildCodeOptions) {
  logger.info('|-----------------------------------|')
  logger.info('|                                   |')
  logger.info('|  starting build comps library...  |')
  logger.info('|                                   |')
  logger.info('|-----------------------------------|\n')

  // valid cwd dir

  if (constants.cwd !== constants.comps)
    throw new Error('is not components package')

  // TODO: 针对性的删除文件
  // clean dist files
  if (options.js && options.css && options.dts) {
    const spinner = ora(logger.info('clean dist files\n', false)).start()
    await clean(constants.esm, constants.cjs, constants.umd)
    spinner.succeed(logger.success('clean dist files successfully !\n', false))
    spinner.clear()
  }

  // clean internal files
  {
    const spinner = ora(logger.info('clean internal files\n', false)).start()
    await clean(constants.resolveSrc('_internal'))
    spinner.succeed(logger.success('clean internal files successfully !\n', false))
    spinner.clear()
  }

  // copy files
  {
    const spinner = ora(logger.info('copy source files to components\n', false)).start()
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

  if (options.css) {
    const spinner = ora(logger.info('starting build css\n', false)).start()
    await buildCss()
    spinner.succeed(logger.success('build css successfully!\n', false))
    spinner.clear()
  }

  // clean copy files
  {
    const spinner = ora(logger.info('clean internal files\n', false)).start()
    await clean(constants.resolveSrc('_internal'))
    spinner.succeed(logger.success('clean internal files successfully !\n', false))
    spinner.clear()
  }

  logger.success('build comps library successfully !')
}
