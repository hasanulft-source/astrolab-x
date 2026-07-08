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
          <div className={local.rockViz}>
            <div className={local.rockHand}>✋🪨 (tak tergerakkan)</div>
            <div className={local.rockArrow}>vs</div>
            <div className={local.rockLever}>🪨↗️ (mudah dicongkel dengan linggis)</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Batu besar yang <strong>tidak bisa digerakkan tangan kosong</strong> sama sekali...<br /><br />
          ...tiba-tiba jadi <strong>mudah dicongkel</strong> hanya dengan sebatang linggis dan sedikit tenaga.<br /><br />
          Massa batu itu tidak berubah. Lalu apa yang sebenarnya berubah?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa linggis bisa membuat batu berat terasa jauh lebih ringan diangkat?</div>
        <div className={styles.choices}>
          {[
            'Linggis membuat batu jadi lebih ringan secara fisik.',
            'Linggis mengubah cara gaya bekerja — gaya kecil pada ujung panjang menghasilkan gaya besar di ujung pendek.',
            'Linggis hanya alat bantu psikologis, gayanya tetap sama.',
            'Batu jadi lebih mudah karena linggis membuat gesekan berkurang.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi 4 jenis pesawat sederhana.</div>}
      </div>
    </div>
  )
}
