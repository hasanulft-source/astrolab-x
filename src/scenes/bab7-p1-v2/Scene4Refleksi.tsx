import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Gravitasi adalah perekat tak terlihat yang menyatukan tata surya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>☀️</span><div><strong>Matahari memiliki 99,8% massa tata surya</strong> — gravitasinya mendominasi seluruh sistem.</div></div>
        <div className={local.rPoint}><span>🪐</span><div><strong>Delapan planet</strong> terbagi dua kelompok — planet dalam berbatu (Merkurius-Mars) dan planet luar raksasa gas (Jupiter-Neptunus).</div></div>
        <div className={local.rPoint}><span>🔄</span><div><strong>Gravitasi menjaga keseimbangan orbit</strong> — gaya tarik matahari dan kecepatan gerak planet seimbang sehingga orbitnya stabil selama miliaran tahun.</div></div>
      </div>
    </div>
  )
}
