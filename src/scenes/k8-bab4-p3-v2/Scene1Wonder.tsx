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
          <div className={local.jackViz}>
            <div className={local.jackCar}>🚗 (1 ton)</div>
            <div className={local.jackArrow}>↑</div>
            <div className={local.jackLever}>👉 tuas kecil</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Seorang montir mengangkat mobil seberat <strong>1 ton</strong> hanya dengan menekan tuas kecil berulang kali — tenaganya jauh lebih kecil dari berat mobil.<br /><br />
          Tidak ada trik sulap, tidak ada motor tersembunyi. Hanya zat cair di dalam dongkrak.<br /><br />
          Bagaimana gaya sekecil itu bisa mengangkat beban seberat itu?
        </p>
        <div className={styles.predLabel}>Menurutmu, bagaimana dongkrak hidrolik bisa mengangkat beban jauh lebih berat dari gaya yang diberikan?</div>
        <div className={styles.choices}>
          {[
            'Zat cair di dalam dongkrak menjadi lebih ringan saat ditekan.',
            'Tekanan yang diberikan pada zat cair diteruskan sama besar ke segala arah, dan luas pengisap yang lebih besar menghasilkan gaya yang lebih besar.',
            'Dongkrak menyimpan energi dari pemakaian sebelumnya.',
            'Mobil sebenarnya tidak seberat yang terlihat.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji dengan simulasi dongkrak hidrolik.</div>}
      </div>
    </div>
  )
}
