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
          <div className={local.pyraViz}>
            <div className={local.pLevel} style={{ width: '40%' }}>🦅 Elang: 1</div>
            <div className={local.pLevel} style={{ width: '60%' }}>🐍 Ular: 10</div>
            <div className={local.pLevel} style={{ width: '80%' }}>🐭 Tikus: 100</div>
            <div className={local.pLevel} style={{ width: '100%' }}>🌾 Padi: 1.000</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Di sawah seluas 1 hektar, ada 1.000 batang padi, 100 ekor tikus, 10 ekor ular, tapi hanya <strong>1 ekor elang</strong>.<br /><br />
          Setiap naik satu tingkat rantai makanan, jumlahnya menyusut drastis — sekitar 10 kali lipat.<br /><br />
          Mengapa pola ini selalu berulang di hampir semua ekosistem?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa jumlah organisme menyusut drastis di setiap tingkat rantai makanan?</div>
        <div className={styles.choices}>
          {[
            'Predator sengaja membatasi jumlah mangsanya.',
            'Sebagian besar energi hilang sebagai panas di setiap perpindahan tingkat makan.',
            'Hewan tingkat tinggi memang lebih sedikit jumlahnya sejak lahir.',
            'Ruang habitat tidak cukup untuk banyak predator.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita ikuti aliran energinya.</div>}
      </div>
    </div>
  )
}
