import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Ikan badut dan anemon mengajarkan kita tentang kerja sama dalam alam.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🤝</span><div><strong>Mutualisme</strong> — keduanya untung, kerja sama yang saling menguntungkan dalam jangka panjang.</div></div>
        <div className={local.rPoint}><span>🐦</span><div><strong>Komensalisme</strong> — satu untung, satu tidak terpengaruh — netral bukan berarti dirugikan.</div></div>
        <div className={local.rPoint}><span>🦟</span><div><strong>Parasitisme</strong> — satu untung, satu rugi — hubungan yang "menguras" salah satu pihak.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Ikan badut & anemon adalah mutualisme klasik</strong> — bukti bahwa di alam, kerja sama bisa menjadi strategi bertahan hidup terbaik.</div></div>
      </div>
    </div>
  )
}
