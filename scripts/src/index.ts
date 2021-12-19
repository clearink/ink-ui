#!/usr/bin/env node
import { Command } from 'commander'

import comps from './build/comps'
import icons from './build/icons'
import validator from './build/validator'
import gen from './gen'

const program = new Command()
  .name('ink scripts')
  .description('用于编译/打包 ink-ui 组件库的脚本文件')
  .version('0.0.1')

program
  .command('build:comps')
  .description('build comps library')
  .option('--no-dts', 'don\'t generate dts files', true)
  .option('--no-js', 'don\'t generate js files', true)
  .option('--no-css', 'don\'t generate css files', true)
  .action(comps)

program
  .command('build:icons')
  .description('build icon library')
  .option('--no-dts', 'don\'t generate dts files', true)
  .option('--no-js', 'don\'t generate js files', true)
  .action(icons)

program
  .command('build:validator')
  .description('build form-validator library')
  .option('--no-dts', 'don\'t generate dts files', true)
  .option('--no-js', 'don\'t generate js files', true)
  .action(validator)

program
  .command('gen [name]')
  .description('generate component templates')
  .action(gen)

program.parse(process.argv)
