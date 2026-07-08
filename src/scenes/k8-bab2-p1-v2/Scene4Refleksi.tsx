import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Struktur mikroskopis paru-paru dirancang untuk satu tujuan: efisiensi pertukaran gas.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🫁</span><div><strong>6 organ saluran pernapasan</strong> — hidung, faring, laring, trakea, bronkus, alveolus — masing-masing punya peran berbeda dalam perjalanan udara.</div></div>
        <div className={local.rPoint}><span>🫧</span><div><strong>Alveolus adalah tempat pertukaran gas sesungguhnya</strong> — dindingnya setipis satu sel agar oksigen dan CO₂ mudah berpindah.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Jutaan alveolus kecil lebih efisien</strong> dari satu ruang besar — prinsip yang sama juga muncul di struktur biologis lain seperti usus halus.</div></div>
      </div>
    </div>
  )
}
