import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Zat cair meneruskan tekanan ke segala arah — inilah rahasia melipatgandakan gaya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📐</span><div><strong>Hukum Pascal</strong> — tekanan yang diberikan pada zat cair dalam ruang tertutup diteruskan sama besar ke segala arah.</div></div>
        <div className={local.rPoint}><span>🚗</span><div><strong>F₁/A₁ = F₂/A₂</strong> — dengan pengisap besar yang jauh lebih luas, gaya kecil bisa menghasilkan gaya besar.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Dongkrak, rem hidrolik, kursi dokter gigi</strong> — semuanya memanfaatkan prinsip yang sama untuk melipatgandakan gaya manusia.</div></div>
      </div>
    </div>
  )
}
