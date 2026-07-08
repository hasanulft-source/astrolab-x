import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene5Reveal.module.css'
const EXIT_QS=["Jelaskan perbedaan kesimpulan deskriptif, analitis, dan prediktif dengan 1 contoh masing-masing dari data rapor.", "Beri 1 contoh korelasi di kehidupan sekolah yang BUKAN kausalitas. Identifikasi faktor ketiga yang mungkin jadi penyebab sebenarnya.", "Kamu menemukan pola: siswa yang mengumpulkan tugas tepat waktu punya nilai lebih tinggi. Sebelum menyimpulkan, apa 2 hal yang harus kamu periksa agar tidak salah tafsir?"]
const ROWS:[string,string,string][]=[['L8','Kesimpulan Berlapis','Deskriptif → Analitis → Prediktif'],['—','Korelasi≠Kausalitas','Hubungan bukan berarti sebab-akibat'],['L9','Laporan Final','4-sheet Excel + presentasi']]
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
    <p className={styles.prompt}>Bab 2 lengkap. <em>Dari dataset berantakan menjadi laporan analisis yang jujur dan berguna.</em></p>
    <div className={styles.main}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.ct}>Rangkuman</div>
          {ROWS.map(([l,t,d])=><div key={l} className={styles.row}><span className={styles.lv}>{l}</span><span><b>{t}</b> — {d}</span></div>)}
        </div>
        <div className={styles.fact}><b>Produk Bab 2:</b> file Excel yang berevolusi dari dataset messy (L1) jadi laporan analisis lengkap (L9). Ini deliverable nyata — bukti kompetensi data analyst.</div>
      </div>
      <div className={styles.exitBox}>
        <div className={styles.exitLabel}>exit ticket</div>
        {EXIT_QS.slice(0,s+1).map((q,i)=><div key={i} className={`${styles.exitQ} ${i===s?styles.exitActive:''}`}><span className={styles.exitNum}>{i+1}</span><span className={styles.exitText}>{q}</span></div>)}
        {s<EXIT_QS.length-1&&<button className={styles.nextExit} onClick={next}>Pertanyaan berikutnya →</button>}
      </div>
    </div>
  </>)
}
