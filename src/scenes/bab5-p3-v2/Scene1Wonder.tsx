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
          <div className={local.threeViz}>
            <div className={local.tCard}><span>🍄</span><span>Jamur</span></div>
            <div className={local.tCard}><span>🌿</span><span>Tanaman</span></div>
            <div className={local.tCard}><span>🦁</span><span>Hewan</span></div>
          </div>
          <div className={local.qNote}>Ketiganya terlihat sangat berbeda — tapi jamur lebih mirip hewan secara biologis daripada tanaman</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Banyak orang menganggap jamur termasuk tumbuhan. Tapi secara biologis, jamur tidak punya klorofil dan <strong>tidak bisa berfotosintesis</strong> seperti tanaman.<br /><br />
          Jamur justru lebih mirip hewan dalam cara mendapatkan makanan — keduanya heterotrof.<br /><br />
          Lalu, kenapa jamur dikelompokkan terpisah dari hewan dan tumbuhan?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa jamur tidak dimasukkan ke kelompok hewan atau tumbuhan?</div>
        <div className={styles.choices}>
          {[
            'Karena bentuknya tidak mirip keduanya.',
            'Karena struktur sel dan cara reproduksinya unik, berbeda dari hewan dan tumbuhan.',
            'Karena jamur ditemukan lebih belakangan oleh ilmuwan.',
            'Karena jamur bisa tumbuh di tempat gelap.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi 5 kingdom kehidupan.</div>}
      </div>
    </div>
  )
}
