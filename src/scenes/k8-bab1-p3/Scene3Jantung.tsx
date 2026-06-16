import { useState } from 'react'
import { RUANG } from './data'
import styles from './ui.module.css'
export function Scene3Jantung() {
  const [sel, setSel] = useState('ska')
  const r = RUANG.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Jantung punya <em>4 ruang</em>. Klik tiap ruang untuk tahu tugasnya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.heart}>
            {RUANG.map(x => (
              <button key={x.id} className={`${styles.chamber} ${x.sisi === 'kanan' ? styles.cBlue : styles.cRed} ${sel === x.id ? styles.cOn : ''}`} onClick={() => setSel(x.id)}>
                <span className={styles.cName}>{x.nama}</span>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail2}>
            <div className={styles.dName}>{r.nama}</div>
            <div className={styles.dTag}>{r.sisi === 'kanan' ? 'Sisi kanan - darah kotor' : 'Sisi kiri - darah bersih'}</div>
            <div className={styles.dDef}>{r.desc}</div>
          </div>
        </div>
      </div>
    </>
  )
}
