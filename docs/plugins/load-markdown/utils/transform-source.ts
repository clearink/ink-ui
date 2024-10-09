import { transformSync } from '@babel/core'

export default function transformSource(sourceCode: string) {
  return transformSync(sourceCode, {
    filename: 'file.tsx',
    babelrc: false,
    browserslistConfigFile: false,
    presets: [
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
  })?.code
}
