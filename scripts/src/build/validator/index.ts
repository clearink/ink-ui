export interface BuildValidatorOptions {
  dts: boolean
  js: boolean
}

export default async function build(options: BuildValidatorOptions) {
  console.log('build validator', options)
}
