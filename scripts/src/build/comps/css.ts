import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import glob from 'fast-glob'
import fse from 'fs-extra'
import path from 'node:path'
import postcss from 'postcss'
import sass from 'sass'
import tsm from 'ts-morph'

import { constants, removeExtname, safeWrite } from '../../utils'

// 复制源文件
function copyScssFiles() {
  const root = constants.src

  const options = { cwd: root, ignore: constants.ignoreFiles }

  const promises = glob.sync('**/*.{sc,sa,c}ss', options).map((file) => {
    const filepath = path.resolve(root, file)
    return Promise.all([
      fse.copy(filepath, constants.resolveEsm(file)),
      fse.copy(filepath, constants.resolveCjs(file)),
    ])
  })

  return Promise.all(promises)
}

// 编译css文件
function compileScssFiles() {
  const root = constants.src

  const options = { cwd: root, ignore: constants.ignoreFiles }

  const promises = glob.sync('**/style/index.{sc,sa,c}ss', options).map(async (file) => {
    const filename = removeExtname(file)

    const filepath = path.resolve(root, file)

    const res = await sass.compileAsync(filepath)

    return Promise.all([
      safeWrite(constants.resolveEsm(`${filename}.css`), res.css),
      safeWrite(constants.resolveCjs(`${filename}.css`), res.css),
    ])
  })

  return Promise.all(promises)
}

// 编译全部组件样式
async function compileCompScssFiles() {
  const processor = postcss([autoprefixer(), cssnano({ preset: 'default' })])

  const filename = constants.fullCssFilename

  const filepath = constants.resolveSrc('style/components.scss')

  const sassResult = await sass.compileAsync(filepath)

  const cssResult = await processor.process(sassResult.css, { from: filepath })

  return Promise.all([
    safeWrite(constants.resolveUmd(`${filename}.css`), sassResult.css),
    safeWrite(constants.resolveUmd(`${filename}.min.css`), cssResult.css),
  ])
}

// 生成 babel-plugin-import 文件
function buildPluginImportFiles() {
  const project = new tsm.Project({
    compilerOptions: { allowJs: true },
    skipAddingFilesFromTsConfig: true,
  })

  const root = constants.src

  const options = { cwd: root, ignore: constants.ignoreFiles }

  const promises = glob.sync('**/style/index.ts{,x}', options).map((file) => {
    const filename = removeExtname(file)

    const filepath = path.resolve(root, file)

    const sourceFile = project.addSourceFileAtPath(filepath)

    sourceFile.getImportDeclarations().forEach((node) => {
      const text = node.getModuleSpecifierValue()

      const filename = removeExtname(text)

      node.setModuleSpecifier(`${filename}.css`)
    })

    const sourceText = sourceFile.getText()

    const targetDir = path.dirname(filename)

    return Promise.all([
      safeWrite(constants.resolveEsm(targetDir, 'css.mjs'), sourceText),
      safeWrite(constants.resolveCjs(targetDir, 'css.js'), sourceText),
    ])
  })

  return Promise.all(promises)
}

export default async function buildCss() {
  return Promise.all([
    copyScssFiles(),
    compileScssFiles(),
    compileCompScssFiles(),
    buildPluginImportFiles(),
  ])
}
