import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Dalam fisika, "usaha" punya definisi lebih ketat dari sekadar "capek".</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📐</span><div><strong>W = F × s</strong> — usaha hanya terjadi jika ada perpindahan (s). Tanpa perpindahan, usaha selalu nol berapa pun besar gayanya.</div></div>
        <div className={local.rPoint}><span>➕➖</span><div><strong>Usaha bisa positif, negatif, atau nol</strong> — tergantung arah gaya relatif terhadap arah perpindahan.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Mendorong tembok yang diam = usaha nol</strong> — meski melelahkan, secara fisika tidak ada "kerja" yang dilakukan pada tembok.</div></div>
      </div>
    </div>
  )
}
