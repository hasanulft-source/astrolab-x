import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene5Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Pengukuran yang baik adalah fondasi data yang bisa dipercaya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>📏</span><div><strong>Semua pengukuran mengandung ketidakpastian</strong> — bukan berarti tidak berguna. Ilmuwan melaporkan rentang kesalahannya, bukan menyembunyikannya.</div></div>
        <div className={local.rPoint}><span>🎯</span><div><strong>Presisi ≠ Akurasi</strong> — data bisa konsisten tapi salah (presisi tinggi, akurasi rendah), atau benar rata-rata tapi tidak konsisten.</div></div>
        <div className={local.rPoint}><span>🌍</span><div><strong>Mars Climate Orbiter mengingatkan kita</strong> — kesalahan satuan dan cara pengukuran bukan hal sepele. Sains yang baik dimulai dari pengukuran yang teliti.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Kamu sekarang bisa membedakan</strong> presisi dari akurasi — dan itu bukan hal yang semua orang pahami.</div></div>
      </div>
    </div>
  )
}
