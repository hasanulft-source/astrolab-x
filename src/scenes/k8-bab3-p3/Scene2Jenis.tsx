import { useState } from 'react'
import { JENIS } from './data'
import styles from './ui.module.css'
export function Scene2Jenis() {
  const [sel, setSel] = useState('tuas')
  const j = JENIS.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Empat jenis pesawat sederhana. Klik tiap jenis.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.grid}>{JENIS.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama.split(' (')[0]}</button>)}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}><div className={styles.dName}>{j.nama}</div><div className={styles.dDef}>{j.cara}</div><div className={styles.dEx}><span>Contoh</span> {j.contoh}</div></div>
        </div>
      </div>
    </>
  )
}
