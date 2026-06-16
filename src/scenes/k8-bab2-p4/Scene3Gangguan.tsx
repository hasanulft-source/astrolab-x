import { useState } from 'react'
import { GANGGUAN } from './data'
import styles from './ui.module.css'
export function Scene3Gangguan() {
  const [sel, setSel] = useState('batu')
  const g = GANGGUAN.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Ginjal bisa <em>terganggu</em>. Klik tiap kondisi.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.cards}>{GANGGUAN.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dName}>{g.nama}</div>
            <div className={styles.dRow}><span>Penyebab</span> {g.sebab}</div>
            <div className={styles.dRow}><span>Pencegahan</span> {g.cegah}</div>
          </div>
        </div>
      </div>
    </>
  )
}
