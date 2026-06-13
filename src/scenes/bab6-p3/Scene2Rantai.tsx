import { useState } from 'react'
import { CHAIN } from './data'
import styles from './ui.module.css'
export function Scene2Rantai() {
  const [sel, setSel] = useState('padi')
  const o = CHAIN.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Klik tiap organisme - kenali <em>perannya</em> dalam rantai makanan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.chain}>
            {CHAIN.map((c, i) => (
              <div key={c.id} className={styles.chainItem}>
                <button className={`${styles.cNode} ${sel === c.id ? styles.on : ''}`} onClick={() => setSel(c.id)}>
                  <span className={styles.cNama}>{c.nama}</span>
                  <span className={styles.cPeran}>{c.peran}</span>
                </button>
                {i < CHAIN.length - 1 && <span className={styles.cArr}>→</span>}
              </div>
            ))}
          </div>
          <div className={styles.dekomp}>Jamur & bakteri (<b>dekomposer</b>) menguraikan sisa semua organisme → zat hara kembali ke tanah untuk padi.</div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dName}>{o.nama}</div>
            <div className={styles.dPeran}>{o.peran}</div>
            <div className={styles.dRow}><span>Memakan</span> {o.makan}</div>
            <div className={styles.dRow}><span>Dimakan</span> {o.dimakan}</div>
          </div>
        </div>
      </div>
    </>
  )
}
