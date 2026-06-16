import { useState } from 'react'
import { KONSER } from './data'
import styles from './ui.module.css'
export function Scene3Konservasi() {
  const [sel, setSel] = useState('terasering')
  const k = KONSER.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Manusia melindungi tanah lewat <em>konservasi.</em> Klik tiap metode.</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.grid}>{KONSER.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div></div>
        <div className={styles.side}><div className={styles.detail}>{k.ket}</div></div>
      </div>
    </>
  )
}
