import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Energi tidak pernah diciptakan atau dimusnahkan — hanya berpindah bentuk.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>⛰️</span><div><strong>Energi potensial (Ep)</strong> — energi yang tersimpan karena posisi/ketinggian suatu benda.</div></div>
        <div className={local.rPoint}><span>⚡</span><div><strong>Energi kinetik (Ek)</strong> — energi yang dimiliki benda karena geraknya.</div></div>
        <div className={local.rPoint}><span>♻️</span><div><strong>Hukum kekekalan energi</strong> — total Ep+Ek tetap konstan; saat satu berkurang, yang lain bertambah dalam jumlah yang sama.</div></div>
      </div>
    </div>
  )
}
