import styles from './Row.module.css'

type RowProps = {
  left: string
  right: string
}

export const Row = ({ left, right }: RowProps) => (
  <div className={styles.container}>
    <span className={styles.left}>{left}</span>
    <div className={styles.placeholder}></div>
    <span className={styles.right}>{right}</span>
  </div>
)
