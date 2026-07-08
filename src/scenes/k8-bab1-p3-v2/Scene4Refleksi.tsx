import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Darah yang tampak seragam sebenarnya campuran kompleks dengan pembagian tugas yang jelas.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🩸</span><div><strong>Darah adalah campuran</strong> — plasma cair (55%) dan tiga jenis sel dengan kepadatan berbeda, itulah mengapa sentrifugasi bisa memisahkannya.</div></div>
        <div className={local.rPoint}><span>❤️</span><div><strong>Jantung punya 4 ruang</strong> — dua serambi menerima darah, dua bilik memompanya keluar. Bilik kiri paling tebal karena memompa ke seluruh tubuh.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Sains sering membutuhkan alat</strong> (sentrifugal) untuk melihat apa yang tidak terlihat mata telanjang.</div></div>
      </div>
    </div>
  )
}
