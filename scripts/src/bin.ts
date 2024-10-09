#!/usr/bin/env node
import { Command } from 'commander'

import comps from './build/comps'
import emator from './build/emator'
import icons from './build/icons'

const program = new Command()
  .name('ink scripts')
  .description('用于编译/打包 ink-ui 组件库的脚本文件')
  .version('0.0.1')

program
  .command('build:core')
  .description('build core library')
  .action(comps)

program
  .command('build:icons')
  .description('build icon library')
  .action(icons)

program
  .command('build:emator')
  .description('build schema validator library')
  .action(emator)

program.parse(process.argv)
