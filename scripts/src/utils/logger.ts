import chalk from 'chalk'

export const logger = {
  error: (text: string, log = true) => {
    const str = chalk.hex('#e74c3c')(text)
    if (!log) return str
    console.log(str)
  },
  info: (text: string, log = true) => {
    const str = chalk.hex('#3498db')(text)
    if (!log) return str
    console.log(str)
  },
  success: (text: string, log = true) => {
    const str = chalk.hex('#2ecc71')(text)
    if (!log) return str
    console.log(str)
  },
  warning: (text: string, log = true) => {
    const str = chalk.hex('#f39c12')(text)
    if (!log) return str
    console.log(str)
  },
}
