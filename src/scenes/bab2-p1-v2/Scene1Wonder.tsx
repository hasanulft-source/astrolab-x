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
          <div className={local.threeForm}>
            <div className={local.formCard}><span className={local.formIcon}>🧊</span><span>Es batu</span><span className={local.formNote}>keras, bentuk tetap</span></div>
            <div className={local.formCard}><span className={local.formIcon}>💧</span><span>Air</span><span className={local.formNote}>mengalir, ikut wadah</span></div>
            <div className={local.formCard}><span className={local.formIcon}>💨</span><span>Uap air</span><span className={local.formNote}>menyebar ke segala arah</span></div>
          </div>
          <div className={local.sameLabel}>Ketiganya adalah zat yang SAMA — air (H₂O)</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Es batu, air, dan uap air — ketiganya tersusun dari molekul yang <strong>persis sama</strong>: H₂O.<br /><br />
          Tapi sifatnya sangat berbeda. Yang satu keras, yang satu mengalir, yang satu menyebar tak terlihat.<br /><br />
          Apa yang sebenarnya berubah?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang membuat ketiganya berbeda padahal zatnya sama?</div>
        <div className={styles.choices}>
          {[
            'Jumlah molekulnya berbeda — es punya lebih banyak molekul.',
            'Jarak dan gerak antar-partikelnya berbeda, bukan jenis partikelnya.',
            'Es dan uap sebenarnya zat yang berbeda dari air.',
            'Suhu mengubah partikel air menjadi partikel lain.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita lihat partikelnya langsung.</div>}
      </div>
    </div>
  )
}
