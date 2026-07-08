import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Kadang yang perlu diubah bukan bendanya — tapi cairan di sekitarnya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🥚</span><div><strong>Telur yang sama bisa tenggelam atau terapung</strong> — tergantung massa jenis cairan di sekitarnya, bukan bendanya yang berubah.</div></div>
        <div className={local.rPoint}><span>⚖️</span><div><strong>Hukum Archimedes</strong> — benda terapung jika massa jenisnya lebih kecil dari massa jenis fluida tempat ia berada.</div></div>
        <div className={local.rPoint}><span>🚢</span><div><strong>Kapal selam menerapkan prinsip serupa</strong> — mengatur massa air dalam tangki untuk mengubah massa jenis rata-ratanya, sehingga bisa naik-turun sesuka hati.</div></div>
      </div>
    </div>
  )
}
