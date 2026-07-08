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
          <div className={local.bottleViz}>
            <div className={local.bottleTop}>🎈🎈 (paru-paru tiruan)</div>
            <div className={local.bottleBody}>botol plastik</div>
            <div className={local.bottleBottom}>🎈 karet ditarik (diafragma)</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Paru-paru <strong>tidak punya otot sendiri</strong> — ia tidak bisa mengembang atau mengempis dengan kekuatannya sendiri, seperti balon yang tidak bisa meniup dirinya sendiri.<br /><br />
          Tapi setiap detik, tanpa kamu sadari, paru-parumu terus mengembang dan mengempis.<br /><br />
          Kalau paru-paru sendiri tidak punya otot, apa yang menggerakkannya?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang membuat paru-paru bisa mengembang dan mengempis kalau ia sendiri tidak punya otot?</div>
        <div className={styles.choices}>
          {[
            'Paru-paru punya otot tersembunyi yang tidak terlihat.',
            'Otot di sekitar paru-paru (diafragma & otot rusuk) mengubah ukuran rongga dada, menarik/mendorong paru secara pasif.',
            'Udara sendiri yang mendorong paru-paru bergerak.',
            'Jantung yang menggerakkan paru-paru lewat detaknya.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita simulasikan mekanismenya.</div>}
      </div>
    </div>
  )
}
