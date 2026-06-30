import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>5 kingdom mewakili 5 strategi berbeda untuk hidup di bumi.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🦠</span><div><strong>Monera & Protista</strong> — kehidupan sederhana, sel tunggal, fondasi rantai makanan dan siklus nutrisi.</div></div>
        <div className={local.rPoint}><span>🍄</span><div><strong>Fungi</strong> — dekomposer alam, kingdom unik dengan kombinasi ciri yang berbeda dari hewan maupun tanaman.</div></div>
        <div className={local.rPoint}><span>🌿🦁</span><div><strong>Plantae & Animalia</strong> — dua strategi besar: membuat energi sendiri (fotosintesis) vs mencari energi dari luar (makan).</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Klasifikasi bukan sekadar mengelompokkan</strong> — ia mencerminkan perbedaan biologis yang nyata dan mendalam.</div></div>
      </div>
    </div>
  )
}
