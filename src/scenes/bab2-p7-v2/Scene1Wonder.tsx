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
          <div className={local.shipViz}>
            <div className={local.water2} />
            <div className={local.ship}>🚢</div>
            <div className={local.coin}>🪙</div>
          </div>
          <div className={local.shipCaption}>Kapal besi raksasa mengapung — koin kecil dari logam yang sama tenggelam</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Kapal pesiar terbuat dari <strong>besi</strong> — bisa mengapung di laut meski beratnya ribuan ton.<br /><br />
          Tapi sebuah koin kecil dari besi yang sama langsung <strong>tenggelam</strong> ke dasar kolam.<br /><br />
          Bagaimana mungkin yang lebih besar dan berat justru mengapung?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang membuat kapal besi bisa mengapung sedangkan koin besi tenggelam?</div>
        <div className={styles.choices}>
          {[
            'Kapal punya mesin yang membuatnya tetap di permukaan.',
            'Bentuk kapal membuat volumenya jauh lebih besar dibanding massanya — menurunkan massa jenisnya.',
            'Air laut lebih kuat menahan benda besar dibanding benda kecil.',
            'Kapal sebenarnya tidak terbuat dari besi murni.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita bongkar konsep massa jenis.</div>}
      </div>
    </div>
  )
}
