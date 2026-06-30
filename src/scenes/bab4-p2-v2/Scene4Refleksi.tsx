import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Grafik adalah bahasa visual gerak — kemiringannya bercerita tentang kecepatan.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📏</span><div><strong>GLB (Gerak Lurus Beraturan)</strong> — kecepatan tetap, jarak bertambah sama tiap detik, grafik s-t berupa garis lurus.</div></div>
        <div className={local.rPoint}><span>📈</span><div><strong>Kemiringan grafik s-t = kecepatan</strong> — semakin curam, semakin cepat geraknya.</div></div>
        <div className={local.rPoint}><span>🚗</span><div><strong>Mobil A dan B berbeda</strong> bukan karena salah satu "lebih benar" — keduanya valid, hanya pola geraknya berbeda.</div></div>
      </div>
    </div>
  )
}
