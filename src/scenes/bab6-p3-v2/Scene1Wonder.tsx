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
          <div className={local.chainViz}>
            <span>🌾</span><span>→</span><span>🐭</span><span>→</span><span>🐍</span><span>→</span><span>🦅</span>
          </div>
          <div className={local.chainCaption}>Rantai makanan sederhana di sawah</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Padi dimakan tikus. Tikus dimakan ular. Ular dimakan elang. Terlihat sederhana — satu garis lurus.<br /><br />
          Tapi kenyataannya, elang juga makan tikus langsung, dan ular juga dimakan burung hantu. Banyak rantai makanan saling <strong>menyilang</strong>.<br /><br />
          Apa yang terjadi jika kita gabungkan semua rantai makanan ini?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang terbentuk jika banyak rantai makanan saling terhubung?</div>
        <div className={styles.choices}>
          {[
            'Rantai makanan yang lebih panjang.',
            'Jaring-jaring makanan — jaringan kompleks yang lebih realistis dari satu rantai saja.',
            'Tidak ada perubahan, tetap rantai-rantai terpisah.',
            'Sistem yang membingungkan dan tidak punya pola.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita bangun jaring-jaring makanan sendiri.</div>}
      </div>
    </div>
  )
}
