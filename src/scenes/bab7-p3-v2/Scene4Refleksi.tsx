import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Fase bulan adalah geometri cahaya, bukan perubahan fisik bulan.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🌑🌕</span><div><strong>8 fase bulan</strong> berulang setiap 29,5 hari — bulan baru, sabit, kuartal, cembung, hingga purnama dan kembali.</div></div>
        <div className={local.rPoint}><span>☀️</span><div><strong>Bulan hanya memantulkan cahaya matahari</strong> — tidak punya cahaya sendiri. Setengah bulan selalu disinari, setengah lainnya gelap.</div></div>
        <div className={local.rPoint}><span>👁️</span><div><strong>Yang berubah adalah sudut pandang kita</strong> dari bumi — bukan bentuk fisik bulan itu sendiri.</div></div>
      </div>
    </div>
  )
}
