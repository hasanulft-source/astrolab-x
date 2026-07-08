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
          <div className={local.spoonViz}>
            <div className={local.spoonSide}>
              <span className={local.spoonIcon}>🥄</span>
              <span className={local.spoonLabel}>sisi cekung → terbalik</span>
            </div>
            <div className={local.spoonSide}>
              <span className={local.spoonIconFlip}>🥄</span>
              <span className={local.spoonLabel}>sisi cembung → tegak, kecil</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Coba lihat wajahmu di sendok. Di sisi <strong>cekung</strong> (bagian dalam), wajahmu terlihat <strong>terbalik</strong>.<br /><br />
          Di sisi <strong>cembung</strong> (bagian luar), wajahmu terlihat <strong>tegak tapi kecil</strong>.<br /><br />
          Satu sendok, satu wajah — kok bisa menghasilkan dua bayangan yang sangat berbeda?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa sisi cekung dan cembung sendok menghasilkan bayangan yang berbeda?</div>
        <div className={styles.choices}>
          {[
            'Sendoknya terbuat dari dua jenis logam berbeda di tiap sisi.',
            'Bentuk permukaan (cekung/cembung) menentukan bagaimana cahaya dipantulkan, sehingga sifat bayangannya berbeda.',
            'Ini hanya ilusi optik yang tidak ada hubungannya dengan bentuk sendok.',
            'Wajah manusia memang terlihat berbeda dari sudut manapun.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi jenis cermin dan lensa.</div>}
      </div>
    </div>
  )
}
