import { useState } from 'react'
import { KASUS } from './data'
import styles from './ui.module.css'
export function Scene3Jenis() {
  const [sel, setSel] = useState('positif')
  const k = KASUS.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Usaha bisa <em>positif, negatif, atau nol</em>. Klik tiap kasus.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.cards}>{KASUS.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}><span>{x.nama}</span><span className={styles.cW}>{x.w}</span></button>)}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}><div className={styles.dName}>{k.nama}</div><div className={styles.dDef}>{k.ket}</div><div className={styles.dEx}><span>Contoh</span> {k.contoh}</div></div>
        </div>
      </div>
    </>
  )
}
