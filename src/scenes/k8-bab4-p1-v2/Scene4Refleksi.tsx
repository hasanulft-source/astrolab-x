import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Tekanan bukan cuma soal gaya — tapi gaya yang dibagi ke seberapa luas permukaan.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📐</span><div><strong>P = F ÷ A</strong> — tekanan berbanding lurus dengan gaya, tapi berbanding terbalik dengan luas permukaan.</div></div>
        <div className={local.rPoint}><span>📌</span><div><strong>Paku runcing menancap mudah</strong> karena luas ujungnya sangat kecil, membuat tekanannya sangat besar meski gayanya sama.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Desain benda sehari-hari</strong> memanfaatkan prinsip ini — dari sepatu salju hingga pisau tajam, semuanya mengatur luas untuk mengubah tekanan.</div></div>
      </div>
    </div>
  )
}
