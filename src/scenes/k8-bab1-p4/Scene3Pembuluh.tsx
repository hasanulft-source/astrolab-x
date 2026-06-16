import { useState } from 'react'
import { PEMBULUH } from './data'
import styles from './ui.module.css'
export function Scene3Pembuluh() {
  const [sel, setSel] = useState('arteri')
  const p = PEMBULUH.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Tiga jenis pembuluh mengangkut darah. Klik tiap jenis.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.pCards}>
            {PEMBULUH.map(x => <button key={x.id} className={`${styles.pCard} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama.split(' (')[0]}</button>)}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail2}>
            <div className={styles.dName}>{p.nama}</div>
            <div className={styles.dRow}><span>Arah</span> {p.arah}</div>
            <div className={styles.dRow}><span>Dinding</span> {p.dinding}</div>
            <div className={styles.dRow}><span>Ciri</span> {p.ciri}</div>
          </div>
        </div>
      </div>
    </>
  )
}
