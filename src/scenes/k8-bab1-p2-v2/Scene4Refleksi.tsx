import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Dua jenis pencernaan bekerja sama — bukan saling menggantikan.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🦷</span><div><strong>Pencernaan mekanik</strong> (mengunyah, meremas di lambung) memperkecil ukuran makanan tanpa mengubah zatnya.</div></div>
        <div className={local.rPoint}><span>🧪</span><div><strong>Pencernaan kimiawi</strong> (enzim) mengubah molekul besar jadi molekul kecil yang bisa diserap tubuh.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Keduanya saling mendukung</strong> — potongan kecil dari mengunyah membuat enzim bekerja jauh lebih cepat dan efisien.</div></div>
      </div>
    </div>
  )
}
