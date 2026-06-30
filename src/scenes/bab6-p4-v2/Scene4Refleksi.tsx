import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Piramida energi menjelaskan mengapa predator puncak selalu langka.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>⚡</span><div><strong>Hukum 10%</strong> — hanya sekitar 10% energi yang diteruskan ke tingkat trofik berikutnya, sisanya hilang sebagai panas metabolisme.</div></div>
        <div className={local.rPoint}><span>📐</span><div><strong>Piramida energi selalu mengecil ke atas</strong> — produsen di dasar paling banyak, predator puncak paling sedikit.</div></div>
        <div className={local.rPoint}><span>🦅</span><div><strong>Inilah mengapa elang langka secara alami</strong> — bukan karena dilindungi manusia saja, tapi karena keterbatasan energi yang sampai ke level mereka.</div></div>
      </div>
    </div>
  )
}
