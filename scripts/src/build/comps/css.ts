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
    const filePath = path.resolve(root, file)
    return Promise.all([
      fse.copy(filePath, constants.resolveEsm(file)),
      fse.copy(filePath, constants.resolveCjs(file)),
    ])
  })

  return Promise.all(promises)
}

// 编译css文件
function compileScssFiles() {
  const root = constants.src

  const options = { cwd: root, ignore: constants.ignoreFiles }

  const promises = glob.sync('**/style/index.{sc,sa,c}ss', options).map(async (file) => {
    const fileName = removeExtname(file)

    const filePath = path.resolve(root, file)

    const res = await sass.compileAsync(filePath)

    return Promise.all([
      safeWrite(constants.resolveEsm(`${fileName}.css`), res.css),
      safeWrite(constants.resolveCjs(`${fileName}.css`), res.css),
    ])
  })

  return Promise.all(promises)
}

// 编译全部组件样式
async function compileCompScssFiles() {
  const processor = postcss([autoprefixer(), cssnano({ preset: 'default' })])

  const fileName = constants.fullCssFileName

  const filePath = constants.resolveSrc('style/components.scss')

  const sassResult = await sass.compileAsync(filePath)

  const cssResult = await processor.process(sassResult.css, { from: filePath })

  return Promise.all([
    safeWrite(constants.resolveUmd(`${fileName}.css`), sassResult.css),
    safeWrite(constants.resolveUmd(`${fileName}.min.css`), cssResult.css),
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
    const fileName = removeExtname(file)

    const filePath = path.resolve(root, file)

    const sourceFile = project.addSourceFileAtPath(filePath)

    sourceFile.getImportDeclarations().forEach((node) => {
      const text = node.getModuleSpecifierValue()

      const fileName = removeExtname(text)

      node.setModuleSpecifier(`${fileName}.css`)
    })

    const sourceText = sourceFile.getText()

    const targetDir = path.dirname(fileName)

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
