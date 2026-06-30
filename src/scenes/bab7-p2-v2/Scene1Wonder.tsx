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
          <div className={local.seasonViz}>
            <div className={local.seasonCard}>🌸 Maret: Indonesia</div>
            <div className={local.seasonCard}>❄️ Maret: Australia (musim dingin di belahan selatan)</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Setiap bulan Maret, di belahan bumi utara mulai musim semi yang hangat — tapi di Australia (belahan selatan), mereka justru memasuki musim dingin.<br /><br />
          Kedua tempat menerima sinar matahari yang sama setiap hari. Tapi musimnya <strong>berlawanan</strong>.<br /><br />
          Apa yang menyebabkan musim berbeda di belahan bumi yang berbeda secara bersamaan?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang menyebabkan belahan bumi utara dan selatan punya musim berlawanan?</div>
        <div className={styles.choices}>
          {[
            'Jarak bumi ke matahari berbeda di tiap musim.',
            'Kemiringan sumbu bumi membuat satu belahan menerima lebih banyak cahaya saat mengorbit.',
            'Belahan bumi selatan memang selalu lebih dingin.',
            'Rotasi bumi berputar lebih lambat di belahan selatan.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita simulasikan kemiringan bumi.</div>}
      </div>
    </div>
  )
}
