import { useState } from 'react'
import { KOMP } from './data'
import styles from './ui.module.css'
export function Scene3Komponen() {
  const [sel, setSel] = useState('mineral')
  const k = KOMP.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Tanah subur punya <em>empat komponen</em> dalam proporsi seimbang. Klik tiap komponen.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.cards}>{KOMP.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}><span>{x.nama}</span><span className={styles.cP}>{x.persen}</span></button>)}</div>
        </div>
        <div className={styles.side}><div className={styles.detail}>{k.fungsi}</div></div>
      </div>
    </>
  )
}
