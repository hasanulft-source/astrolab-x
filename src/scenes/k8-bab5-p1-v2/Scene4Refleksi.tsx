import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Gelombang adalah pembawa energi — bukan pembawa materi.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🌊</span><div><strong>Gelombang memindahkan energi</strong>, bukan medium itu sendiri — daun hanya naik-turun di tempat saat riak menyebar.</div></div>
        <div className={local.rPoint}><span>📐</span><div><strong>T = 1/f</strong> — periode dan frekuensi berbanding terbalik, keduanya parameter dasar gelombang.</div></div>
        <div className={local.rPoint}><span>🔀</span><div><strong>Dua cara klasifikasi</strong> — berdasar kebutuhan medium (mekanik/elektromagnetik) dan arah getar (transversal/longitudinal).</div></div>
      </div>
    </div>
  )
}
