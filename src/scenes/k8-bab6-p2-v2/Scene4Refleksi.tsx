import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Lumpur tidak "hilang" — ia hanya tertahan di tempat yang tidak kamu lihat.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🔽</span><div><strong>Filtrasi</strong> — memisahkan berdasarkan ukuran partikel, cocok untuk campuran heterogen padat-cair.</div></div>
        <div className={local.rPoint}><span>🧪</span><div><strong>Distilasi</strong> — memisahkan berdasarkan perbedaan titik didih, cocok untuk campuran homogen zat cair.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Metode berbeda untuk masalah berbeda</strong> — filtrasi tidak bisa memisahkan garam dari air (homogen), butuh distilasi atau evaporasi.</div></div>
      </div>
    </div>
  )
}
