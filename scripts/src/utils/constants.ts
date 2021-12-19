import fse from 'fs-extra'
import path from 'node:path'

class Constant {
  public add<R extends object>(fn: (constant: this) => R) {
    return Object.assign(this, Object.freeze(fn(this)))
  }
}

export const constants = new Constant()
  .add(() => ({
    cwd: fse.realpathSync(process.cwd()),
    root: path.resolve(__dirname, '../../'),
  }))
  .add(instance => ({
    resolveCwd: path.resolve.bind(null, instance.cwd),
    resolveRoot: path.resolve.bind(null, instance.root),
  }))
  .add(instance => ({
    resolveEsm: instance.resolveCwd.bind(null, 'esm'),
    resolveCjs: instance.resolveCwd.bind(null, 'lib'),
    resolveUmd: instance.resolveCwd.bind(null, 'dist'),
    resolveSrc: instance.resolveCwd.bind(null, 'src'),

    resolveUtils: instance.resolveRoot.bind(null, 'packages', 'utils'),
    resolveTypes: instance.resolveRoot.bind(null, 'packages', 'types'),

    resolveComps: instance.resolveRoot.bind(null, 'packages', 'components'),
    resolveIcons: instance.resolveRoot.bind(null, 'packages', 'icons'),
    resolveValidator: instance.resolveRoot.bind(null, 'packages', 'validator'),
  }))
  .add(instance => ({
    esm: instance.resolveEsm('.'),
    cjs: instance.resolveCjs('.'),
    umd: instance.resolveUmd('.'),
    src: instance.resolveSrc('.'),

    comps: instance.resolveComps('.'),
    icons: instance.resolveIcons('.'),
    validator: instance.resolveValidator('.'),
  }))
  .add(() => ({
    browserslist: ['> 0.5%', 'last 2 versions', 'not dead'],
    cssExtensions: ['.scss', '.sass', '.css'],
    ignoreFiles: ['**/__tests__', '**/_demos'],
    jsExtensions: ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx'],
    iconAttrNamePrefix: '__#icon#__',
    fullCssFilename: 'ink-ui',
  }))
  .add(instance => ({
    babelOptions: {
      babelHelpers: 'runtime' as const,
      babelrc: false,
      extensions: instance.jsExtensions,
      plugins: ['@babel/plugin-transform-runtime'],
      presets: [
        ['@babel/preset-env', { targets: instance.browserslist }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
      ],
    },
    replaces: {
      'preventAssignment': true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
  }))
  .add((instance) => {
    const globalAlias = [
      { find: '@internal/utils', replacement: instance.resolveSrc('_internal/utils') },
      { find: '@internal/types', replacement: instance.resolveSrc('_internal/types') },
    ]
    return {
      compsAlias: globalAlias.concat({ find: '@comps', replacement: instance.src }),
      iconsAlias: globalAlias.concat({ find: '@icons', replacement: instance.src }),
      validatorAlias: globalAlias.concat({ find: '@validator', replacement: instance.src }),
    }
  })
