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
          <div className={local.iodineViz}>
            <div className={local.riceBowl}>🍚</div>
            <div className={local.dropArrow}>+ tetes iodin ↓</div>
            <div className={local.riceBowlDark}>🍚</div>
          </div>
          <div className={local.colorNote}>Putih bersih → biru kehitaman pekat, dalam hitungan detik</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Setetes cairan cokelat (iodin) diteteskan ke nasi putih.<br /><br />
          Dalam hitungan detik, warnanya berubah drastis jadi <strong>biru kehitaman pekat</strong> — bukan sekadar bercampur warna, tapi reaksi yang jelas dan konsisten setiap kali diulang.<br /><br />
          Apa yang sebenarnya terjadi di level zat?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa iodin bisa mengubah warna nasi sedrastis itu?</div>
        <div className={styles.choices}>
          {[
            'Iodin memang berwarna gelap, jadi warnanya menutupi nasi.',
            'Iodin bereaksi khusus dengan salah satu zat nutrisi dalam nasi, membentuk warna baru.',
            'Nasi yang sudah basi bereaksi dengan zat kimia apa pun.',
            'Ini hanya ilusi optik dari pencampuran warna.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita uji reaksi ini pada berbagai makanan.</div>}
      </div>
    </div>
  )
}
