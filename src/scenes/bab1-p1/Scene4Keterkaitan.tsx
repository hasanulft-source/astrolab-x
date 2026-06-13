import { useState } from 'react'
import { ConstellationViewer } from '../../components/ConstellationViewer'
import { BRANCHES, COMBOS, byId } from './data'
import styles from './Scene4Keterkaitan.module.css'

export function Scene4Keterkaitan() {
  const [i, setI] = useState<number | null>(null)
  const combo = i !== null ? COMBOS[i] : null
  return (
    <>
      <p className={styles.prompt}>Cabang IPA tidak berdiri sendiri — banyak ilmu lahir dari <em>gabungan</em>. Klik untuk lihat:</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <ConstellationViewer branches={BRANCHES} connections={COMBOS} activeConn={combo ? { a: combo.a, b: combo.b } : null} />
        </div>
        <div className={styles.panel}>
          <div className={styles.chips}>
            {COMBOS.map((c, idx) => (
              <div key={c.name} role="button" className={i === idx ? styles.chipActive : styles.chip} onClick={() => setI(idx)}>
                {c.name}
              </div>
            ))}
          </div>
          {combo ? (
            <div className={styles.detail}>
              <div className={styles.cName}>{combo.name}</div>
              <div className={styles.cParts}>{byId(combo.a)?.name} + {byId(combo.b)?.name}</div>
              <p className={styles.cDesc}>{combo.desc}</p>
            </div>
          ) : (
            <p className={styles.empty}>Pilih salah satu ilmu gabungan untuk melihat dua cabang yang membentuknya.</p>
          )}
        </div>
      </div>
    </>
  )
}
