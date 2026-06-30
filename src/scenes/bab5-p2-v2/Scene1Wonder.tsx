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
          <div className={local.addressBox}>
            <div className={local.addrLine}>🇮🇩 Indonesia</div>
            <div className={local.addrLine}>→ Aceh</div>
            <div className={local.addrLine}>→ Banda Aceh</div>
            <div className={local.addrLine}>→ Jl. Tgk. Imum Lueng Bata</div>
            <div className={local.addrLine}>→ Rumah No. 15</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Bayangkan ada 8,7 juta spesies makhluk hidup di Bumi.<br /><br />
          Bagaimana ilmuwan bisa mengidentifikasi satu spesies tertentu di antara jutaan lainnya — secepat kamu menemukan alamat rumah di seluruh dunia?
        </p>
        <div className={styles.predLabel}>Menurutmu, sistem apa yang dipakai ilmuwan untuk mengelompokkan jutaan makhluk hidup?</div>
        <div className={styles.choices}>
          {[
            'Berdasarkan ukuran tubuh — dari yang terkecil ke terbesar.',
            'Sistem bertingkat dari kelompok umum ke kelompok spesifik, seperti alamat.',
            'Berdasarkan urutan ditemukannya spesies tersebut.',
            'Berdasarkan warna dan bentuk yang terlihat mata.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi tangga taksonomi.</div>}
      </div>
    </div>
  )
}
