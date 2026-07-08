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
          <div className={local.spaceViz}>
            <div className={local.explosionIcon}>💥</div>
            <div className={local.muteIcon}>🔇</div>
          </div>
          <div className={local.spaceNote}>Film: ledakan luar angkasa menggelegar. Faktanya: senyap total.</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Di film-film luar angkasa, ledakan pesawat terdengar sangat menggelegar dengan efek suara dramatis.<br /><br />
          Tapi kenyataannya, jika ledakan itu benar-benar terjadi di ruang hampa antariksa, ia akan <strong>senyap total</strong> — tidak ada suara sama sekali.<br /><br />
          Kenapa ledakan sedahsyat itu bisa sama sekali tidak terdengar?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa ledakan di luar angkasa tidak menghasilkan suara sama sekali?</div>
        <div className={styles.choices}>
          {[
            'Suaranya terlalu jauh sehingga tidak terdengar, tapi sebenarnya ada.',
            'Bunyi butuh medium (zat) untuk merambat — di ruang hampa tidak ada partikel yang bisa bergetar.',
            'Telinga manusia tidak bisa mendengar suara di luar angkasa karena tekanan berbeda.',
            'Ledakan di luar angkasa memang tidak menghasilkan getaran sama sekali.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi sifat-sifat bunyi.</div>}
      </div>
    </div>
  )
}
