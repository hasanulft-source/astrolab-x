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
          <div className={local.nailViz}>
            <div className={local.nailSharp}>📌 runcing</div>
            <div className={local.nailBlunt}>🔨 tumpul</div>
          </div>
          <div className={local.nailNote}>Pukulan sama kuatnya — paku runcing menancap mudah, paku tumpul nyaris tidak masuk</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Dua paku dipukul dengan <strong>gaya yang sama persis</strong> — satu ujungnya runcing, satu tumpul.<br /><br />
          Paku runcing menancap dalam ke kayu. Paku tumpul nyaris tidak masuk sama sekali.<br /><br />
          Gayanya sama. Kenapa hasilnya bisa jauh berbeda?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang membuat paku runcing lebih mudah menancap dibanding paku tumpul, padahal gayanya sama?</div>
        <div className={styles.choices}>
          {[
            'Paku runcing selalu terbuat dari bahan yang lebih keras.',
            'Paku runcing memusatkan gaya pada luas permukaan yang jauh lebih kecil, sehingga tekanannya jauh lebih besar.',
            'Paku tumpul lebih berat sehingga sulit menancap.',
            'Tidak ada hubungannya dengan bentuk ujung, hanya soal kekuatan pukulan.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji dengan rumus tekanan.</div>}
      </div>
    </div>
  )
}
