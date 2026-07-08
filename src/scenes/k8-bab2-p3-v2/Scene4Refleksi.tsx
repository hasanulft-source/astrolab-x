import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Ekskresi terjadi lebih sering dari yang kamu sadari — bahkan setiap kali kamu bernapas.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🫘</span><div><strong>4 organ ekskresi</strong> — ginjal, kulit, paru-paru, hati — masing-masing membuang zat sisa yang berbeda dari tubuh.</div></div>
        <div className={local.rPoint}><span>😮‍💨</span><div><strong>Paru-paru adalah organ ekskresi juga</strong> — membuang CO₂ hasil respirasi sel, bukan cuma "sekadar bernapas".</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Ekskresi bukan cuma buang air</strong> — ia mencakup semua cara tubuh mengeluarkan zat sisa metabolisme, lewat organ apa pun yang terlibat.</div></div>
      </div>
    </div>
  )
}
