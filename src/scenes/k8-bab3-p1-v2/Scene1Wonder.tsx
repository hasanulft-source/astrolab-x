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
          <div className={local.wallViz}>
            <div className={local.pusher}>💪</div>
            <div className={local.wall}>🧱 (diam, tidak bergerak)</div>
          </div>
          <div className={local.sweatNote}>10 menit mendorong sekuat tenaga — berkeringat, lelah, tapi tembok tidak bergeser sedikit pun</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Kamu mendorong tembok sekuat tenaga selama 10 menit — sampai berkeringat dan kelelahan.<br /><br />
          Tapi tembok itu <strong>tidak bergerak sedikit pun</strong>, bahkan 1 milimeter.<br /><br />
          Menurut fisika, apakah kamu baru saja melakukan "usaha"?
        </p>
        <div className={styles.predLabel}>Menurutmu, apakah mendorong tembok yang diam termasuk melakukan usaha (dalam arti fisika)?</div>
        <div className={styles.choices}>
          {[
            'Ya — kamu jelas mengeluarkan tenaga dan berkeringat.',
            'Tidak — dalam fisika, usaha hanya terjadi jika ada perpindahan, meski gaya sangat besar.',
            'Ya, tapi hanya setengah usaha karena tembok tidak bergerak jauh.',
            'Tidak bisa ditentukan tanpa tahu berapa besar gayanya.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji dengan rumus usaha yang sesungguhnya.</div>}
      </div>
    </div>
  )
}
