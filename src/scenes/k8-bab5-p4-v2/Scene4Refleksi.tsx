import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Cekung mengumpulkan, cembung menyebarkan — prinsip sederhana dengan banyak penerapan.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🥄</span><div><strong>Bentuk permukaan menentukan sifat bayangan</strong> — cermin/lensa cekung dan cembung memantulkan/membiaskan cahaya secara berbeda.</div></div>
        <div className={local.rPoint}><span>🔍</span><div><strong>5 jenis cermin & lensa</strong> punya karakteristik dan kegunaan berbeda — dari cermin datar sampai lensa untuk kacamata.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Prinsip ini dipakai di banyak alat</strong> — kaca spion, kaca pembesar, kacamata, hingga teleskop, semuanya memanfaatkan sifat cekung-cembung.</div></div>
      </div>
    </div>
  )
}
