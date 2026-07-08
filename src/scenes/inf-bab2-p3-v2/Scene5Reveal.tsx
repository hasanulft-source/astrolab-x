import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene5Reveal.module.css'
const EXIT_QS=["Guru ingin menunjukkan bahwa nilai kelas MENINGKAT selama 4 bulan. Chart apa yang tepat, dan mengapa bar chart kurang ideal di sini?", "Sebuah berita menampilkan bar chart dengan sumbu Y mulai dari 45%. Apa yang harus kamu curigai — dan bagaimana cara memverifikasi apakah chart itu jujur?", "Dari dataset rapor, pilih 1 pertanyaan dan tentukan: chart apa yang tepat + mengapa + apa yang HARUS dihindari saat membuatnya."]
const ROWS:[string,string,string][]=[['Bar','Perbandingan','Antar kategori terpisah'],['Line','Tren','Perubahan sepanjang waktu'],['Pie','Proporsi','Bagian dari keseluruhan (≤5 kategori)'],['Histogram','Distribusi','Sebaran/frekuensi nilai']]
export function Scene5Reveal({ onUnlock }: DiscoverySceneProps){
  const [s,setS]=useState(0)
  const next = () => {
    setS(x => {
      const nx = x+1
      if (nx === EXIT_QS.length-1) onUnlock()
      return nx
    })
  }
  return(<>
    <p className={styles.prompt}>L7 selesai. <em>Chart yang tepat mengubah data jadi cerita yang jujur.</em></p>
    <div className={styles.main}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.ct}>Rangkuman</div>
          {ROWS.map(([l,t,d])=><div key={l} className={styles.row}><span className={styles.lv}>{l}</span><span><b>{t}</b> — {d}</span></div>)}
        </div>
        <div className={styles.fact}><b>Prinsip:</b> Chart adalah argumen visual, bukan dekorasi. Chart yang tepat menjawab pertanyaan spesifik. Chart yang salah — atau dimanipulasi — bisa menyesatkan pembaca.</div>
      </div>
      <div className={styles.exitBox}>
        <div className={styles.exitLabel}>exit ticket</div>
        {EXIT_QS.slice(0,s+1).map((q,i)=><div key={i} className={`${styles.exitQ} ${i===s?styles.exitActive:''}`}><span className={styles.exitNum}>{i+1}</span><span className={styles.exitText}>{q}</span></div>)}
        {s<EXIT_QS.length-1&&<button className={styles.nextExit} onClick={next}>Pertanyaan berikutnya →</button>}
      </div>
    </div>
  </>)
}
