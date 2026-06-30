import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene3Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Yellowstone mengajarkan kita: ekosistem adalah satu kesatuan, bukan bagian-bagian terpisah.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🔗</span><div><strong>Cascade effect (efek berjenjang)</strong> — satu perubahan kecil bisa merambat dan membesar ke seluruh ekosistem yang tampaknya tidak berhubungan.</div></div>
        <div className={local.rPoint}><span>🐺</span><div><strong>Serigala dikembalikan ke Yellowstone tahun 1995</strong> — dan secara bertahap, sungai serta vegetasinya pulih kembali. Bukti nyata kekuatan keseimbangan ekosistem.</div></div>
        <div className={local.rPoint}><span>⚠️</span><div><strong>Setiap spesies punya peran</strong> — bahkan predator yang dianggap "berbahaya" bisa jadi kunci keseimbangan seluruh sistem.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Inilah mengapa konservasi penting</strong> — kita sering tidak menyadari dampak penuh dari satu tindakan terhadap ekosistem secara keseluruhan.</div></div>
      </div>
    </div>
  )
}
