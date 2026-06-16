import { useState } from 'react'
import { TAHAP } from './data'
import styles from './ui.module.css'
export function Scene3Distilasi() {
  const [sel, setSel] = useState('panas')
  const t = TAHAP.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Distilasi memisahkan cairan berdasarkan <em>perbedaan titik didih.</em> Klik tiap tahap.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.steps}>{TAHAP.map(x => <button key={x.id} className={`${styles.step} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div>
        </div>
        <div className={styles.side}><div className={styles.detail}>{t.ket}</div></div>
      </div>
    </>
  )
}
