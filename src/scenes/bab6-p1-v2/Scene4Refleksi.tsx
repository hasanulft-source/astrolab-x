import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Setiap ekosistem, sekecil apapun, adalah jaringan ketergantungan yang rumit.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🐟</span><div><strong>Komponen biotik</strong> — semua makhluk hidup dalam ekosistem, dari mikroba hingga predator puncak.</div></div>
        <div className={local.rPoint}><span>💧</span><div><strong>Komponen abiotik</strong> — faktor tak hidup seperti air, cahaya, suhu, dan tanah yang memengaruhi siapa yang bisa hidup di sana.</div></div>
        <div className={local.rPoint}><span>🔄</span><div><strong>Keduanya saling bergantung</strong> — bukan dua hal terpisah, tapi satu sistem yang terus berinteraksi.</div></div>
      </div>
    </div>
  )
}
