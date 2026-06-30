import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Tiga wujud, satu zat, satu prinsip yang sama.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🔬</span><div><strong>Semua zat tersusun dari partikel</strong> — atom atau molekul yang terus bergerak, meski tak terlihat mata.</div></div>
        <div className={local.rPoint}><span>📐</span><div><strong>Wujud zat ditentukan oleh susunan & gerak partikel</strong> — bukan jenis partikelnya. Air tetap H₂O di ketiga wujud.</div></div>
        <div className={local.rPoint}><span>🌡️</span><div><strong>Suhu mengubah energi gerak partikel</strong> — itulah yang menyebabkan perubahan wujud, bukan perubahan jenis zat.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Kamu sudah bisa menjawab</strong> pertanyaan di awal — bukan dengan tebakan, tapi dengan model partikel.</div></div>
      </div>
    </div>
  )
}
