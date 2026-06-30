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
          <div className={local.iceTrack}>
            <div className={local.iceStage}><span>🧊</span><span>Es batu di gelas</span></div>
            <div className={local.iceArrow}>→</div>
            <div className={local.iceStage}><span>💧</span><span>Mencair perlahan</span></div>
            <div className={local.iceArrow}>→</div>
            <div className={local.iceStage}><span>🌫️</span><span>Embun di luar gelas</span></div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Kamu menaruh es batu di gelas. Beberapa menit kemudian, es mencair menjadi air.<br /><br />
          Tapi ada hal lain yang terjadi — bagian <strong>luar gelas</strong> juga berembun, padahal kamu tidak menyentuhnya.<br /><br />
          Dua perubahan terjadi sekaligus. Apa hubungannya?
        </p>
        <div className={styles.predLabel}>Menurutmu, kenapa bagian luar gelas yang dingin malah jadi berembun (basah)?</div>
        <div className={styles.choices}>
          {[
            'Gelasnya bocor sedikit, air merembes keluar.',
            'Uap air di udara mengembun saat menyentuh permukaan gelas yang dingin.',
            'Es batu di dalam menembus dinding gelas.',
            'Itu air dari tangan kita yang menempel di gelas.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita petakan semua perubahan wujud yang mungkin.</div>}
      </div>
    </div>
  )
}
