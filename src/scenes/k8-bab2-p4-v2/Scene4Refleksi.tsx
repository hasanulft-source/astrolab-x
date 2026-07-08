import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Urine yang keluar adalah hasil akhir dari proses saring-ambil kembali-tambah yang sangat teliti.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🧪</span><div><strong>3 tahap pembentukan urine</strong> — filtrasi (saring semua), reabsorpsi (ambil kembali yang berguna), augmentasi (tambah sisa lain).</div></div>
        <div className={local.rPoint}><span>♻️</span><div><strong>Reabsorpsi adalah kunci efisiensi</strong> — tanpa tahap ini, tubuh akan kehilangan air dan nutrisi penting dalam jumlah besar setiap hari.</div></div>
        <div className={local.rPoint}><span>⚠️</span><div><strong>Gangguan ginjal sering terjadi</strong> saat salah satu dari 3 tahap ini tidak berjalan normal — memahami tahapnya membantu memahami penyakitnya.</div></div>
      </div>
    </div>
  )
}
