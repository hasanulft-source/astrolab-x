import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Klasifikasi adalah cara manusia "memetakan" keragaman hayati yang luar biasa besar.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🗂️</span><div><strong>7 tingkatan takson</strong> — Kingdom, Filum, Kelas, Ordo, Famili, Genus, Spesies — dari umum ke spesifik, seperti alamat rumah.</div></div>
        <div className={local.rPoint}><span>🌍</span><div><strong>Binomial nomenklatur</strong> memungkinkan ilmuwan di seluruh dunia memakai nama yang sama untuk spesies yang sama.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Dari 8,7 juta spesies</strong> — sistem ini memungkinkan kita "menemukan" satu spesies tertentu dengan presisi, persis seperti mencari alamat rumah.</div></div>
      </div>
    </div>
  )
}
