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
          <div className={local.compareViz}>
            <div className={local.cvItem} style={{background:'#dbeafe'}}><span>🫁→❤️</span><span>Darah dari paru-paru</span><span className={local.cvVal}>Kaya oksigen</span></div>
            <div className={local.cvItem} style={{background:'#fecaca'}}><span>❤️→🫁</span><span>Darah ke paru-paru</span><span className={local.cvVal}>Rendah oksigen</span></div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Darah yang keluar dari jantung menuju paru-paru <strong>rendah oksigen</strong>.<br /><br />
          Tapi darah yang keluar dari jantung menuju seluruh tubuh <strong>kaya oksigen</strong>.<br /><br />
          Sama-sama keluar dari jantung yang sama. Kenapa kandungannya bisa sangat berbeda?
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa darah yang keluar dari jantung bisa punya kadar oksigen berbeda tergantung tujuannya?</div>
        <div className={styles.choices}>
          {[
            'Jantung punya dua "tangki" darah yang terpisah sejak awal.',
            'Ada dua jalur peredaran berbeda — satu ke paru-paru untuk ambil oksigen, satu ke tubuh untuk mengantarkannya.',
            'Oksigen dalam darah berubah-ubah secara acak.',
            'Hanya darah yang menuju otak yang kaya oksigen.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita telusuri dua jalur peredaran darah.</div>}
      </div>
    </div>
  )
}
