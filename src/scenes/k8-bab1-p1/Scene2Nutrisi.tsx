import { useState } from 'react'
import { NUTRISI } from './data'
import styles from './ui.module.css'
export function Scene2Nutrisi() {
  const [sel, setSel] = useState('karbo')
  const n = NUTRISI.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Klik tiap nutrisi - kenali <em>fungsi & sumbernya.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.nGrid}>
            {NUTRISI.map(x => <button key={x.id} className={`${styles.nCard} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dName}>{n.nama}</div>
            <div className={styles.dDef}>{n.fungsi}</div>
            <div className={styles.dEx}><span>Sumber</span> {n.sumber}</div>
          </div>
        </div>
      </div>
    </>
  )
}
