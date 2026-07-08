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
          <div className={local.diveViz}>
            <div className={local.diveWater}>
              <span className={local.diverIcon}>🤿</span>
            </div>
          </div>
          <div className={local.diveNote}>Semakin dalam menyelam, telinga terasa semakin sakit — padahal air di sekitarmu terlihat sama</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Saat menyelam, semakin dalam kamu turun, telinga terasa <strong>semakin sakit</strong> — seperti ada yang menekan dari segala arah.<br /><br />
          Air di kolam terlihat sama di permukaan maupun di dasar — tidak ada yang terlihat berbeda.<br /><br />
          Apa yang sebenarnya menekan telingamu makin kuat saat makin dalam?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa tekanan air terasa makin kuat semakin dalam kamu menyelam?</div>
        <div className={styles.choices}>
          {[
            'Air di kedalaman lebih dingin sehingga terasa lebih menekan.',
            'Semakin dalam, semakin banyak air di atasmu yang beratnya menekan ke bawah — tekanan bertambah seiring kedalaman.',
            'Tekanan air sebenarnya sama di semua kedalaman, hanya perasaan saja.',
            'Telinga menjadi lebih sensitif saat berada di air.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji dengan rumus tekanan hidrostatis.</div>}
      </div>
    </div>
  )
}
