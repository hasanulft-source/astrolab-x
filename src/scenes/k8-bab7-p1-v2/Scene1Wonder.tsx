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
          <div className={local.soilViz}>🟤</div>
          <div className={local.soilNote}>Segenggam tanah terlihat seperti satu benda padat berwarna cokelat</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Kalau kamu ambil segenggam tanah, ia terlihat seperti <strong>satu bahan tunggal</strong> berwarna cokelat — padat, seragam.<br /><br />
          Tapi para ilmuwan bilang tanah adalah "campuran kompleks", bahkan disebut "hidup" karena mengandung jutaan makhluk mikroskopis.<br /><br />
          Benarkah tanah bukan satu bahan saja?
        </p>
        <div className={styles.predLabel}>Menurutmu, apakah tanah benar-benar hanya satu jenis bahan, atau campuran dari beberapa hal berbeda?</div>
        <div className={styles.choices}>
          {[
            'Tanah adalah satu jenis bahan mineral saja, warnanya yang membuatnya terlihat kompleks.',
            'Tanah adalah campuran dari mineral, bahan organik, air, dan udara — bahkan mengandung makhluk hidup mikroskopis.',
            'Tanah hanya campuran batu-batu kecil yang sudah hancur.',
            'Semua tanah di dunia komposisinya persis sama.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji tanah dengan metode kocok air.</div>}
      </div>
    </div>
  )
}
