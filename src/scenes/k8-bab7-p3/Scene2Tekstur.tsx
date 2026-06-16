import { useState } from 'react'
import { TEKSTUR } from './data'
import styles from './ui.module.css'
export function Scene2Tekstur() {
  const [sel, setSel] = useState('lempung')
  const t = TEKSTUR.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Tekstur ditentukan ukuran butir: <em>pasir, lempung, liat.</em> Klik tiap jenis.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.cards}>{TEKSTUR.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}><span>{x.nama}</span><span className={styles.cB}>{x.butir}</span></button>)}</div>
        </div>
        <div className={styles.side}><div className={styles.detail}>{t.sifat}</div></div>
      </div>
    </>
  )
}
