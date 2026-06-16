import { useState } from 'react'
import { TAHAP } from './data'
import styles from './ui.module.css'
export function Scene2Tahap() {
  const [sel, setSel] = useState('filtrasi')
  const idx = TAHAP.findIndex(x => x.id === sel)
  const t = TAHAP[idx]
  return (
    <>
      <p className={styles.prompt}>Tiga tahap pembentukan urin di nefron. Klik tiap tahap.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.pipe}>
            <span className={styles.pStart}>Darah</span>
            {TAHAP.map((x, i) => (
              <div key={x.id} className={styles.pItem}>
                <span className={styles.pArr}>↓</span>
                <button className={`${styles.stage} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>
                  <span className={styles.sNum}>{i + 1}</span><span>{x.nama}</span>
                </button>
              </div>
            ))}
            <span className={styles.pArr}>↓</span>
            <span className={styles.pEnd}>Urine sebenarnya</span>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dName}>{t.nama}</div>
            <div className={styles.dTag}>di {t.tempat}</div>
            <div className={styles.dDef}>{t.proses}</div>
            <div className={styles.dHasil}><span>Menghasilkan</span> {t.hasil}</div>
          </div>
        </div>
      </div>
    </>
  )
}
