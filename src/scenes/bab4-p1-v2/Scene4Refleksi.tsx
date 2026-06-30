import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Jarak menghitung perjalanan; perpindahan menghitung hasil akhirnya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📏</span><div><strong>Jarak (skalar)</strong> — total panjang lintasan yang ditempuh, selalu bernilai positif.</div></div>
        <div className={local.rPoint}><span>📍</span><div><strong>Perpindahan (vektor)</strong> — perubahan posisi dari titik awal ke titik akhir, punya arah dan bisa nol.</div></div>
        <div className={local.rPoint}><span>🏃</span><div><strong>Pelari 400m yang kembali ke start</strong> — menempuh jarak 400m tapi perpindahannya 0m. Keduanya benar, mengukur hal berbeda.</div></div>
      </div>
    </div>
  )
}
