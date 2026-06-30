import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Rantai makanan adalah jalur tunggal — jaring-jaring makanan adalah realitas sesungguhnya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🔗</span><div><strong>Rantai makanan</strong> — urutan linear sederhana: produsen → konsumen 1 → konsumen 2 → dst.</div></div>
        <div className={local.rPoint}><span>🕸️</span><div><strong>Jaring-jaring makanan</strong> — gabungan banyak rantai makanan yang saling terhubung, menggambarkan ekosistem nyata.</div></div>
        <div className={local.rPoint}><span>🛡️</span><div><strong>Jaring yang kompleks lebih tahan banting</strong> — kehilangan satu spesies tidak otomatis meruntuhkan seluruh sistem.</div></div>
      </div>
    </div>
  )
}
