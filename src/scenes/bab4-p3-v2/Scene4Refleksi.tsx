import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Luas di bawah grafik v-t bukan sekadar matematika — itu jarak sebenarnya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📉</span><div><strong>GLBB (Gerak Lurus Berubah Beraturan)</strong> — kecepatan berubah secara konstan, grafik v-t berupa garis lurus (naik atau turun).</div></div>
        <div className={local.rPoint}><span>📐</span><div><strong>Luas di bawah grafik v-t = jarak tempuh</strong> — entah bentuknya segitiga, trapesium, atau persegi.</div></div>
        <div className={local.rPoint}><span>🚗</span><div><strong>Inilah dasar perhitungan jarak pengereman</strong> mobil — yang penting untuk keselamatan berkendara di jalan raya.</div></div>
      </div>
    </div>
  )
}
