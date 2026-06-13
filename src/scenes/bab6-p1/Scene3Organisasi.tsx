import { useState } from 'react'
import { LEVELS } from './data'
import styles from './ui.module.css'

export function Scene3Organisasi() {
  const [sel, setSel] = useState(0)
  const lv = LEVELS[sel]
  return (
    <>
      <p className={styles.prompt}>Kehidupan tersusun bertingkat - dari yang <em>terkecil</em> sampai <em>seluruh Bumi</em>. Klik tiap tingkat.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.ladder}>
            {LEVELS.map((l, i) => (
              <button key={l.n} className={`${styles.rung} ${sel === i ? styles.rungOn : ''}`} style={{ width: `${48 + i * 13}%` }} onClick={() => setSel(i)}>{l.n}</button>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dName}>{lv.n}</div>
            <div className={styles.dDef}>{lv.def}</div>
            <div className={styles.dEx}><span>Contoh</span> {lv.ex}</div>
          </div>
        </div>
      </div>
    </>
  )
}
