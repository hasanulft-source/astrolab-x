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
          <div className={local.trackViz}>
            <div className={local.trackStart}>🏁 Start</div>
            <svg viewBox="0 0 200 80" className={local.trackPath}>
              <path d="M 20 60 Q 100 0, 180 60" fill="none" stroke="#0d6b7a" strokeWidth="3" strokeDasharray="5,3" />
            </svg>
            <div className={local.trackEnd}>🏁 Finish (sama dgn start)</div>
          </div>
          <div className={local.trackNote}>Pelari mengelilingi lintasan 400m dan kembali ke titik start</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Seorang pelari mengelilingi lintasan stadion sepanjang 400 meter — lalu kembali tepat ke titik start.<br /><br />
          Ia sudah berlari sejauh <strong>400 meter</strong>. Tapi posisi akhirnya <strong>sama dengan posisi awal</strong>.<br /><br />
          Berapa "perpindahan" pelari itu?
        </p>
        <div className={styles.predLabel}>Menurutmu, berapa perpindahan pelari yang kembali ke titik start setelah berlari 400m?</div>
        <div className={styles.choices}>
          {[
            '400 meter — sama dengan jarak yang ditempuh.',
            '0 meter — karena posisi akhir sama dengan posisi awal.',
            '200 meter — setengah dari jarak tempuh.',
            'Tidak bisa ditentukan tanpa tahu arah larinya.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita bedah perbedaan jarak dan perpindahan.</div>}
      </div>
    </div>
  )
}
