import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene5Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Ruang kosong antar-partikel menentukan apakah zat bisa dimampatkan.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>💨</span><div><strong>Gas paling mudah dimampatkan</strong> karena jarak antar-partikelnya jauh lebih besar dari padat dan cair.</div></div>
        <div className={local.rPoint}><span>🧱</span><div><strong>Padat & cair sangat sulit dimampatkan</strong> — partikelnya sudah sangat rapat, hampir tidak ada ruang kosong.</div></div>
        <div className={local.rPoint}><span>🔧</span><div><strong>Prinsip ini dipakai di banyak teknologi</strong> — tabung gas, ban, rem hidraulik — semua memanfaatkan sifat kemampatan zat.</div></div>
      </div>
    </div>
  )
}
