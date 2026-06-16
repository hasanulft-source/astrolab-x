import { useState } from 'react'
import { MEDIUM } from './data'
import styles from './ui.module.css'
export function Scene3Medium() {
  const [sel, setSel] = useState('padat')
  const m = MEDIUM.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Makin rapat partikel medium, makin <em>cepat</em> bunyi merambat. Klik tiap medium.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.cards}>{MEDIUM.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}><span>{x.nama}</span><span className={styles.cV}>{x.cepat}</span></button>)}</div>
        </div>
        <div className={styles.side}><div className={styles.detail}>{m.ket}</div></div>
      </div>
    </>
  )
}
