import { useState } from 'react'
import { TANDA } from './data'
import styles from './ui.module.css'
export function Scene3Tanda() {
  const [sel, setSel] = useState(0)
  const t = TANDA[sel]
  return (
    <>
      <p className={styles.prompt}>Kenali <em>tanda-tanda</em> penggunaan gawai sudah berlebihan. Klik tiap tanda.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.list}>{TANDA.map((x, i) => <button key={i} className={`${styles.card} ${sel === i ? styles.on : ''}`} onClick={() => setSel(i)}>{x.teks}</button>)}</div>
        </div>
        <div className={styles.side}><div className={styles.detail}>{t.ket}</div></div>
      </div>
    </>
  )
}
