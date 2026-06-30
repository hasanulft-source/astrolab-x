import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Tiga cara kalor berpindah — tiga mekanisme yang sangat berbeda.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🥄</span><div><strong>Konduksi</strong> — perpindahan lewat sentuhan langsung, hanya di benda padat yang bersentuhan.</div></div>
        <div className={local.rPoint}><span>🌊</span><div><strong>Konveksi</strong> — perpindahan lewat aliran zat cair/gas, partikelnya ikut berpindah membawa energi.</div></div>
        <div className={local.rPoint}><span>☀️</span><div><strong>Radiasi</strong> — perpindahan lewat gelombang elektromagnetik, satu-satunya yang bisa melewati ruang kosong.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Inilah jawaban teka-teki matahari</strong> — energi panas sampai ke bumi tanpa medium sama sekali, melalui radiasi.</div></div>
      </div>
    </div>
  )
}
