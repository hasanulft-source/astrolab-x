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
          <div className={local.moonRow}>
            <span>🌑</span><span>🌒</span><span>🌓</span><span>🌔</span><span>🌕</span><span>🌖</span><span>🌗</span><span>🌘</span>
          </div>
          <div className={local.moonNote}>Bulan berubah bentuk setiap malam dalam siklus 29,5 hari</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Setiap malam, bentuk bulan yang kita lihat berubah — dari sabit tipis, membesar jadi purnama, lalu mengecil lagi.<br /><br />
          Bulan sendiri sebenarnya <strong>tidak pernah berubah bentuk</strong> — ia selalu berbentuk bola yang sama.<br /><br />
          Lalu, kenapa kita melihatnya berubah bentuk?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa bentuk bulan yang kita lihat berubah setiap malam?</div>
        <div className={styles.choices}>
          {[
            'Bulan benar-benar berubah bentuk fisiknya.',
            'Posisi bulan, bumi, dan matahari berubah — bagian bulan yang disinari matahari yang terlihat dari bumi berubah.',
            'Awan menutupi sebagian bulan setiap malam.',
            'Bulan berputar sehingga kita melihat sisi yang berbeda.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita simulasikan posisi bulan-bumi-matahari.</div>}
      </div>
    </div>
  )
}
