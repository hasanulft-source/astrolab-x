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
            <div className={local.glass}>
              <div className={local.water} />
              <div className={local.egg} style={{ bottom: 4 }}>🥚</div>
              <div className={local.glassLabel}>Air tawar</div>
            </div>
            <div className={local.glass}>
              <div className={local.water} />
              <div className={local.egg} style={{ bottom: '65%' }}>🥚</div>
              <div className={local.glassLabel}>Air garam</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Telur yang sama. Air yang hampir sama — hanya satu yang ditambah garam.<br /><br />
          Yang satu <strong>tenggelam</strong>. Yang satu <strong>mengapung</strong>.<br /><br />
          Fenomena ini bisa kamu uji sendiri di dapur rumahmu.
        </p>
        <div className={styles.predLabel}>Sebelum bereksplorasi — menurutmu, apa yang sebenarnya terjadi?</div>
        <div className={styles.choices}>
          {[
            'Garam membuat air "lebih kuat" sehingga bisa menahan telur.',
            'Garam meningkatkan kerapatan air sehingga daya apungnya lebih besar.',
            'Garam mengubah permukaan telur menjadi lebih ringan.',
            'Saya belum tahu — tapi ingin selidiki.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Hipotesis dicatat. Ini titik awal penyelidikan ilmiahmu.</div>}
      </div>
    </div>
  )
}
