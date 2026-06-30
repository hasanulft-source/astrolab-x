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
          <div className={local.carViz}>
            <span className={local.carIcon}>🚗</span>
            <div className={local.carNote}>Mobil ditinggal di parkiran panas dengan jendela tertutup</div>
            <div className={local.tempCompare2}>
              <div><span>Suhu luar</span><strong>32°C</strong></div>
              <div><span>Suhu dalam mobil</span><strong>60°C+</strong></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Mobil yang diparkir di bawah terik matahari dengan jendela tertutup bisa mencapai suhu di dalam <strong>jauh lebih panas</strong> dari suhu udara di luar.<br /><br />
          Cahaya matahari masuk melalui kaca, tapi panasnya tidak bisa keluar dengan mudah.<br /><br />
          Apa yang membuat panas "terjebak" di dalam mobil — dan apa hubungannya dengan bumi kita?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa panas bisa "terjebak" di dalam mobil yang tertutup?</div>
        <div className={styles.choices}>
          {[
            'Kaca mobil menyaring udara segar dari luar.',
            'Cahaya matahari mudah masuk lewat kaca, tapi panas yang dipantulkan balik sulit keluar.',
            'AC mobil yang mati menyebabkan panas terkumpul.',
            'Warna mobil menyerap semua panas matahari.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita lihat bagaimana ini terjadi di skala bumi.</div>}
      </div>
    </div>
  )
}
