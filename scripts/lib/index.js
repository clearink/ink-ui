'use strict';

var fs = require('node:fs');
var path = require('node:path');
var node_url = require('node:url');
var slash = require('slash');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
class Constant {
  add(fn) {
    return Object.assign(this, Object.freeze(fn(this)));
  }
}
const constants = new Constant().add(() => ({
  _filename: slash(node_url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('index.js', document.baseURI).href))))
})).add(instance => ({
  _dirname: slash(path.dirname(instance._filename))
})).add(instance => ({
  cwd: slash(fs.realpathSync(process.cwd())),
  root: slash(path.resolve(instance._dirname, '../../'))
})).add(instance => ({
  resolveCwd: (...args) => slash(path.resolve(instance.cwd, ...args)),
  resolveRoot: (...args) => slash(path.resolve(instance.root, ...args))
})).add(instance => ({
  resolveEsm: instance.resolveCwd.bind(null, 'esm'),
  resolveCjs: instance.resolveCwd.bind(null, 'lib'),
  resolveUmd: instance.resolveCwd.bind(null, 'dist'),
  resolveSrc: instance.resolveCwd.bind(null, 'src'),
  resolveUtils: instance.resolveRoot.bind(null, 'packages', '_internal', 'utils'),
  resolveTypes: instance.resolveRoot.bind(null, 'packages', '_internal', 'types'),
  resolveComps: instance.resolveRoot.bind(null, 'packages', 'components'),
  resolveIcons: instance.resolveRoot.bind(null, 'packages', 'icons'),
  resolveEmator: instance.resolveRoot.bind(null, 'packages', 'emator')
})).add(instance => ({
  esm: instance.resolveEsm('.'),
  cjs: instance.resolveCjs('.'),
  umd: instance.resolveUmd('.'),
  src: instance.resolveSrc('.'),
  comps: instance.resolveComps('.'),
  icons: instance.resolveIcons('.'),
  emator: instance.resolveEmator('.')
})).add(() => ({
  browserslist: ['> 0.5%', 'last 2 versions', 'not dead'],
  cssExtensions: ['.scss', '.sass', '.css'],
  ignoreFiles: ['**/__tests__', '**/__docs__'],
  jsExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.mts'],
  iconAttrNamePrefix: '__#icon#__',
  fullCssFileName: 'ink-ui'
})).add(instance => ({
  babelOptions: {
    babelHelpers: 'runtime',
    babelrc: false,
    extensions: instance.jsExtensions,
    plugins: ['@babel/plugin-transform-runtime'],
    presets: [['@babel/preset-env', {
      targets: instance.browserslist
    }], ['@babel/preset-react', {
      runtime: 'automatic'
    }], '@babel/preset-typescript']
  },
  replaces: {
    'preventAssignment': true,
    'process.env.NODE_ENV': JSON.stringify('production')
  }
}));

exports.constants = constants;
