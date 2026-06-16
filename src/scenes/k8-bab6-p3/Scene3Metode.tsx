import { useState } from 'react'
import { METODE } from './data'
import styles from './ui.module.css'
export function Scene3Metode() {
  const [sel, setSel] = useState('evaporasi')
  const m = METODE.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Tiga metode berbasis <em>perubahan wujud.</em> Klik untuk membandingkan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.cards}>{METODE.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}><div className={styles.dDef}>{m.prinsip}</div><div className={styles.dEx}><span>Contoh</span> {m.contoh}</div></div>
        </div>
      </div>
    </>
  )
}
