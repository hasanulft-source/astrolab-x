import { useState } from 'react'
import { ORGAN, AKSESORI } from './data'
import styles from './ui.module.css'
export function Scene2Saluran() {
  const [sel, setSel] = useState('mulut')
  const o = ORGAN.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Ikuti perjalanan makanan. Klik tiap organ.</p>
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
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dName}>{o.nama}</div>
            <div className={styles.dDef}>{o.fungsi}</div>
            {o.enzim !== '-' && <div className={styles.dEnz}><span>Enzim</span> {o.enzim}</div>}
          </div>
          <div className={styles.aks}>{AKSESORI}</div>
        </div>
      </div>
    </>
  )
}
