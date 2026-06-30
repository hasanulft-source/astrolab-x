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
          <div className={local.syringeRow}>
            <div className={local.syringeCard}>
              <div className={local.syringeLabel}>Suntikan berisi AIR</div>
              <div className={local.syringeBody}>
                <div className={local.plunger} style={{ width:'80%' }} />
              </div>
              <div className={local.syringeResult}>Tidak bisa ditekan lagi</div>
            </div>
            <div className={local.syringeCard}>
              <div className={local.syringeLabel}>Suntikan berisi UDARA</div>
              <div className={local.syringeBody}>
                <div className={local.plunger} style={{ width:'35%', background:'#0891b2' }} />
              </div>
              <div className={local.syringeResult}>Bisa ditekan jauh lebih dalam</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Dua suntikan ditutup ujungnya. Satu diisi air, satu diisi udara.<br /><br />
          Saat ditekan, suntikan udara bisa <strong>dimampatkan jauh lebih banyak</strong> daripada suntikan air.<br /><br />
          Padahal keduanya sama-sama "zat".
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa udara lebih mudah dimampatkan dibanding air?</div>
        <div className={styles.choices}>
          {[
            'Udara lebih ringan, jadi lebih mudah ditekan.',
            'Jarak antar-partikel udara jauh lebih besar dari air, sehingga ada ruang untuk dimampatkan.',
            'Air memiliki partikel yang lebih besar dari udara.',
            'Suntikan untuk udara memang dirancang lebih lunak.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji konsep ini lebih dalam.</div>}
      </div>
    </div>
  )
}
