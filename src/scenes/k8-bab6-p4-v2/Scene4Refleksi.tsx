import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Kromatografi memisahkan lewat kecepatan rambat, sentrifugasi lewat kepadatan yang dipercepat gaya putar.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🎨</span><div><strong>Kromatografi</strong> — memisahkan berdasarkan kecepatan merambat tiap zat pada medium (kertas) dengan pelarut.</div></div>
        <div className={local.rPoint}><span>🌀</span><div><strong>Sentrifugasi</strong> — memisahkan berdasarkan kepadatan (densitas) dengan bantuan putaran cepat yang mempercepat proses pengendapan.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Tinta hitam yang "tunggal" ternyata campuran</strong> — kromatografi membuktikan bahwa apa yang terlihat satu warna bisa jadi gabungan banyak pigmen berbeda.</div></div>
      </div>
    </div>
  )
}
