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
          <div className={local.jarViz}>
            <div className={local.jarLid}>🫙</div>
            <div className={local.jarArrow}>↓ rendam air panas ↓</div>
            <div className={local.jarOpen}>✨ Mudah dibuka!</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Tutup toples logam yang macet bisa dibuka dengan mudah hanya dengan <strong>merendamnya di air panas</strong> sebentar.<br /><br />
          Kamu tidak mengubah toplesnya. Tidak melumasi apapun. Hanya panas.<br /><br />
          Apa yang sebenarnya terjadi pada tutup logamnya?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa air panas membuat tutup logam jadi mudah dibuka?</div>
        <div className={styles.choices}>
          {[
            'Air panas melumasi bagian dalam tutup sehingga lebih licin.',
            'Logam memuai (membesar) saat dipanaskan, sehingga tutup jadi lebih longgar.',
            'Panas membuat toples menyusut sedikit.',
            'Air panas melemahkan kekuatan logam sementara.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji pemuaian secara langsung.</div>}
      </div>
    </div>
  )
}
