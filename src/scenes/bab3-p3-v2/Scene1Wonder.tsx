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
          <div className={local.sunDay}>
            <div className={local.sunEmoji}>☀️</div>
            <div className={local.sunArrow}>↓</div>
            <div className={local.faceFeel}>😓 Wajahmu terasa panas</div>
          </div>
          <div className={local.spaceNote}>Tidak ada udara di antara matahari dan bumi — hanya ruang kosong (vakum)</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Matahari berjarak 150 juta km dari bumi. Di antara keduanya hampir seluruhnya <strong>ruang kosong</strong> (vakum).<br /><br />
          Tidak ada udara untuk "menghantarkan" panas seperti biasanya. Tapi wajahmu tetap terasa hangat di siang hari.<br /><br />
          Bagaimana panas bisa sampai tanpa medium apapun?
        </p>
        <div className={styles.predLabel}>Menurutmu, bagaimana panas matahari bisa sampai ke bumi melewati ruang kosong?</div>
        <div className={styles.choices}>
          {[
            'Panas merambat lewat partikel debu yang ada di angkasa.',
            'Panas berpindah dalam bentuk gelombang elektromagnetik (radiasi), tanpa perlu medium.',
            'Sebenarnya ada sedikit udara di angkasa yang menghantarkan panas.',
            'Panas tidak benar-benar berpindah — itu hanya cahaya yang membuat kita merasa hangat.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi tiga cara kalor berpindah.</div>}
      </div>
    </div>
  )
}
