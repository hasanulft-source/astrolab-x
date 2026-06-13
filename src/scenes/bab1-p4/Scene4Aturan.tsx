import { DOS, DONTS } from './data'
import styles from './ui.module.css'

export function Scene4Aturan() {
  return (
    <>
      <p className={styles.prompt}>Aturan lab itu sederhana tapi menyelamatkan. Yang <em>boleh</em> dan <em>tidak boleh</em>:</p>
      <div className={styles.doGrid}>
        <div className={`${styles.doCol} ${styles.yes}`}>
          <span className={`${styles.doHead} ${styles.doHeadYes}`}>✓ Lakukan</span>
          {DOS.map((d, i) => <span key={i} className={styles.doItem}>{d}</span>)}
        </div>
        <div className={`${styles.doCol} ${styles.no}`}>
          <span className={`${styles.doHead} ${styles.doHeadNo}`}>✕ Hindari</span>
          {DONTS.map((d, i) => <span key={i} className={styles.doItem}>{d}</span>)}
        </div>
      </div>
    </>
  )
}
