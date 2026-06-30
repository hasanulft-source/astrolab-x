import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Keselamatan bukan hambatan — keselamatan adalah syarat sains bisa dilakukan.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🔍</span><div><strong>Semua insiden di awal tadi bisa dicegah</strong> dengan satu hal: memahami dan menerapkan prosedur keselamatan sebelum mulai.</div></div>
        <div className={local.rPoint}><span>⚠️</span><div><strong>Simbol bahaya bukan dekorasi</strong> — itu peringatan dari ilmuwan yang sudah tahu risikanya. Baca sebelum menyentuh.</div></div>
        <div className={local.rPoint}><span>🛡️</span><div><strong>APD adalah teman sains</strong> — kacamata, sarung tangan, dan jas lab bukan beban, tapi perlindungan yang memungkinkan kamu berani bereksperimen.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Ilmuwan terbaik adalah yang paling berhati-hati</strong> — bukan yang paling nekat.</div></div>
      </div>
    </div>
  )
}
