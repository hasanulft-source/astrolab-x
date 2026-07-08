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
          <div className={local.inkViz}>
            <div className={local.inkDot}>⚫ tinta hitam</div>
            <div className={local.inkArrow}>dirambatkan pada kertas →</div>
            <div className={local.inkBands}>
              <span style={{background:'#3b82f6'}}/>
              <span style={{background:'#f59e0b'}}/>
              <span style={{background:'#dc2626'}}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Setetes tinta hitam dari spidol diteteskan di kertas, lalu direndam sedikit di pelarut (air atau alkohol).<br /><br />
          Ternyata tinta itu <strong>bukan hitam murni</strong> — muncul pita-pita warna biru, kuning, merah yang tersembunyi di dalamnya.<br /><br />
          Kenapa warna-warna tersembunyi itu bisa terpisah dan terlihat, padahal awalnya terlihat hitam pekat?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa tinta hitam bisa terpisah jadi beberapa warna berbeda saat dirambatkan pada kertas?</div>
        <div className={styles.choices}>
          {[
            'Air/pelarut bereaksi kimia dengan tinta dan menciptakan warna baru.',
            'Tinta hitam sebenarnya campuran beberapa pigmen warna — tiap pigmen merambat dengan kecepatan berbeda di kertas, sehingga terpisah.',
            'Kertas menyerap sebagian warna dan menyisakan warna lain secara acak.',
            'Ini hanya efek cahaya yang membuat mata melihat warna berbeda.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi kromatografi dan sentrifugasi.</div>}
      </div>
    </div>
  )
}
