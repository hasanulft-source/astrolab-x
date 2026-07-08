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
          <div className={local.filterViz}>
            <div className={local.beforeWater}>💧 keruh</div>
            <div className={local.filterArrow}>disaring →</div>
            <div className={local.afterWater}>💧 jernih</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Air sumur yang keruh berisi lumpur bisa berubah <strong>jernih</strong> hanya dengan disaring lewat kain atau kertas saring.<br /><br />
          Airnya tetap sama, lumpurnya hilang begitu saja dari tampilan.<br /><br />
          Ke mana sebenarnya "hilangnya" lumpur itu?
        </p>
        <div className={styles.predLabel}>Menurutmu, ke mana perginya lumpur saat air disaring hingga jernih?</div>
        <div className={styles.choices}>
          {[
            'Lumpur larut sepenuhnya dan menyatu dengan air, hanya tak terlihat.',
            'Lumpur tertahan oleh saringan karena ukuran partikelnya lebih besar dari pori-pori saringan, sementara air (partikelnya lebih kecil) lolos.',
            'Lumpur menguap saat air disaring.',
            'Proses penyaringan mengubah lumpur menjadi zat baru yang tidak terlihat.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita bandingkan filtrasi dan distilasi.</div>}
      </div>
    </div>
  )
}
