import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki musim berlawanan.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>Saat bumi mengorbit matahari dengan sumbu miring 23,5° yang tetap, satu belahan bumi akan condong ke matahari sementara belahan lain condong menjauh.</div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Mengapa musimnya berlawanan? →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Kemiringan sumbu — bukan jarak — yang menentukan musim.</div>
            <p className={styles.conceptText}>Saat belahan utara condong ke matahari, ia menerima <strong>sinar lebih langsung dan lebih lama</strong> — musim panas. Bersamaan, belahan selatan condong menjauh — menerima sinar lebih miring dan singkat — musim dingin.</p>
            <p className={styles.conceptText}>Inilah mengapa Indonesia (dekat khatulistiwa) tidak mengalami 4 musim ekstrem — sumbu bumi tidak terlalu memengaruhi sudut sinar di sana.</p>
          </div>
        )}
      </div>
    </div>
  )
}
