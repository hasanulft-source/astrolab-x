import { useState } from 'react'
import { UBAH } from './data'
import styles from './ui.module.css'
export function Scene3Bentuk() {
  const [sel, setSel] = useState(0)
  const u = UBAH[sel]
  return (
    <>
      <p className={styles.prompt}>Energi terus <em>berubah bentuk</em> di sekitar kita. Klik tiap alat.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.grid}>{UBAH.map((x, i) => <button key={x.alat} className={`${styles.card} ${sel === i ? styles.on : ''}`} onClick={() => setSel(i)}>{x.alat}</button>)}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.convBox}>
            <span className={styles.cFrom}>{u.dari}</span><span className={styles.cArr}>→</span><span className={styles.cTo}>{u.ke}</span>
          </div>
          <div className={styles.note}>{u.alat} mengubah energi <b>{u.dari.toLowerCase()}</b> menjadi <b>{u.ke.toLowerCase()}</b>.</div>
        </div>
      </div>
    </>
  )
}
