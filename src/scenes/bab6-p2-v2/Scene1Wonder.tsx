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
          <div className={local.symVizRow}>
            <span>🐠</span><span className={local.symPlus}>+</span><span>🦑</span>
          </div>
          <div className={local.symNote}>Ikan badut tinggal di antara tentakel anemon laut yang beracun — keduanya diuntungkan</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Ikan badut hidup berdampingan dengan anemon laut yang berbisa. Hewan lain yang menyentuh anemon akan terluka — tapi ikan badut justru <strong>tinggal di dalamnya</strong> dengan aman.<br /><br />
          Anemon melindungi ikan dari predator. Ikan badut membersihkan parasit dari anemon dan mengusir ikan pemakan anemon.<br /><br />
          Apa nama hubungan seperti ini?
        </p>
        <div className={styles.predLabel}>Menurutmu, jenis hubungan apa yang terjadi antara ikan badut dan anemon laut?</div>
        <div className={styles.choices}>
          {[
            'Predasi — ikan badut sebenarnya memangsa anemon perlahan.',
            'Mutualisme — keduanya saling diuntungkan.',
            'Parasitisme — ikan badut menumpang tanpa memberi manfaat.',
            'Kompetisi — keduanya bersaing untuk sumber makanan yang sama.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi semua jenis simbiosis.</div>}
      </div>
    </div>
  )
}
