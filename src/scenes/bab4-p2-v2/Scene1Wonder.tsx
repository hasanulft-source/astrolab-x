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
          <div className={local.carRow}>
            <div className={local.carCard}><span>🚗</span><span>Mobil A</span><span className={local.carNote}>kecepatan tetap, grafik garis lurus naik</span></div>
            <div className={local.carCard}><span>🚙</span><span>Mobil B</span><span className={local.carNote}>kecepatan bertambah, grafik melengkung naik</span></div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Dua mobil di tol — mobil A berjalan dengan kecepatan tetap, mobil B perlahan menambah kecepatannya.<br /><br />
          Kalau kita gambarkan <strong>posisi terhadap waktu</strong> (grafik s-t) keduanya, grafiknya akan terlihat sangat berbeda.<br /><br />
          Bagaimana grafik bisa "menceritakan" gerakan tanpa kita melihat videonya?
        </p>
        <div className={styles.predLabel}>Menurutmu, seperti apa bentuk grafik s-t untuk mobil yang kecepatannya tetap?</div>
        <div className={styles.choices}>
          {[
            'Garis lurus — karena jarak bertambah dengan jumlah yang sama setiap detik.',
            'Garis melengkung naik — kecepatan tetap berarti grafiknya melengkung.',
            'Garis horizontal datar — karena kecepatannya tidak berubah.',
            'Garis menurun — karena waktu terus berjalan.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita bangun grafiknya sendiri.</div>}
      </div>
    </div>
  )
}
