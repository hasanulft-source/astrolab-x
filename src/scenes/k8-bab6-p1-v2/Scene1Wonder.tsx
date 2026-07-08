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
          <div className={local.glassRow}>
            <div className={local.glassClear}><span>💧</span><span>air gula</span></div>
            <div className={local.glassMurky}><span>🏜️</span><span>air pasir</span></div>
          </div>
          <div className={local.glassNote}>Keduanya sama-sama "campuran" — tapi terlihat sangat berbeda</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Segelas air gula terlihat <strong>bening, menyatu sempurna</strong> — tidak ada butiran gula yang terlihat sama sekali.<br /><br />
          Segelas air pasir terlihat <strong>keruh</strong> — pasirnya masih terlihat jelas, mengendap di dasar gelas.<br /><br />
          Keduanya sama-sama campuran dua zat. Kenapa hasilnya bisa sangat berbeda?
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang membedakan air gula dari air pasir, padahal keduanya sama-sama campuran?</div>
        <div className={styles.choices}>
          {[
            'Air gula bukan campuran sungguhan, gula sudah "hilang" jadi zat baru.',
            'Pada air gula, partikel gula tersebar merata hingga tak bisa dibedakan lagi dari air — pada air pasir, partikel pasir tetap terpisah dan terlihat.',
            'Air pasir sebenarnya bukan campuran, hanya kotoran biasa.',
            'Tidak ada perbedaan mendasar, hanya soal warna.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita bandingkan sifat-sifat keduanya.</div>}
      </div>
    </div>
  )
}
