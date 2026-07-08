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
          <div className={local.saltViz}>
            <div className={local.saltStage}>🌊 air laut</div>
            <div className={local.saltArrow}>☀️ dijemur berhari-hari →</div>
            <div className={local.saltStage}>🧂 kristal garam</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Petani garam menampung air laut di tambak dangkal, lalu membiarkannya di bawah terik matahari selama berhari-hari.<br /><br />
          Airnya perlahan berkurang, dan muncul <strong>kristal garam putih</strong> yang tadinya tidak terlihat sama sekali dalam air laut.<br /><br />
          Dari mana garam padat itu muncul, padahal air laut terlihat cair biasa?
        </p>
        <div className={styles.predLabel}>Menurutmu, bagaimana garam yang terlarut dalam air laut bisa muncul jadi kristal padat?</div>
        <div className={styles.choices}>
          {[
            'Matahari mengubah air menjadi garam secara kimiawi.',
            'Air menguap perlahan (evaporasi) karena panas matahari, sementara garam yang terlarut tidak ikut menguap dan akhirnya mengkristal.',
            'Garam muncul dari dasar tambak, bukan dari air laut.',
            'Angin membawa garam dari laut lepas ke tambak.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita amati proses evaporasi secara bertahap.</div>}
      </div>
    </div>
  )
}
