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
          <div className={local.ecoViz}>
            <span>🦋</span><span>🌳</span><span>🍄</span><span>💧</span><span>☀️</span><span>🪨</span>
          </div>
          <div className={local.ecoNote}>Satu kolam ikan kecil di belakang sekolahmu</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Kolam kecil di belakang sekolahmu terlihat sederhana — hanya air, ikan, dan beberapa tanaman.<br /><br />
          Tapi sebenarnya di sana ada <strong>ratusan interaksi</strong> antara makhluk hidup dan benda mati yang terjadi setiap detik, tanpa kamu sadari.<br /><br />
          Apa saja yang sebenarnya membentuk satu "ekosistem"?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa saja yang termasuk komponen sebuah ekosistem?</div>
        <div className={styles.choices}>
          {[
            'Hanya makhluk hidup — hewan dan tumbuhan saja.',
            'Makhluk hidup DAN benda tak hidup (air, udara, suhu, cahaya) yang saling memengaruhi.',
            'Hanya hewan yang bisa bergerak dan berinteraksi aktif.',
            'Semua benda yang terlihat di satu lokasi tertentu.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita bongkar komponen ekosistem.</div>}
      </div>
    </div>
  )
}
