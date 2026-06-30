import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang jawab teka-teki pelari di awal.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>Pelari berlari 400m mengelilingi lintasan dan kembali ke titik start.</div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Hitung jarak & perpindahannya →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Jarak = 400m, Perpindahan = 0m.</div>
            <p className={styles.conceptText}>
              <strong>Jarak</strong> (skalar) hanya menghitung total panjang lintasan — selalu positif, tidak peduli arah.<br /><br />
              <strong>Perpindahan</strong> (vektor) menghitung perubahan posisi dari awal ke akhir — karena posisi akhir = posisi awal, perpindahannya nol.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
