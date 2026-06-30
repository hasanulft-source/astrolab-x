import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Hidup atau tidak — bukan soal satu ciri, tapi soal sekumpulan ciri.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🧬</span><div><strong>7 ciri makhluk hidup</strong> — nutrisi, bernapas, tumbuh, reproduksi, iritabilitas, bergerak, ekskresi — harus dipenuhi bersama, bukan satu saja.</div></div>
        <div className={local.rPoint}><span>🦠</span><div><strong>Virus adalah kasus batas</strong> — ia memenuhi sebagian ciri tapi tidak semuanya secara independen, sehingga statusnya diperdebatkan ilmuwan.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Sains tidak selalu memberi jawaban hitam-putih</strong> — kadang jawabannya "diperdebatkan", dan itu juga jawaban yang valid berdasarkan bukti.</div></div>
      </div>
    </div>
  )
}
