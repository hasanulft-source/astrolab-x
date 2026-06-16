import { useState } from 'react'
import { JENIS } from './data'
import styles from './ui.module.css'
export function Scene3Jenis() {
  const [sel, setSel] = useState('trans')
  const j = JENIS.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Berdasarkan arah getarnya, gelombang dibagi <em>dua jenis.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.cards}>{JENIS.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}><div className={styles.dDef}>{j.arah}</div><div className={styles.dEx}><span>Contoh</span> {j.contoh}</div></div>
        </div>
      </div>
    </>
  )
}
