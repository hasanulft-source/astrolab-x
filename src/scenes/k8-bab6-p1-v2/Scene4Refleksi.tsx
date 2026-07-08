import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Homogen dan heterogen adalah dua cara berbeda partikel "berbaur" dalam campuran.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>💧</span><div><strong>Campuran homogen</strong> — komponennya tersebar merata hingga tidak bisa dibedakan lagi, seperti air gula.</div></div>
        <div className={local.rPoint}><span>🏜️</span><div><strong>Campuran heterogen</strong> — komponennya masih bisa dibedakan dan dipisahkan secara fisik, seperti air pasir.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Klasifikasi ini menentukan cara pemisahan</strong> — heterogen bisa dipisah dengan penyaringan sederhana, homogen butuh metode khusus seperti evaporasi atau distilasi.</div></div>
      </div>
    </div>
  )
}
