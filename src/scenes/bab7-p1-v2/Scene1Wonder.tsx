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
          <div className={local.sizeCompare}>
            <div className={local.sunDot}>☀️</div>
            <div className={local.earthDot}>🌍</div>
          </div>
          <div className={local.sizeNote}>Matahari bisa menampung 1,3 juta Bumi di dalamnya</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Jika matahari dikosongkan menjadi bola berongga, kamu bisa memasukkan <strong>1,3 juta planet Bumi</strong> ke dalamnya.<br /><br />
          Tapi matahari hanyalah satu dari miliaran bintang di galaksi kita — dan galaksi kita hanya satu dari miliaran galaksi.<br /><br />
          Bagaimana semua benda langit ini terorganisir di sekitar kita?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang membuat planet-planet tetap mengelilingi matahari, tidak terbang lepas?</div>
        <div className={styles.choices}>
          {[
            'Tarik-menarik gravitasi antara matahari dan planet.',
            'Ada "tali" tak terlihat yang mengikat planet ke matahari.',
            'Planet bergerak sendiri tanpa pengaruh matahari.',
            'Angin matahari yang mendorong planet tetap di orbitnya.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi sistem tata surya.</div>}
      </div>
    </div>
  )
}
