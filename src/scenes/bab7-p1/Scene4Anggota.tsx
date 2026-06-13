import { useState } from 'react'
import { ANGGOTA } from './data'
import styles from './ui.module.css'
export function Scene4Anggota() {
  const [sel, setSel] = useState('mat')
  const a = ANGGOTA.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Selain planet, tata surya punya <em>anggota lain.</em> Klik untuk mengenalinya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.angGrid}>
            {ANGGOTA.map(x => (
              <button key={x.id} className={`${styles.angCard} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dName}>{a.nama}</div>
            <div className={styles.dFakta}>{a.desc}</div>
          </div>
          <div className={styles.exit}>Semua diikat oleh <b>gravitasi Matahari</b> - itulah yang menyatukan tata surya.</div>
        </div>
      </div>
    </>
  )
}
