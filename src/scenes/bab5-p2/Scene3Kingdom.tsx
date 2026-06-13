import { useState } from 'react'
import { KINGDOMS } from './data'
import styles from './ui.module.css'

export function Scene3Kingdom() {
  const [sel, setSel] = useState(KINGDOMS[0].id)
  const k = KINGDOMS.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Kelompok terbesar (Kingdom) ada <em>lima</em>. Klik tiap kingdom - lihat ciri utamanya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.kingGrid}>
            {KINGDOMS.map(x => (
              <button key={x.id} className={`${styles.kingCard} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.detailH}>{k.nama}</div>
            <div className={styles.detailP}>{k.ciri}</div>
          </div>
          <div className={styles.allNote}>Contoh: <b>{k.contoh}</b></div>
        </div>
      </div>
    </>
  )
}
