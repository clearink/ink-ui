/// <reference types="vite/client" />

declare module '*.md' {
  const md: React.ComponentType<any>
  export default md
}
