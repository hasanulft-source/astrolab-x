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
          <div className={local.eggViz}>
            <div className={local.eggCup}><span>🥚</span><span>air tawar</span><span className={local.eggSink}>tenggelam</span></div>
            <div className={local.eggCup}><span>🥚</span><span>air garam pekat</span><span className={local.eggFloat}>mengapung</span></div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Telur mentah yang sama dimasukkan ke dua gelas berbeda.<br /><br />
          Di air tawar biasa, telur itu <strong>tenggelam</strong> ke dasar. Di air yang dilarutkan banyak garam, telur yang sama <strong>mengapung</strong> di permukaan.<br /><br />
          Telurnya sama persis. Apa yang sebenarnya berubah?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa telur yang sama bisa tenggelam di satu cairan tapi mengapung di cairan lain?</div>
        <div className={styles.choices}>
          {[
            'Garam membuat telur menjadi lebih ringan secara kimiawi.',
            'Melarutkan garam membuat massa jenis air garam lebih besar dari massa jenis telur, sehingga telur terapung.',
            'Air garam mengandung gas yang membuat telur naik.',
            'Ini hanya ilusi optik dari warna air yang berbeda.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji dengan gaya apung Archimedes.</div>}
      </div>
    </div>
  )
}
