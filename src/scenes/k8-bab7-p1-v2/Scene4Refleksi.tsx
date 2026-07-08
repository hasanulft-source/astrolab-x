import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Segenggam tanah menyimpan sistem yang jauh lebih kompleks dari yang terlihat mata.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🧪</span><div><strong>Uji kocok membuktikan</strong> tanah terpisah jadi lapisan berbeda — pasir, debu, liat, bahan organik — masing-masing punya kepadatan berbeda.</div></div>
        <div className={local.rPoint}><span>🪨🍂💧💨</span><div><strong>4 komponen utama tanah</strong> — mineral, bahan organik, air, udara — bekerja sama mendukung kehidupan tumbuhan dan mikroba.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Tanah bukan benda mati</strong> — ia sistem hidup yang kompleks, menopang hampir seluruh kehidupan di darat.</div></div>
      </div>
    </div>
  )
}
