import styles from './style.module.scss'

export interface SectionProps {
  children?: React.ReactNode
  title: string
}

export default function Section(props: SectionProps) {
  const { children, title } = props
  return (
    <div className={styles.section}>
      <h2 className={styles.section_title}>{title}</h2>
      {children}
    </div>
  )
}
