import { useState } from 'react'
import { ORGAN } from './data'
import styles from './ui.module.css'
export function Scene2Saluran() {
  const [sel, setSel] = useState('hidung')
  const o = ORGAN.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Ikuti jalan udara. Klik tiap organ.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.tract}>
            {ORGAN.map((x, i) => (
              <div key={x.id} className={styles.tItem}>
                <button className={`${styles.organ} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>
                {i < ORGAN.length - 1 && <span className={styles.tArr}>↓</span>}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.side}><div className={styles.detail}><div className={styles.dName}>{o.nama}</div><div className={styles.dDef}>{o.fungsi}</div></div></div>
      </div>
    </>
  )
}
