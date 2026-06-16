import { useState } from 'react'
import { KM_DATA } from './data'
import styles from './ui.module.css'
export function Scene3Lainnya() {
  const [sel, setSel] = useState('tuas')
  const k = KM_DATA.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Tiap pesawat punya <em>rumus KM</em> sendiri. Klik untuk membandingkan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.grid}>{KM_DATA.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}><div className={styles.dName}>{k.nama}</div><div className={styles.dRumus}>{k.rumus}</div><div className={styles.dDef}>{k.ket}</div></div>
        </div>
      </div>
    </>
  )
}
