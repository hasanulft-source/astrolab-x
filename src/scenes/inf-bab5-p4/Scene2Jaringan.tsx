import { useState } from 'react'
import { JARINGAN } from './data'
import styles from './ui.module.css'
export function Scene2Jaringan() {
  const [sel, setSel] = useState('lan')
  const j = JARINGAN.find(x => x.id === sel)!
  const size = sel === 'lan' ? 40 : sel === 'wan' ? 80 : 130
  return (
    <>
      <p className={styles.prompt}>Jaringan punya beberapa ukuran. Klik untuk melihat jangkauannya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.scaleWrap}>
            <div className={styles.scaleCircle} style={{ width: size, height: size }} />
            <div className={styles.scaleLbl}>{j.nama} · {j.skala}</div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.tabs}>{JARINGAN.map(x => <button key={x.id} className={`${styles.tab} ${sel === x.id ? styles.tabOn : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div>
          <div className={styles.detail}>{j.ket}</div>
        </div>
      </div>
    </>
  )
}
