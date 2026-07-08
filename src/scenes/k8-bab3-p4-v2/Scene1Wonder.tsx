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
          <div className={local.doorViz}>
            <div className={local.doorHinge}>🔩 engsel</div>
            <div className={local.doorBar} />
            <div className={local.doorKnob}>🚪 gagang</div>
          </div>
          <div className={local.doorNote}>Dorong dekat engsel = berat. Dorong di gagang (jauh) = ringan.</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Kalau kamu dorong pintu <strong>dekat engselnya</strong>, terasa berat — butuh tenaga besar.<br /><br />
          Tapi dorong di <strong>gagang pintu</strong> (jauh dari engsel), terasa jauh lebih ringan — meski itu pintu yang sama persis.<br /><br />
          Kenapa jarak dari titik tumpu bisa mengubah seberapa berat sesuatu terasa?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa mendorong jauh dari engsel terasa lebih ringan daripada dekat engsel?</div>
        <div className={styles.choices}>
          {[
            'Bagian gagang pintu memang dibuat lebih ringan dari bagian dekat engsel.',
            'Lengan gaya yang lebih panjang menghasilkan keuntungan mekanik lebih besar — gaya yang dibutuhkan jadi lebih kecil.',
            'Ini hanya ilusi — gaya yang dibutuhkan sebenarnya sama saja di titik manapun.',
            'Gagang pintu punya pegas tersembunyi yang membantu dorongan.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji dengan tuas interaktif.</div>}
      </div>
    </div>
  )
}
