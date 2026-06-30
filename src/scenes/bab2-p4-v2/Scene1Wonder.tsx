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
          <svg viewBox="0 0 240 140" className={local.previewChart}>
            <polyline points="10,120 60,40 140,40 190,5" fill="none" stroke="#0d6b7a" strokeWidth="3" />
            <text x="100" y="32" fontSize="10" fill="#6b7280" textAnchor="middle">suhu tidak naik di sini?</text>
            <line x1="60" y1="40" x2="140" y2="40" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
          </svg>
          <div className={local.previewCaption}>Air dipanaskan terus-menerus dengan api yang konstan</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Kamu memanaskan air di kompor dengan api yang sama, terus-menerus, tanpa berhenti.<br /><br />
          Suhunya naik... naik... lalu tiba-tiba <strong>berhenti naik</strong> selama beberapa saat — padahal api masih menyala dan kamu masih memberikan panas.<br /><br />
          Ke mana energinya pergi?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa suhu air berhenti naik padahal masih dipanaskan?</div>
        <div className={styles.choices}>
          {[
            'Air sudah mencapai suhu maksimalnya dan tidak bisa lebih panas lagi.',
            'Energi dipakai untuk mengubah wujud air, bukan menaikkan suhunya.',
            'Kompornya kehabisan gas sesaat.',
            'Itu hanya kesalahan pengukuran termometer.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita panaskan sendiri dan amati grafiknya.</div>}
      </div>
    </div>
  )
}
