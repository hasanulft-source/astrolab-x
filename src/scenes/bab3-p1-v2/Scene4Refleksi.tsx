import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Angka suhu hanya bermakna jika kita tahu skalanya.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🌡️</span><div><strong>Empat skala suhu</strong> — Celsius, Fahrenheit, Kelvin, Reamur — mengukur hal yang sama dengan titik nol dan jarak derajat yang berbeda.</div></div>
        <div className={local.rPoint}><span>🔄</span><div><strong>Konversi bukan menebak</strong> — setiap skala punya rumus pasti yang menghubungkannya satu sama lain.</div></div>
        <div className={local.rPoint}><span>⚠️</span><div><strong>Inilah pelajaran Mars Climate Orbiter</strong> — kesalahan satuan/skala bisa menyebabkan kesalahpahaman besar, bahkan bencana.</div></div>
      </div>
    </div>
  )
}
