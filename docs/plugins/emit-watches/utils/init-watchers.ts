import chokidar from 'chokidar'

import debounce from './debounce'

export default function initWatchers(
  groups: string[],
  handler: () => Promise<void>,
) {
  if (!groups.length) return

  const [callback, cleanupTimeout] = debounce(300, handler)

  const watchers = groups.map((pattern) => {
    const watcher = chokidar
      .watch(pattern, { ignoreInitial: true })
      .on('ready', callback)
      .on('add', callback)
      .on('change', callback)
      .on('unlink', callback)

    return () => {
      cleanupTimeout()
      watcher.close()
    }
  })

  return () => { watchers.forEach((fn) => { fn() }) }
}
