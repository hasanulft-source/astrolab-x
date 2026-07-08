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
          <div className={local.tubeViz}>
            <div className={local.tubeWhole}>🩸<span>Darah segar</span></div>
            <div className={local.tubeArrow}>disentrifugasi →</div>
            <div className={local.tubeLayered}>
              <div className={local.layerPlasma}>Plasma (kuning bening)</div>
              <div className={local.layerBuffy}>Sel darah putih</div>
              <div className={local.layerRed}>Sel darah merah</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Darah yang baru diambil terlihat <strong>merah cair seragam</strong> — satu warna, satu tekstur.<br /><br />
          Tapi kalau darah itu diputar cepat dalam sentrifugal (seperti mesin cuci mini), ia <strong>terpisah jadi lapisan-lapisan berbeda warna</strong>.<br /><br />
          Bagaimana bisa cairan yang terlihat seragam ternyata tidak seragam sama sekali?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa darah bisa terpisah jadi beberapa lapisan saat diputar cepat?</div>
        <div className={styles.choices}>
          {[
            'Darah sebenarnya beberapa cairan berbeda yang dicampur sesaat sebelum diambil.',
            'Darah adalah campuran plasma cair dan sel-sel darah yang punya kepadatan berbeda.',
            'Proses sentrifugasi mengubah darah menjadi zat baru.',
            'Ini hanya efek visual dari kecepatan putaran, bukan pemisahan sungguhan.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita bongkar komponen darah satu per satu.</div>}
      </div>
    </div>
  )
}
