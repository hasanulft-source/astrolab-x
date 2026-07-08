import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Keuntungan mekanik adalah cara memindahkan "beban kerja" — bukan menghilangkannya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📐</span><div><strong>KM = Lk ÷ Lb</strong> — semakin panjang lengan kuasa dibanding lengan beban, semakin besar keuntungan mekanik.</div></div>
        <div className={local.rPoint}><span>⚖️</span><div><strong>KM besar = gaya kecil</strong> yang dibutuhkan — inilah mengapa gagang pintu jauh dari engsel terasa ringan.</div></div>
        <div className={local.rPoint}><span>🔄</span><div><strong>Selalu ada trade-off</strong> — gaya kecil berarti jarak tempuh gaya kuasa jadi lebih jauh. Usaha total tidak berkurang.</div></div>
      </div>
    </div>
  )
}
