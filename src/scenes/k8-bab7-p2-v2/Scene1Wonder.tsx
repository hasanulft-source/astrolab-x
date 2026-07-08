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
          <div className={local.wellViz}>
            <div className={local.layerStrip} style={{background:'#4a3a22'}}>gelap</div>
            <div className={local.layerStrip} style={{background:'#6b4f30'}}></div>
            <div className={local.layerStrip} style={{background:'#9c7b52'}}></div>
            <div className={local.layerStrip} style={{background:'#b09878'}}>terang, berbatu</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Saat menggali sumur cukup dalam, warna tanah berubah lapis demi lapis — <strong>gelap di dekat permukaan</strong>, makin ke bawah makin <strong>terang dan berbatu</strong>.<br /><br />
          Ini bukan kebetulan acak — pola ini muncul hampir di mana saja tanah digali cukup dalam.<br /><br />
          Kenapa tanah bisa tersusun berlapis dengan pola yang konsisten seperti ini?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa tanah tersusun berlapis dengan warna dan tekstur berbeda di tiap kedalaman?</div>
        <div className={styles.choices}>
          {[
            'Lapisan-lapisan itu terbentuk secara acak, tidak ada pola yang jelas.',
            'Tanah terbentuk secara bertahap dari atas ke bawah selama waktu yang sangat lama, menciptakan lapisan (horizon) dengan sifat berbeda.',
            'Manusia yang menciptakan lapisan-lapisan itu saat bertani.',
            'Warna tanah hanya dipengaruhi oleh kelembapan sesaat, bukan struktur sesungguhnya.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita jelajahi profil tanah lengkap.</div>}
      </div>
    </div>
  )
}
