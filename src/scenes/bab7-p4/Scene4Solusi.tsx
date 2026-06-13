import { SOLUSI } from './data'
import styles from './ui.module.css'
export function Scene4Solusi() {
  return (
    <>
      <p className={styles.prompt}>Efek rumah kaca alami itu <em>penting</em> - yang berbahaya adalah penguatannya. Apa yang bisa kita lakukan?</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.solGrid}>
          {SOLUSI.map(s => <div key={s} className={styles.solCard}>{s}</div>)}
        </div>
        <div className={styles.exit}>Tanpa efek rumah kaca, Bumi membeku; dengan terlalu banyak, Bumi memanas berbahaya. <b>Keseimbangan</b>-lah yang kita jaga - dan setiap tindakan kecil ikut menentukan.</div>
      </div>
    </>
  )
}
