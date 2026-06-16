import { useState } from 'react'
import { ORGAN } from './data'
import styles from './ui.module.css'
export function Scene2Organ() {
  const [sel, setSel] = useState('ginjal')
  const o = ORGAN.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Empat organ ekskresi, empat zat sisa berbeda. Klik tiap organ.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.grid}>{ORGAN.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}><div className={styles.dName}>{o.nama}</div><div className={styles.dRow}><span>Mengeluarkan</span> {o.zat}</div><div className={styles.dDef}>{o.cara}</div></div>
        </div>
      </div>
    </>
  )
}
