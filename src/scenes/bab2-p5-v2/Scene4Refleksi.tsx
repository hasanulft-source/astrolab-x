import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Satu pertanyaan kunci: apakah ada zat baru yang terbentuk?</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🔄</span><div><strong>Perubahan fisika</strong> mengubah bentuk/wujud tapi zatnya tetap sama — bisa dikembalikan ke kondisi semula.</div></div>
        <div className={local.rPoint}><span>⚗️</span><div><strong>Perubahan kimia</strong> menghasilkan zat baru dengan sifat berbeda — umumnya tidak bisa dikembalikan.</div></div>
        <div className={local.rPoint}><span>🔍</span><div><strong>4 tanda perubahan kimia</strong>: perubahan warna, munculnya gas, perubahan suhu drastis, dan endapan baru.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Kayu yang terbakar tidak bisa kembali jadi kayu</strong> — karena karbon dan zat lainnya sudah bereaksi membentuk zat baru sama sekali.</div></div>
      </div>
    </div>
  )
}
