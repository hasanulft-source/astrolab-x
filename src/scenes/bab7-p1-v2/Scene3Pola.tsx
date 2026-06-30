import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki gravitasi tata surya.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>Matahari memiliki 99,8% dari seluruh massa tata surya — jauh lebih berat dari seluruh planet digabung.</div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Mengapa planet tetap berputar? →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Gravitasi matahari yang sangat besar "menahan" semua planet.</div>
            <p className={styles.conceptText}>Karena massanya luar biasa besar, <strong>gaya gravitasi matahari</strong> menarik semua planet untuk tetap berputar mengelilinginya — sama seperti kamu memutar bola di tali, gravitasi berperan sebagai "tali tak terlihat" itu.</p>
            <p className={styles.conceptText}>Tanpa gravitasi matahari, planet akan terbang lurus ke ruang angkasa, bukan mengorbit.</p>
          </div>
        )}
      </div>
    </div>
  )
}
