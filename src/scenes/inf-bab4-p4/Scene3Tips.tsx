import { useState } from 'react'
import { TIPS } from './data'
import styles from './ui.module.css'
export function Scene3Tips() {
  const [sel, setSel] = useState(0)
  const t = TIPS[sel]
  return (
    <>
      <p className={styles.prompt}>Sandi kuat saja belum cukup - ikuti <em>kebiasaan aman</em> ini. Klik tiap tips.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.grid}>{TIPS.map((x, i) => <button key={x.nama} className={`${styles.card} ${sel === i ? styles.on : ''}`} onClick={() => setSel(i)}>{x.nama}</button>)}</div>
        </div>
        <div className={styles.side}><div className={styles.detail}>{t.ket}</div></div>
      </div>
    </>
  )
}
