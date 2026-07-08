import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Paru-paru bergerak secara pasif — digerakkan oleh perubahan tekanan yang diciptakan otot di sekitarnya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>💨</span><div><strong>Diafragma & otot antar rusuk</strong> adalah "mesin" sesungguhnya di balik napas — bukan paru-paru itu sendiri.</div></div>
        <div className={local.rPoint}><span>⬇️⬆️</span><div><strong>Inspirasi</strong> terjadi saat rongga dada membesar (tekanan turun, udara masuk); <strong>ekspirasi</strong> saat rongga dada mengecil (tekanan naik, udara keluar).</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Pernapasan dada dan perut</strong> menunjukkan otot mana yang lebih dominan bekerja — keduanya normal, tergantung situasi.</div></div>
      </div>
    </div>
  )
}
