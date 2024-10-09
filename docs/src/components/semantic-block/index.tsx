export interface SemanticBlockProps {
  children?: React.ReactNode
}
export default function SemanticBlock(props: SemanticBlockProps) {
  const { children } = props

  return (
    <div>
      {children}
    </div>
  )
}
