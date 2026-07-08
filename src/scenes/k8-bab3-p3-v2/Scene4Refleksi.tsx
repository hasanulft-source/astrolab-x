import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Pesawat sederhana tidak mengurangi usaha total — ia mengubah cara gaya bekerja.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>⚖️</span><div><strong>4 jenis pesawat sederhana</strong> — tuas, katrol, bidang miring, roda berporos — semuanya memudahkan pekerjaan manusia.</div></div>
        <div className={local.rPoint}><span>🪨</span><div><strong>Linggis tidak "menghilangkan" berat batu</strong> — ia mengubah gaya kecil di ujung panjang jadi gaya besar di ujung pendek.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Pesawat sederhana ada di sekitar kita</strong> — dari gunting sampai jalan berkelok di pegunungan, semuanya menerapkan prinsip yang sama.</div></div>
      </div>
    </div>
  )
}
