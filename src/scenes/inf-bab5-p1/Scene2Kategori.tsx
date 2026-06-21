import { useState } from 'react'
import { KATEGORI } from './data'
import styles from './ui.module.css'
export function Scene2Kategori() {
  const [sel, setSel] = useState('input')
  const k = KATEGORI.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Empat kelompok perangkat keras. Klik tiap kelompok.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.grid}>{KATEGORI.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}><div className={styles.dName}>{k.nama}</div><div className={styles.dDef}>{k.fungsi}</div><div className={styles.dEx}><span>Contoh</span> {k.contoh}</div></div>
        </div>
      </div>
    </>
  )
}
