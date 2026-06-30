import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Efek rumah kaca yang membuat mobil panas, juga sedang memanaskan bumi.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🚗</span><div><strong>Mobil tertutup di terik matahari</strong> adalah analogi nyata efek rumah kaca — cahaya masuk mudah, panas keluar sulit.</div></div>
        <div className={local.rPoint}><span>🌍</span><div><strong>Gas rumah kaca (CO₂, metana)</strong> berfungsi seperti kaca mobil di skala atmosfer bumi — menahan panas yang seharusnya bisa lepas ke angkasa.</div></div>
        <div className={local.rPoint}><span>📈</span><div><strong>Sejak era industri, CO₂ naik dari 280 ke lebih dari 420 ppm</strong> — penyebab utama pemanasan global yang kita rasakan sekarang.</div></div>
      </div>
    </div>
  )
}
