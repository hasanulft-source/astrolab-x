import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from '../bab1-p1-v2/local.module.css'

export function Scene4Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Reaksi warna iodin bukan sulap — itu bukti kimia yang bisa diuji berulang kali.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🍚</span><div><strong>6 jenis nutrisi</strong> — karbohidrat, protein, lemak, vitamin, mineral, air — masing-masing punya fungsi berbeda bagi tubuh.</div></div>
        <div className={local.rPoint}><span>🧪</span><div><strong>Iodin adalah uji spesifik amilum</strong> — hanya bereaksi dengan karbohidrat jenis pati, bukan dengan protein atau lemak.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Sains membedakan zat lewat reaksi khasnya</strong> — bukan lewat tampilan atau rasa, tapi lewat uji yang bisa diulang dan konsisten hasilnya.</div></div>
      </div>
    </div>
  )
}
