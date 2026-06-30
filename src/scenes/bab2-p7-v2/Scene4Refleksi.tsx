import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Massa jenis menjelaskan mengapa benda mengapung atau tenggelam — bukan beratnya saja.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>⚖️</span><div><strong>ρ = m/V</strong> — massa jenis adalah perbandingan massa terhadap volume, bukan massa atau volume saja.</div></div>
        <div className={local.rPoint}><span>🌊</span><div><strong>Benda mengapung jika ρ-nya lebih kecil</strong> dari ρ fluida — bukan karena ringan, tapi karena rasio massa-volumenya kecil.</div></div>
        <div className={local.rPoint}><span>🚢</span><div><strong>Kapal besi mengapung karena bentuknya</strong> — bentuk berongga membuat volume total jauh lebih besar dari massa besinya saja.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Prinsip ini menjelaskan</strong> mengapa balon udara terbang, kapal selam menyelam dan muncul, serta es mengapung di air.</div></div>
      </div>
    </div>
  )
}
