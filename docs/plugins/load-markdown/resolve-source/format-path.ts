import path from 'node:path'
import slash from 'slash'

export default function formatPath(relative: string, parent: string) {
  return slash(path.resolve(path.dirname(parent), relative))
}
