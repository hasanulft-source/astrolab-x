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
          <div className={local.hillViz}>
            <div className={local.hillSlope}>
              <span className={local.ballTop}>⚫</span>
            </div>
          </div>
          <div className={local.hillNote}>Bola dilepas diam di puncak — makin turun, makin cepat lajunya</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Sebuah bola dilepaskan dari puncak bukit dalam keadaan <strong>diam</strong> (kecepatan nol).<br /><br />
          Tapi begitu turun, kecepatannya terus bertambah — semakin ke bawah, semakin cepat.<br /><br />
          Dari mana datangnya energi gerak itu, kalau bola tadinya diam sama sekali?
        </p>
        <div className={styles.predLabel}>Menurutmu, dari mana energi gerak bola berasal padahal awalnya diam?</div>
        <div className={styles.choices}>
          {[
            'Gravitasi bumi menciptakan energi baru saat bola bergerak turun.',
            'Energi ketinggian (potensial) bola berubah bentuk menjadi energi gerak (kinetik) — bukan energi baru, hanya berubah bentuk.',
            'Bola menyerap energi dari udara di sekitarnya.',
            'Kecepatan bertambah karena permukaan bukit yang licin, tidak ada hubungannya dengan energi.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita amati perubahan energi bola secara langsung.</div>}
      </div>
    </div>
  )
}
