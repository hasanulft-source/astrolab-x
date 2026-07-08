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
          <div className={local.swallowViz}>
            <div className={local.swItem}>🍚 dikunyah halus</div>
            <div className={local.swVs}>vs</div>
            <div className={local.swItem}>🍚 ditelan bulat-bulat</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Nasi biasanya dikunyah sampai halus sebelum ditelan.<br /><br />
          Tapi bayangkan kamu menelan sebutir nasi <strong>bulat-bulat tanpa dikunyah</strong> — ia tetap sampai ke lambung, tetap dicerna, tetap jadi energi.<br /><br />
          Kalau begitu, untuk apa sebenarnya mengunyah?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa fungsi mengunyah kalau makanan tetap bisa dicerna tanpa dikunyah?</div>
        <div className={styles.choices}>
          {[
            'Mengunyah cuma kebiasaan sosial, tidak punya fungsi biologis.',
            'Mengunyah memperbesar luas permukaan makanan agar enzim bekerja lebih cepat dan efisien.',
            'Mengunyah hanya berfungsi mengubah rasa makanan.',
            'Makanan yang tidak dikunyah tidak akan pernah tercerna.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita telusuri seluruh saluran pencernaan.</div>}
      </div>
    </div>
  )
}
