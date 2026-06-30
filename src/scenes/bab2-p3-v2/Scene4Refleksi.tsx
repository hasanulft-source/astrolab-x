import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Enam perubahan, satu prinsip: kalor menggerakkan partikel.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🔄</span><div><strong>Enam perubahan wujud</strong> — mencair, menguap, mengembun, membeku, menyublim, mengkristal — semuanya tentang energi partikel.</div></div>
        <div className={local.rPoint}><span>🔥</span><div><strong>Menerima kalor</strong> mempercepat partikel (mencair, menguap, menyublim) — partikel makin bebas bergerak.</div></div>
        <div className={local.rPoint}><span>❄️</span><div><strong>Melepas kalor</strong> memperlambat partikel (membeku, mengembun, mengkristal) — partikel makin terikat.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Kamu sekarang bisa menjelaskan</strong> embun, kabut, hujan, dan salju — semua dengan satu kerangka berpikir yang sama.</div></div>
      </div>
    </div>
  )
}
