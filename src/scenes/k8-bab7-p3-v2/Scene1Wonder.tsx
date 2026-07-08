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
            <div className={local.compareCard}><span>🧱</span><span>tanah liat</span><span className={local.note}>lengket saat basah</span></div>
            <div className={local.compareCard}><span>🏖️</span><span>pasir</span><span className={local.note}>tetap gembur</span></div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Tanah liat yang dibasahi terasa <strong>lengket</strong>, menggumpal di tangan, sulit dilepas.<br /><br />
          Pasir yang dibasahi tetap <strong>gembur</strong>, mudah terurai kembali, tidak menggumpal seperti tanah liat.<br /><br />
          Keduanya sama-sama "tanah" dan sama-sama basah. Apa yang membuatnya berperilaku sangat berbeda?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang membuat tanah liat lengket sedangkan pasir tetap gembur saat sama-sama basah?</div>
        <div className={styles.choices}>
          {[
            'Tanah liat mengandung lebih banyak air daripada pasir.',
            'Ukuran butir tanah liat jauh lebih kecil dari pasir, sehingga partikelnya bisa saling merapat dan menahan air di antaranya.',
            'Tanah liat dan pasir sebenarnya zat kimia yang berbeda sepenuhnya.',
            'Warna tanah yang menentukan seberapa lengket teksturnya.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi tekstur dan pH tanah.</div>}
      </div>
    </div>
  )
}
