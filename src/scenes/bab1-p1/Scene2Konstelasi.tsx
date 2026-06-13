import { useState } from 'react'
import { ConstellationViewer } from '../../components/ConstellationViewer'
import { BRANCHES, byId } from './data'
import styles from './Scene2Konstelasi.module.css'

export function Scene2Konstelasi() {
  const [sel, setSel] = useState<string | null>(null)
  const b = sel ? byId(sel) : null
  return (
    <>
      <p className={styles.prompt}>IPA itu <em>keluarga besar</em> ilmu. Klik tiap cabang untuk kenalan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <ConstellationViewer branches={BRANCHES} selected={sel} onSelect={setSel} />
        </div>
        <div className={styles.panel}>
          {b ? (
            <>
              <div className={styles.pIcon}>{b.icon}</div>
              <div className={styles.pName}>{b.name}</div>
              <p className={styles.pText}>{b.short}</p>
            </>
          ) : (
            <p className={styles.empty}>Klik salah satu cabang di konstelasi untuk melihat penjelasannya.</p>
          )}
        </div>
      </div>
    </>
  )
}
