import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace, { type RollupReplaceOptions } from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import glob from 'fast-glob'
import path from 'node:path'
import { rollup } from 'rollup'

import { constants } from './constants'
import { removeExtname } from './remove-extname'

export interface BuildSourceOptions {
  alias: { find: RegExp | string, replacement: string }[]
  bundleName: string
  externals: (RegExp | string)[]
  replaces: RollupReplaceOptions
}
// 打包源文件
export async function buildSource(options: BuildSourceOptions) {
  const globOptions = { cwd: constants.src, ignore: constants.ignoreFiles }

  const files = await glob.async('**/*.ts{,x}', globOptions)

  const entries = files.reduce((result, file) => {
    result[removeExtname(file)] = constants.resolveSrc(file)

    return result
  }, {} as Record<string, string>)

  const plugins = [
    resolve({ extensions: constants.jsExtensions }),
    commonjs(),
    babel(constants.babelOptions),
    alias({ entries: options.alias }),
  ]

  await Promise.all([
    rollup({
      external: options.externals,
      input: entries,
      plugins,
      treeshake: false,
    }).then((bundle) => {
      return Promise.all([
        bundle.write({
          dir: constants.esm,
          format: 'esm',
          preserveModules: true,
        }),
        bundle.write({
          dir: constants.cjs,
          exports: 'named',
          format: 'cjs',
          preserveModules: true,
        }),
      ])
    }),
    rollup({
      external: options.externals,
      input: path.resolve(constants.src, 'index.ts'),
      plugins: plugins.concat(replace(options.replaces)),
    }).then((bundle) => {
      return Promise.all([
        bundle.write({
          dir: constants.umd,
          entryFileNames: '[name].js',
          exports: 'named',
          format: 'umd',
          name: options.bundleName,
          sourcemap: true,
          globals: name => name,
        }),
        bundle.write({
          dir: constants.umd,
          entryFileNames: '[name].min.js',
          exports: 'named',
          format: 'umd',
          name: options.bundleName,
          plugins: [terser()],
          sourcemap: true,
          globals: name => name,
        }),
      ])
    }),
  ])
}
