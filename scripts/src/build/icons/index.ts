import fse from 'fs-extra'
import ora from 'ora'

import { constants, logger } from '../../utils'
import buildCode from './code'
import buildDts from './dts'
import genIcons from './gen'

export default async function build() {
  logger.info('🚀 starting build icons library...')

  if (constants.cwd !== constants.icons) {
    throw new Error('is not icons package')
  }

  // clean dist
  {
    const spinner = ora(logger.info('starting clean dist', false)).start()
    await Promise.all([
      fse.remove(constants.esm),
      fse.remove(constants.cjs),
      fse.remove(constants.umd),
      fse.remove(constants.resolveSrc('icons')),
    ])
    spinner.succeed(logger.success('clean dist successfully!', false))
  }

  // generate icon files
  {
    const spinner = ora(logger.info('starting generate icon files', false)).start()
    await genIcons()
    spinner.succeed(logger.success('generate icon files successfully!', false))
  }

  // build source files
  {
    const spinner = ora(logger.info('starting build source files', false)).start()
    await Promise.all([buildCode(), buildDts()])
    spinner.succeed(logger.success('build source files successfully!', false))
  }

  logger.success('🎊 build icons library successfully!')
}

export async function generate() {
  if (constants.cwd !== constants.icons) {
    throw new Error('is not icons package')
  }

  await fse.remove(constants.resolveSrc('icons'))

  const spinner = ora(logger.info('starting generate icon files', false)).start()

  await genIcons()

  spinner.succeed(logger.success('generate icon files successfully!', false))
}
