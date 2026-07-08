import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Akar tanaman bukan sekadar penopang — ia pelindung alami tanah dari erosi.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🌧️</span><div><strong>Erosi</strong> — pengikisan tanah oleh air atau angin, dipercepat drastis saat vegetasi penutup hilang.</div></div>
        <div className={local.rPoint}><span>🌳</span><div><strong>Akar tanaman mengikat partikel tanah</strong> — inilah mengapa lereng gundul jauh lebih rentan longsor dan erosi dibanding lereng berpohon.</div></div>
        <div className={local.rPoint}><span>🪜🌲</span><div><strong>4 metode konservasi</strong> — terasering, reboisasi, tanaman penutup, rotasi tanaman — semuanya melindungi tanah dari degradasi.</div></div>
      </div>
    </div>
  )
}
