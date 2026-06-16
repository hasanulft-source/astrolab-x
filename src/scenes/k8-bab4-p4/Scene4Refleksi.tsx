import { useState } from 'react'
import { APLIK } from './data'
import styles from './ui.module.css'
export function Scene4Refleksi() {
  const [sel, setSel] = useState('kapal')
  const k = APLIK.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Archimedes ada di laut, udara, bahkan laboratorium. Klik tiap contoh.</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.grid}>{APLIK.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div></div>
        <div className={styles.side}><div className={styles.detail}>{k.ket}</div></div>
      </div>
    </>
  )
}
