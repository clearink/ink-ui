export default function makeSourceFile(): [
  string,
  string,
  Record<string, string>,
] {
  const description = { 'zh-CN': 'TODO', 'en-US': 'TODO' }

  const sourceCode = `export default function App() {
      return <div>建设中,敬请期待!</div>
    }`

  const rawText = `\`\`\`tsx\n${sourceCode}\`\`\``

  return [sourceCode, rawText, description]
}
