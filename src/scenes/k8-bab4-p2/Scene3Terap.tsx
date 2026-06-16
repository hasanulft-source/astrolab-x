import { useState } from 'react'
import { TERAP } from './data'
import styles from './ui.module.css'
export function Scene3Terap() {
  const [sel, setSel] = useState('bendungan')
  const k = TERAP.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Tekanan hidrostatis dimanfaatkan & diantisipasi manusia. Klik tiap contoh.</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.cards}>{TERAP.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div></div>
        <div className={styles.side}><div className={styles.detail}>{k.ket}</div></div>
      </div>
    </>
  )
}
