import { useState } from 'react'
import { PAKAI } from './data'
import styles from './ui.module.css'
export function Scene4Refleksi() {
  const [sel, setSel] = useState('tinta')
  const p = PAKAI.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Dua metode canggih untuk campuran yang <em>sulit dipisahkan.</em> Klik tiap penerapan.</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.grid}>{PAKAI.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div></div>
        <div className={styles.side}><div className={styles.detail}>{p.ket}</div></div>
      </div>
    </>
  )
}
