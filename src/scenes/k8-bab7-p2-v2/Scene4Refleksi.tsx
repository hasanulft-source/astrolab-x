import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Setiap lapisan tanah adalah catatan waktu — hasil proses ratusan tahun yang berlangsung tanpa henti.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📚</span><div><strong>5 horizon tanah</strong> — O, A, B, C, R — tersusun dari bahan organik segar di atas hingga batuan induk keras di bawah.</div></div>
        <div className={local.rPoint}><span>🌱</span><div><strong>Horizon A adalah yang paling subur</strong> — kaya humus dan tempat sebagian besar akar tanaman tumbuh.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Profil tanah terbentuk secara bertahap</strong> selama waktu yang sangat lama — inilah mengapa warnanya berubah konsisten dari atas ke bawah.</div></div>
      </div>
    </div>
  )
}
