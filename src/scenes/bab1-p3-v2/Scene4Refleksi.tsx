import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Alat yang tepat, percobaan yang bermakna.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🔬</span><div><strong>Setiap alat punya fungsi spesifik</strong> — memakai alat yang salah bukan hanya tidak efektif, tapi bisa berbahaya.</div></div>
        <div className={local.rPoint}><span>📏</span><div><strong>Alat ukur menentukan kualitas data</strong> — gelas ukur untuk volume, bukan gelas beker biasa.</div></div>
        <div className={local.rPoint}><span>🛡️</span><div><strong>Keselamatan bukan pilihan</strong> — semua tips aman yang kamu pelajari tadi adalah SOP wajib di lab manapun.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Kamu sekarang siap masuk lab</strong> — dengan pemahaman, bukan hanya keberanian.</div></div>
      </div>
    </div>
  )
}
