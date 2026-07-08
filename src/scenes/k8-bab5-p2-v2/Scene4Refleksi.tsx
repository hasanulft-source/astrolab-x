import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Bunyi adalah gelombang mekanik — ia butuh partikel untuk "meneruskan" getarannya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🎵</span><div><strong>Frekuensi menentukan nada</strong> (tinggi/rendah), <strong>amplitudo menentukan kuat bunyi</strong> (keras/lembut) — dua hal yang independen.</div></div>
        <div className={local.rPoint}><span>🌌</span><div><strong>Bunyi tidak bisa merambat di ruang hampa</strong> — tidak ada partikel sama sekali untuk digetarkan.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Bunyi merambat lebih cepat di zat padat</strong> dibanding cair, dan lebih cepat di cair dibanding gas — semakin rapat partikelnya, semakin cepat getaran diteruskan.</div></div>
      </div>
    </div>
  )
}
