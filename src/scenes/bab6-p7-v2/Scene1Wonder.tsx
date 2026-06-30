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
          <div className={local.wolfStory}>
            <div className={local.wsStep}>🐺 Serigala dimusnahkan dari Yellowstone (1926)</div>
            <div className={local.wsArrow}>↓</div>
            <div className={local.wsStep}>🦌 Populasi rusa meledak tak terkendali</div>
            <div className={local.wsArrow}>↓</div>
            <div className={local.wsStep}>🌳 Vegetasi muda habis dimakan rusa</div>
            <div className={local.wsArrow}>↓</div>
            <div className={local.wsStep}>🏞️ Sungai berubah arah — erosi parah</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Tahun 1926, manusia memusnahkan SEMUA serigala dari Taman Nasional Yellowstone karena dianggap berbahaya.<br /><br />
          70 tahun kemudian, ilmuwan terkejut — bukan hanya rusa yang berubah, tapi <strong>bentuk sungai pun ikut berubah</strong>.<br /><br />
          Bagaimana hilangnya satu predator bisa sampai mengubah aliran sungai?
        </p>
        <div className={styles.predLabel}>Menurutmu, bagaimana hilangnya serigala bisa berdampak hingga ke sungai?</div>
        <div className={styles.choices}>
          {[
            'Itu hanya kebetulan, tidak ada hubungan sebab-akibat.',
            'Efek berantai — satu perubahan kecil memicu serangkaian perubahan besar lainnya.',
            'Serigala secara langsung mengubah aliran air sungai.',
            'Perubahan iklim yang menyebabkan keduanya terjadi bersamaan.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita simulasikan cascade effect-nya.</div>}
      </div>
    </div>
  )
}
