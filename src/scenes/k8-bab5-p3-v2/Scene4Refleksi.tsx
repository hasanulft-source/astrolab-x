import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sedotan yang "patah" hanyalah cahaya yang berbelok — bukan benda yang berubah bentuk.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🪞</span><div><strong>Pemantulan</strong> — cahaya memantul kembali ke medium asal, sudut datang sama dengan sudut pantul.</div></div>
        <div className={local.rPoint}><span>🥤</span><div><strong>Pembiasan</strong> — cahaya berbelok arah saat pindah medium karena kecepatannya berubah, membuat sedotan tampak patah.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Kedua peristiwa ini ada di sekitar kita</strong> setiap hari — dari cermin di kamar mandi sampai kolam renang yang terlihat lebih dangkal dari aslinya.</div></div>
      </div>
    </div>
  )
}
