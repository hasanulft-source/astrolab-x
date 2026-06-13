import { useState } from 'react'
import { PLANETS } from './data'
import styles from './ui.module.css'
export function Scene2Planet() {
  const [sel, setSel] = useState('bum')
  const p = PLANETS.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Klik tiap planet - dari terdekat ke terjauh - dan baca <em>kartu profilnya.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.planetRow}>
            <div className={styles.sun} />
            {PLANETS.map(x => (
              <button key={x.id} className={`${styles.planet} ${sel === x.id ? styles.pOn : ''}`} onClick={() => setSel(x.id)} title={x.nama}>
                <span className={styles.pBall} style={{ width: x.r * 2, height: x.r * 2, background: x.warna }} />
              </button>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dName}><span className={styles.pBall} style={{ width: 18, height: 18, background: p.warna }} />{p.nama}</div>
            <div className={styles.dJenis}>{p.jenis === 'dalam' ? 'Planet dalam (batuan)' : 'Planet luar (raksasa gas/es)'}</div>
            <div className={styles.dCiri}>{p.ciri}</div>
            <div className={styles.dFakta}>{p.fakta}</div>
          </div>
        </div>
      </div>
    </>
  )
}
