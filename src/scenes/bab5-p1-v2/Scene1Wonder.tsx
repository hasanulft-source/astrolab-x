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
          <div className={local.compareRow}>
            <div className={local.ccCard}><span className={local.ccIcon}>🪨</span><span>Batu</span><span className={local.ccNote}>tidak bergerak sendiri</span></div>
            <div className={local.ccCard}><span className={local.ccIcon}>🦠</span><span>Virus</span><span className={local.ccNote}>"hidup" hanya di dalam sel inang</span></div>
            <div className={local.ccCard}><span className={local.ccIcon}>🌱</span><span>Tanaman</span><span className={local.ccNote}>tumbuh, bergerak ke cahaya</span></div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Batu jelas benda mati. Tanaman jelas hidup. Tapi virus — ia bisa "berkembang biak", tapi hanya jika masuk ke sel makhluk lain. Di luar sel, ia diam seperti benda mati.<br /><br />
          <strong>Apakah virus termasuk makhluk hidup?</strong>
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang menentukan sesuatu disebut "hidup" atau tidak?</div>
        <div className={styles.choices}>
          {[
            'Bisa bergerak dari satu tempat ke tempat lain.',
            'Memenuhi serangkaian ciri tertentu — bukan satu ciri saja.',
            'Bisa dilihat dengan mata telanjang.',
            'Memiliki bentuk yang kompleks.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji 7 ciri makhluk hidup pada kasus nyata.</div>}
      </div>
    </div>
  )
}
