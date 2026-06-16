import { useState } from 'react'
import { BIAS } from './data'
import styles from './ui.module.css'
export function Scene3Bias() {
  const [sel, setSel] = useState('sedotan')
  const b = BIAS.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Saat cahaya pindah medium, ia <em>membelok</em> - itulah pembiasan. Klik tiap contoh.</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.cards}>{BIAS.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div></div>
        <div className={styles.side}><div className={styles.detail}>{b.ket}</div></div>
      </div>
    </>
  )
}
