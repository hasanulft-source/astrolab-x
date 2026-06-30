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
            <div className={local.compareCard}>
              <span className={local.ccIcon}>🧊</span>
              <span className={local.ccTitle}>Es mencair jadi air</span>
              <span className={local.ccNote}>Bisa dibekukan lagi jadi es</span>
            </div>
            <div className={local.compareCard}>
              <span className={local.ccIcon}>🔥</span>
              <span className={local.ccTitle}>Kayu terbakar jadi abu</span>
              <span className={local.ccNote}>Tidak bisa dikembalikan jadi kayu</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Dua perubahan terjadi di sekitar kita setiap hari. Es mencair, kayu terbakar.<br /><br />
          Keduanya sama-sama "berubah" — tapi satu bisa <strong>dikembalikan</strong>, satu <strong>tidak bisa</strong>.<br /><br />
          Apa yang membedakan keduanya secara mendasar?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa perbedaan utama antara kedua jenis perubahan ini?</div>
        <div className={styles.choices}>
          {[
            'Yang satu lebih cepat terjadi dari yang lain.',
            'Pembakaran menghasilkan zat baru, pelelehan tidak mengubah jenis zatnya.',
            'Pembakaran melibatkan api, pelelehan tidak.',
            'Tidak ada perbedaan mendasar — keduanya hanya perubahan biasa.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji dengan 4 tanda perubahan kimia.</div>}
      </div>
    </div>
  )
}
