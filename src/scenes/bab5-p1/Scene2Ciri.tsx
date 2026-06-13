import { useState } from 'react'
import { CIRI } from './data'
import styles from './ui.module.css'

export function Scene2Ciri() {
  const [sel, setSel] = useState(CIRI[0].id)
  const c = CIRI.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Ada <em>7 ciri</em> yang dimiliki setiap makhluk hidup. Klik tiap ciri untuk melihat contohnya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.ciriGrid}>
            {CIRI.map((x, i) => (
              <button key={x.id} className={`${styles.ciriCard} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>
                <span className={styles.ciriNum}>{String(i + 1).padStart(2, '0')}</span>{x.nama}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.detailH}>{c.nama}</div>
            <div className={styles.detailP}>{c.contoh}</div>
          </div>
          <div className={styles.allNote}>Makhluk hidup sejati punya <b>ketujuhnya</b> sekaligus. Kalau ada yang hilang, patut dicurigai bukan makhluk hidup.</div>
        </div>
      </div>
    </>
  )
}
