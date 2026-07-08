import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene1Wonder({ onUnlock }: DiscoverySceneProps) {
  const [pick, setPick] = useState<number | null>(null)

  return (
    <div className={styles.wonder}>
      <div className={styles.storyPanel}>
        <div className={styles.sceneViz}>
          <div className={local.hillRow}>
            <div className={local.hillBare}><span>⛰️</span><span>gundul</span></div>
            <div className={local.hillGreen}><span>🌳⛰️</span><span>penuh pohon</span></div>
          </div>
          <div className={local.rainNote}>🌧️ Hujan deras mengguyur kedua lereng bersamaan</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Hujan deras mengguyur dua lereng bukit yang bersebelahan — satu <strong>gundul tanpa pohon</strong>, satu lagi <strong>penuh pohon</strong>.<br /><br />
          Setelah hujan reda, salah satu lereng kehilangan banyak tanah (hanyut terbawa air), sementara yang lain relatif aman.<br /><br />
          Menurutmu, lereng mana yang tanahnya lebih banyak hanyut, dan mengapa?
        </p>
        <div className={styles.predLabel}>Menurutmu, lereng mana yang tanahnya lebih mudah hanyut saat hujan deras — dan apa alasannya?</div>
        <div className={styles.choices}>
          {[
            'Lereng berpohon lebih rentan karena pohon menyerap air dan membuat tanah lebih basah.',
            'Lereng gundul lebih rentan — tanpa akar yang menahan struktur tanah, air hujan mudah mengikis dan membawa tanah pergi.',
            'Keduanya sama saja, jumlah pohon tidak berpengaruh pada erosi.',
            'Lereng gundul justru lebih aman karena air langsung mengalir tanpa hambatan.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi erosi dan cara mencegahnya.</div>}
      </div>
    </div>
  )
}
