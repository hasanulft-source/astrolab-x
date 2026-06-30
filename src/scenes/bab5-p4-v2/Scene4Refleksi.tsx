import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Kunci dikotomi adalah cara cerdas mempersempit ketidaktahuan menjadi kepastian.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🔀</span><div><strong>Setiap pertanyaan dikotomis</strong> membagi kemungkinan menjadi dua — proses ini disebut "binary branching" dalam ilmu komputer juga.</div></div>
        <div className={local.rPoint}><span>⚡</span><div><strong>Sangat efisien</strong> — hanya butuh beberapa pertanyaan untuk mengidentifikasi satu jenis dari ribuan kemungkinan.</div></div>
        <div className={local.rPoint}><span>🌍</span><div><strong>Dipakai peneliti lapangan</strong> di seluruh dunia — dari ahli biologi hingga dokter mendiagnosis penyakit dengan logika serupa.</div></div>
      </div>
    </div>
  )
}
