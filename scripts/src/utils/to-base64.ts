import { optimize } from 'svgo'

export function toBase64(source: string) {
  const size = 50

  const newSource = source
    .replace(/<svg(.*?)>/, `<svg$1 width="${size}" height="${size}" fill="#cacaca">`)
    .replace(/\#333/g, '#1677ff')
    .replace(/\#E6E6E6/ig, '#e6f4ff')

  return optimize(newSource, { datauri: 'base64' }).data
}
