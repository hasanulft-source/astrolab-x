import { useState } from 'react'
import { WujudDiagram } from '../../components/WujudDiagram'
import { TRANSISI, byId } from './data'
import styles from './ui.module.css'

export function Scene2Diagram() {
  const [sel, setSel] = useState<string | null>(null)
  const t = sel ? byId(sel) : null
  return (
    <>
      <p className={styles.prompt}>Ada <em>6 perubahan wujud</em>. Klik tiap nama — lihat arah perubahan & arah kalornya.</p>
      <div className={styles.main}>
        <div className={styles.viz}><WujudDiagram from={t?.from} to={t?.to} kalor={t?.kalor} /></div>
        <div className={styles.side}>
          <div className={styles.chips}>
            {TRANSISI.map(x => <div key={x.id} role="button" className={sel === x.id ? styles.chipActive : styles.chip} onClick={() => setSel(x.id)}>{x.name}</div>)}
          </div>
          {t ? (
            <div className={styles.detail}>
              <span className={styles.dName}>{t.name}</span>
              <span className={styles.dFlow}>{t.from} → {t.to}</span>
              <span className={`${styles.kalorTag} ${t.kalor === 'menyerap' ? styles.menyerap : styles.melepas}`}>{t.kalor} kalor</span>
              <span className={styles.dContoh}>{t.contoh}</span>
            </div>
          ) : <p className={styles.empty}>Pilih salah satu perubahan wujud di atas.</p>}
        </div>
      </div>
    </>
  )
}
