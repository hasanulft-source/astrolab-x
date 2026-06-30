import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene5Refleksi(_: DiscoverySceneProps) {
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Kamu baru saja berpikir seperti seorang ilmuwan.</p>
      <div className={local.refleksiCard}>
        <div className={local.rPoint}><span>🔍</span><div><strong>Sains dimulai dari rasa ingin tahu</strong> — bukan dari hafalan. Pertanyaan sederhana sehari-hari bisa menjadi penelitian ilmiah.</div></div>
        <div className={local.rPoint}><span>🌿</span><div><strong>Ada banyak cabang sains</strong> — masing-masing menjawab pertanyaan berbeda, tapi semua pakai metode yang sama.</div></div>
        <div className={local.rPoint}><span>⚗️</span><div><strong>Metode ilmiah adalah panduan berpikir</strong> — bukan prosedur kaku. Intinya: amati, tanya, uji, buktikan.</div></div>
        <div className={local.rPoint}><span>✨</span><div><strong>Kamu sudah menjawab sendiri</strong> apa yang membedakan sains dari tebak-tebakan — dengan cara ilmiah.</div></div>
      </div>
    </div>
  )
}
