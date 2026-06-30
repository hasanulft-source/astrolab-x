import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene5Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Kamu baru saja menyelesaikan satu siklus sains utuh.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>❓</span><div><strong>Pertanyaan</strong> — "Kenapa telur bisa mengapung?" memicu seluruh penyelidikan ini.</div></div>
        <div className={local.rPoint}><span>💡</span><div><strong>Hipotesis</strong> — Kamu membuat dugaan sebelum mencoba. Itu bukan tebakan — itu berpikir ilmiah.</div></div>
        <div className={local.rPoint}><span>⚗️</span><div><strong>Eksperimen</strong> — Kamu mengubah satu variabel (garam), mengamati hasilnya, dan mengontrol yang lain.</div></div>
        <div className={local.rPoint}><span>✅</span><div><strong>Kesimpulan</strong> — Kerapatan menentukan apung/tenggelam. Ini bukan opini — ini bukti yang bisa diulang siapapun.</div></div>
      </div>
    </div>
  )
}
