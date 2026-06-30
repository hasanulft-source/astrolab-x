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
          <div className={local.brakeViz}>
            <span className={local.brakeIcon}>🚗💨</span>
            <div className={local.brakeMarks}>
              <div className={local.markBox}>0,5s: rem mendadak</div>
              <div className={local.markBox}>2,0s: mobil berhenti total</div>
            </div>
          </div>
          <div className={local.brakeNote}>Mobil melaju 20 m/s, lalu rem mendadak hingga benar-benar berhenti</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Mobil melaju 20 m/s, lalu sopirnya menginjak rem mendadak.<br /><br />
          Kecepatannya tidak langsung jadi 0 — ia <strong>berkurang secara bertahap</strong> dalam waktu sekitar 2 detik sebelum berhenti total.<br /><br />
          Bisakah kita menghitung berapa jarak yang ditempuh mobil saat mengerem itu?
        </p>
        <div className={styles.predLabel}>Menurutmu, bagaimana cara menghitung jarak yang ditempuh mobil selama mengerem?</div>
        <div className={styles.choices}>
          {[
            'Kalikan kecepatan awal dengan waktu rem (v × t).',
            'Hitung luas daerah di bawah grafik kecepatan-waktu.',
            'Tidak bisa dihitung tanpa tahu berat mobilnya.',
            'Jaraknya selalu sama untuk semua mobil yang mengerem.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita bangun grafik v-t dari peristiwa ini.</div>}
      </div>
    </div>
  )
}
