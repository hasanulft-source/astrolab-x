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
          <div className={local.marsCard}>
            <div className={local.marsYear}>1999</div>
            <div className={local.marsTitle}>Mars Climate Orbiter</div>
            <div className={local.marsLoss}>Hilang seharga $327 juta</div>
            <div className={local.marsCause}>
              Satu tim pakai satuan <strong>metrik</strong>, satu tim pakai <strong>imperial</strong>. Tidak ada yang sadar.
            </div>
          </div>
          <div className={local.measureComp}>
            <div className={local.mCard}><span className={local.mVal}>12,2 cm</span><span className={local.mWho}>Kelompok A</span></div>
            <div className={local.mVs}>≠</div>
            <div className={local.mCard}><span className={local.mVal}>12,46 cm</span><span className={local.mWho}>Kelompok B</span></div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Satu kesalahan satuan menghancurkan misi senilai ratusan juta dolar.<br /><br />
          Di bawahnya: dua kelompok mengukur <strong>benda yang sama</strong> — hasilnya berbeda.<br /><br />
          Bukan karena bendanya berubah.
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa hasil pengukuran dua kelompok bisa berbeda untuk benda yang sama?</div>
        <div className={styles.choices}>
          {[
            'Salah satu kelompok tidak jujur dalam mencatat.',
            'Alat ukurnya berbeda atau cara membaca skalanya berbeda.',
            'Benda yang diukur bergerak sehingga ukurannya berubah.',
            'Pengukuran memang tidak pernah bisa akurat.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Kita akan selidiki apa yang sebenarnya terjadi.</div>}
      </div>
    </div>
  )
}
