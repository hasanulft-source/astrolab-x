import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Kesuburan tanah ditentukan dua hal berbeda: seberapa besar butirannya, dan seberapa asam-basa kimianya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🧱🏖️</span><div><strong>Tekstur tanah</strong> — ditentukan ukuran butir (pasir, debu, liat) — memengaruhi kemampuan menahan air dan udara.</div></div>
        <div className={local.rPoint}><span>⚗️</span><div><strong>pH tanah</strong> — mengukur tingkat keasaman/kebasaan, sangat memengaruhi ketersediaan nutrisi bagi tanaman.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Tanah liat lengket karena butirannya sangat kecil</strong> — bisa merapat rapat dan menahan air, berbeda dari pasir yang butirannya besar dan longgar.</div></div>
      </div>
    </div>
  )
}
