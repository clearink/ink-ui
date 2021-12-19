import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import glob from 'fast-glob'
import path from 'node:path'
import { rollup } from 'rollup'

import { constants, formatExternals, getPkgJson, removeExtname } from '../../utils'

export default async function buildCode() {
  const root = constants.src

  const options = { cwd: root, ignore: constants.ignoreFiles }

  const entries = glob.sync('**/*.ts{,x}', options).slice(0, 1).reduce((result, file) => {
    result[removeExtname(file)] = path.resolve(root, file)

    return result
  }, {} as Record<string, string>)

  const pkgJson = await getPkgJson()

  const externals = formatExternals(pkgJson)

  const plugins = [
    resolve({ extensions: constants.jsExtensions }),
    commonjs(),
    babel(constants.babelOptions),
    alias({ entries: constants.iconsAlias }),
  ]

  await Promise.all([
    rollup({
      external: externals,
      input: entries,
      logLevel: 'silent',
      plugins,
      treeshake: false,
    }).then(async (bundle) => {
      return Promise.all([
        bundle.write({
          dir: constants.esm,
          entryFileNames: '[name].mjs',
          format: 'esm',
          preserveModules: true,
          sourcemap: true,
        }),
        bundle.write({
          dir: constants.cjs,
          exports: 'named',
          format: 'cjs',
          preserveModules: true,
          sourcemap: true,
        }),
      ])
    }),
    rollup({
      external: externals,
      input: path.resolve(root, 'index.ts'),
      logLevel: 'silent',
      plugins: plugins.concat(replace(constants.replaces)),
    }).then(async (bundle) => {
      return Promise.all([
        bundle.write({
          dir: constants.umd,
          entryFileNames: '[name].js',
          format: 'umd',
          name: pkgJson.name,
          sourcemap: true,
        }),
        bundle.write({
          dir: constants.umd,
          entryFileNames: '[name].min.js',
          format: 'umd',
          name: pkgJson.name,
          plugins: [terser()],
          sourcemap: true,
        }),
      ])
    }),
  ])
}
