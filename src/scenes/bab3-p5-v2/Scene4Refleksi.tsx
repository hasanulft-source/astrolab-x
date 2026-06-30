import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Tutup toples macet, dan kamu sekarang tahu rahasianya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📏</span><div><strong>Pemuaian = pertambahan ukuran zat akibat panas</strong> — partikel bergerak lebih jauh satu sama lain saat energinya bertambah.</div></div>
        <div className={local.rPoint}><span>🥇</span><div><strong>Gas memuai paling besar</strong>, diikuti cair, lalu padat — karena tingkat kebebasan gerak partikelnya berbeda.</div></div>
        <div className={local.rPoint}><span>🫙</span><div><strong>Tutup logam memuai lebih besar dari kaca</strong> saat direndam air panas — itulah sebabnya tutup jadi longgar dan mudah dibuka.</div></div>
        <div className={local.rPoint}><span>🔧</span><div><strong>Prinsip ini dipakai di rel kereta</strong> (diberi celah), jembatan (sambungan ekspansi), dan termometer raksa.</div></div>
      </div>
    </div>
  )
}
