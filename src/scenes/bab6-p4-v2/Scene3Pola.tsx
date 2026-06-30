import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki 1.000 padi vs 1 elang.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>Setiap kali energi berpindah dari satu tingkat trofik ke tingkat berikutnya, sekitar 90% energinya hilang sebagai panas akibat aktivitas metabolisme (bergerak, bernapas, mencerna).</div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Hubungkan dengan piramida →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Inilah "Hukum 10%" dalam ekologi.</div>
            <p className={styles.conceptText}>Hanya sekitar <strong>10% energi</strong> yang berhasil diteruskan ke tingkat berikutnya. Itulah mengapa elang (predator puncak) harus jauh lebih sedikit jumlahnya dari padi — energi yang tersedia untuk mereka memang jauh lebih sedikit.</p>
          </div>
        )}
      </div>
    </div>
  )
}
