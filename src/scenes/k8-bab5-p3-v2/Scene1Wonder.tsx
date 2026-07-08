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
          <div className={local.strawViz}>
            <div className={local.glassWater} />
            <div className={local.strawBent}>🥤</div>
          </div>
          <div className={local.strawNote}>Sedotan lurus terlihat "patah" di batas permukaan air</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Sebatang sedotan lurus dimasukkan ke gelas berisi air.<br /><br />
          Saat dilihat dari samping, sedotan itu terlihat <strong>patah atau bengkok</strong> tepat di batas permukaan air — padahal kalau diangkat, sedotannya tetap lurus utuh.<br /><br />
          Sedotannya tidak benar-benar patah. Lalu apa yang membuatnya terlihat begitu?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa sedotan terlihat patah di batas air padahal fisiknya tetap lurus?</div>
        <div className={styles.choices}>
          {[
            'Air memang membuat benda yang tercelup jadi bengkok secara fisik.',
            'Cahaya dibelokkan (dibiaskan) saat berpindah dari medium air ke udara, membuat posisi sedotan tampak berbeda.',
            'Ini hanya ilusi optik mata manusia, tidak ada hubungannya dengan cahaya.',
            'Gelas kaca yang membuat sedotan terlihat melengkung.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi pemantulan dan pembiasan cahaya.</div>}
      </div>
    </div>
  )
}
