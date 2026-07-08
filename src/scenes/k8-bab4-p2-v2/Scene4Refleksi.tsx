import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Tekanan hidrostatis adalah "berat" air yang tak terlihat, tapi selalu ada di atasmu.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📐</span><div><strong>P = ρ × g × h</strong> — tekanan hidrostatis bergantung pada massa jenis zat cair, gravitasi, dan kedalaman.</div></div>
        <div className={local.rPoint}><span>🤿</span><div><strong>Bentuk wadah tidak berpengaruh</strong> — hanya kedalaman yang menentukan besar tekanan pada titik tersebut.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Inilah mengapa telinga sakit saat menyelam dalam</strong> — kolom air di atasmu menekan dengan berat yang terus bertambah seiring kedalaman.</div></div>
      </div>
    </div>
  )
}
