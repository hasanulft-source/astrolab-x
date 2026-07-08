import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Garam tidak pernah "hilang" dalam air laut — ia menunggu air menguap untuk menampakkan diri.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>☀️</span><div><strong>Evaporasi</strong> — memanfaatkan penguapan pelarut, meninggalkan zat terlarut yang mengkristal (efisien tapi tidak mendapat pelarutnya kembali).</div></div>
        <div className={local.rPoint}><span>🔬</span><div><strong>3 metode punya prinsip dasar berbeda</strong> — ukuran partikel (filtrasi), penguapan (evaporasi), titik didih (distilasi).</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Petani garam memanfaatkan evaporasi alami</strong> — matahari sebagai sumber energi gratis untuk memisahkan garam dari air laut.</div></div>
      </div>
    </div>
  )
}
