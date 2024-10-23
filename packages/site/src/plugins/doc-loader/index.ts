import type { Plugin } from 'vite'

export default function docLoader(): Plugin {
  return {
    name: 'vite-plugin-md-to-docs',
    enforce: 'pre',
    transform(code, id, options) {
      if (!/\.md$/.test(id)) return code

      return {
        // 还要用babel转一下
        code: `import React from 'react'\n
        export default function App() {\n
         return <div>1231234</div> \n
      }\n`,
        map: null,
      }
    },

    // handleHotUpdate(ctx) {
    //   // ctx.server.ws.send({
    //   //   type: 'update',
    //   //   updates: [
    //   //     {
    //   //       type: 'js-update',
    //   //       timestamp: Date.now()
    //   //     },
    //   //   ],
    //   // })
    // },
  }
}
