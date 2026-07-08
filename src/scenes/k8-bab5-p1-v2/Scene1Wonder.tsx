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
          <div className={local.pondViz}>
            <div className={local.rippleRing} />
            <div className={local.rippleRing2} />
            <div className={local.leafIcon}>🍂</div>
          </div>
          <div className={local.pondNote}>Batu dilempar ke kolam — riak menyebar jauh, tapi daun hanya naik-turun di tempat</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Saat batu dilempar ke kolam, riak air menyebar jauh sampai ke tepi kolam.<br /><br />
          Tapi daun kering yang mengapung di permukaan air <strong>hanya naik-turun di tempat</strong> — tidak ikut terbawa menyebar ke tepi.<br /><br />
          Kalau airnya tidak berpindah jauh, apa sebenarnya yang merambat sampai ke tepi kolam?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang sebenarnya merambat dari titik lemparan batu sampai ke tepi kolam?</div>
        <div className={styles.choices}>
          {[
            'Air itu sendiri yang berpindah tempat sampai ke tepi.',
            'Energi yang merambat lewat getaran air, sementara air itu sendiri hanya bergerak naik-turun di tempat.',
            'Hanya suara dari lemparan batu yang merambat, bukan sesuatu di air.',
            'Riak hanya ilusi optik, sebenarnya tidak ada yang merambat.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi parameter dan jenis-jenis gelombang.</div>}
      </div>
    </div>
  )
}
