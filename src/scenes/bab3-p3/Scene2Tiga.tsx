import { useState } from 'react'
import { HeatTransferViz } from '../../components/HeatTransferViz'
import { CARA, type Mode } from './data'
import styles from './ui.module.css'

export function Scene2Tiga() {
  const [m, setM] = useState<Mode>('konduksi')
  const c = CARA.find(x => x.id === m)!
  return (
    <>
      <p className={styles.prompt}>Ada <em>tiga cara</em> kalor berpindah. Klik tiap tab — lihat animasinya.</p>
      <div className={styles.tabs}>
        {CARA.map(x => <div key={x.id} role="button" className={m === x.id ? styles.tabActive : styles.tab} onClick={() => setM(x.id)}>{x.name}</div>)}
      </div>
      <div className={styles.caraMain}>
        <div className={styles.viz}><HeatTransferViz mode={m} /></div>
        <div className={styles.cInfo}>
          <span className={styles.cName}>{c.name}</span>
          <span className={styles.cDesc}>{c.desc}</span>
          <div className={styles.cMeta}>
            <div className={styles.cRow}><span className={styles.cK}>medium</span><span className={styles.cV}>{c.medium}</span></div>
            <div className={styles.cRow}><span className={styles.cK}>partikel</span><span className={styles.cV}>{c.partikel}</span></div>
            <div className={styles.cRow}><span className={styles.cK}>contoh</span><span className={styles.cV}>{c.contoh}</span></div>
          </div>
        </div>
      </div>
    </>
  )
}
