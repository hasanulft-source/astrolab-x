import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Satu sistem peredaran, dua jalur dengan tujuan berbeda, bekerja tanpa henti.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🫁</span><div><strong>Peredaran kecil (pulmonal)</strong> — jantung ke paru-paru dan kembali, tujuannya mengambil oksigen baru & membuang CO₂.</div></div>
        <div className={local.rPoint}><span>🫀</span><div><strong>Peredaran besar (sistemik)</strong> — jantung ke seluruh tubuh dan kembali, tujuannya mengantarkan oksigen ke setiap sel.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Kadar oksigen darah berubah tergantung posisinya</strong> dalam siklus — bukan karena jenis darahnya berbeda sejak awal.</div></div>
      </div>
    </div>
  )
}
