import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki perubahan bentuk bulan.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>Bulan tidak punya cahaya sendiri — ia hanya memantulkan cahaya matahari. Posisi bulan relatif terhadap bumi dan matahari terus berubah saat bulan mengorbit bumi.</div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Mengapa bentuknya berubah? →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Bulan tidak berubah — sudut pandang kita yang berubah.</div>
            <p className={styles.conceptText}>Setengah bulan selalu disinari matahari (siang di bulan), setengah lainnya gelap (malam di bulan). Saat bulan mengorbit bumi, <strong>bagian terang yang bisa kita lihat dari bumi berubah</strong> — itulah yang menciptakan ilusi "perubahan bentuk".</p>
          </div>
        )}
      </div>
    </div>
  )
}
