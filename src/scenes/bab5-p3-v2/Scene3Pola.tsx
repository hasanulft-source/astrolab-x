import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki jamur.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>
          Tanaman: dinding sel selulosa, autotrof (fotosintesis).<br />
          Hewan: tanpa dinding sel, heterotrof, bisa bergerak.<br />
          Jamur: dinding sel KITIN (bukan selulosa), heterotrof (seperti hewan), TIDAK bergerak (seperti tanaman).
        </div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Mengapa jamur terpisah? →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Jamur punya kombinasi ciri yang unik.</div>
            <p className={styles.conceptText}>Jamur memang heterotrof seperti hewan, tapi <strong>dinding selnya dari kitin</strong> (bukan kolagen seperti hewan, bukan selulosa seperti tanaman) — dan cara reproduksinya lewat <strong>spora</strong> sangat khas. Inilah mengapa ilmuwan memberinya kingdom tersendiri: Fungi.</p>
          </div>
        )}
      </div>
    </div>
  )
}
