import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Kemiringan 23,5° menjadi penentu musim di seluruh dunia.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🌍</span><div><strong>Rotasi bumi</strong> (24 jam) menyebabkan siang dan malam — bumi berputar pada porosnya sendiri.</div></div>
        <div className={local.rPoint}><span>☀️</span><div><strong>Revolusi bumi</strong> (365,25 hari) mengelilingi matahari, dikombinasikan dengan kemiringan sumbu, menghasilkan musim.</div></div>
        <div className={local.rPoint}><span>📐</span><div><strong>Sumbu miring 23,5° yang TETAP arahnya</strong> — bukan jarak ke matahari — yang menyebabkan belahan bumi utara dan selatan punya musim berlawanan.</div></div>
      </div>
    </div>
  )
}
