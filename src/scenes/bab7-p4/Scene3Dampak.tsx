import { useState } from 'react'
import { DAMPAK, PENYEBAB } from './data'
import styles from './ui.module.css'
export function Scene3Dampak() {
  const [sel, setSel] = useState(0)
  return (
    <>
      <p className={styles.prompt}>Aktivitas manusia menambah gas rumah kaca - efeknya <em>menguat</em> jadi pemanasan global.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.causeBox}>
            <div className={styles.causeH}>Penyebab</div>
            <div className={styles.causeChips}>{PENYEBAB.map(c => <span key={c} className={styles.causeChip}>{c}</span>)}</div>
            <div className={styles.causeArrow}>menyebabkan ↓</div>
            <div className={styles.dampakGrid}>
              {DAMPAK.map((d, i) => <button key={i} className={`${styles.dampakBtn} ${sel === i ? styles.on : ''}`} onClick={() => setSel(i)}>{d.t}</button>)}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}><b>{DAMPAK[sel].t}.</b> {DAMPAK[sel].d}</div>
        </div>
      </div>
    </>
  )
}
