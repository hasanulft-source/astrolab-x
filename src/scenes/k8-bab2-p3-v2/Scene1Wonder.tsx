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
          <div className={local.breathViz}>😮‍💨</div>
          <div className={local.breathNote}>Setiap kali kamu menghembuskan napas, kamu sedang membuang sesuatu</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Kebanyakan orang hanya menganggap <strong>buang air kecil</strong> sebagai satu-satunya cara tubuh membuang zat sisa.<br /><br />
          Tapi napas yang kamu hembuskan sekarang juga membawa <strong>CO₂</strong> — zat sisa dari proses tubuh yang harus dibuang.<br /><br />
          Kalau begitu, apakah bernapas juga termasuk "ekskresi"?
        </p>
        <div className={styles.predLabel}>Menurutmu, apakah menghembuskan napas (membuang CO₂) termasuk proses ekskresi?</div>
        <div className={styles.choices}>
          {[
            'Tidak — ekskresi hanya untuk buang air kecil dan besar.',
            'Ya — ekskresi adalah pembuangan zat sisa metabolisme dari tubuh, dan paru-paru membuang CO₂ yang termasuk zat sisa itu.',
            'Bernapas hanya untuk ambil oksigen, tidak ada hubungannya dengan ekskresi.',
            'Hanya ginjal yang bisa disebut organ ekskresi.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi semua organ ekskresi tubuh.</div>}
      </div>
    </div>
  )
}
