import { useState } from 'react'
import { PONDASI } from './data'
import styles from './ui.module.css'
export function Scene2Pondasi() {
  const [sel, setSel] = useState('dekomposisi')
  const p = PONDASI.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Empat pondasi berpikir komputasional. Klik tiap pondasi.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.grid}>{PONDASI.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}><div className={styles.dName}>{p.nama}</div><div className={styles.dDef}>{p.def}</div><div className={styles.dEx}><span>Contoh</span> {p.contoh}</div></div>
        </div>
      </div>
    </>
  )
}
