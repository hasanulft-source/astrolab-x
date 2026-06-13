import styles from './KeyboardHints.module.css'
export function KeyboardHints() {
  return (
    <div className={styles.keys}>
      <span className={styles.key}>←</span><span className={styles.key}>→</span><span>geser slide</span>
      <span className={styles.sep}/><span className={styles.key}>spasi</span><span>lanjut</span>
    </div>
  )
}
