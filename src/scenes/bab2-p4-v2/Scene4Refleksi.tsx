import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Grafik datar bukan tanda berhenti — itu tanda transformasi sedang terjadi.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📈</span><div><strong>Grafik pemanasan punya dua plateau</strong> — saat mencair (0°C) dan saat mendidih (100°C untuk air).</div></div>
        <div className={local.rPoint}><span>⚡</span><div><strong>Energi tidak hilang</strong> — ia dipakai untuk mengubah susunan partikel, bukan menambah suhu.</div></div>
        <div className={local.rPoint}><span>🔬</span><div><strong>Setiap zat punya titik leleh & titik didih yang khas</strong> — inilah cara ilmuwan mengidentifikasi zat murni.</div></div>
      </div>
    </div>
  )
}
