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
          <div className={local.filterViz}>
            <div className={local.fLarge}>Darah disaring</div>
            <div className={local.fArrow}>↓</div>
            <div className={local.fSmall}>Sedikit jadi urine</div>
          </div>
          <div className={local.fNote}>Sebagian besar cairan yang disaring justru diserap kembali ke darah</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Ginjal menyaring darah berulang kali setiap hari, dalam jumlah yang jauh lebih banyak dari volume urine yang akhirnya keluar.<br /><br />
          Kalau begitu, <strong>ke mana perginya sisa cairan yang disaring tapi tidak jadi urine?</strong><br /><br />
          Apakah ginjal "membuang" lalu "mengambil kembali" sebagian hasil saringannya?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa hanya sebagian kecil dari cairan yang disaring ginjal yang akhirnya jadi urine?</div>
        <div className={styles.choices}>
          {[
            'Ginjal salah dalam menyaring sehingga banyak cairan yang harus dibuang berulang.',
            'Setelah disaring, sebagian besar air dan zat berguna diserap kembali ke darah — hanya sisa yang benar-benar tidak dibutuhkan yang jadi urine.',
            'Cairan yang disaring menguap sebelum jadi urine.',
            'Ginjal hanya menyaring sedikit darah setiap harinya.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita telusuri 3 tahap pembentukan urine.</div>}
      </div>
    </div>
  )
}
