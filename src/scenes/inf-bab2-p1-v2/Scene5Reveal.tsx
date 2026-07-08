import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene5Reveal.module.css'
const EXIT_QS=['Dataset punya COUNT(nilai)=28 tapi COUNTA(nama)=30. Apa yang harus dilakukan sebelum menghitung rata-rata — dan mengapa ini kritis?','Ada sel nilai berisi teks "TL" (tidak lengkap). Apa yang terjadi jika AVERAGE dipanggil pada kolom itu — dan bagaimana cara yang benar menanganinya?','Buat 1 pertanyaan analitis dari dataset rapor yang bisa dijawab kombinasi MIN, MAX, dan COUNTIF. Tulis pertanyaan dan formulanya.']
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
    <p className={styles.prompt}>L1–L4 selesai. <em>Fondasi data analyst: bedakan data dari informasi, bersihkan sebelum analisis, formula sebagai alat berpikir.</em></p>
    <div className={styles.main}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.ct}>4 Level Pertama — Rangkuman</div>
          {[['L1','Data vs Informasi','Fakta mentah vs fakta bermakna'],['L2','Antarmuka Excel','6 elemen kritis + navigation challenge'],['L3','Cleaning Data','Konsistensi format, missing value, spasi'],['L4','Formula Dasar','SUM AVERAGE MAX MIN COUNT COUNTA']].map(([l,t,d])=><div key={l} className={styles.row}><span className={styles.lv}>{l}</span><span><b>{t}</b> — {d}</span></div>)}
        </div>
        <div className={styles.fact}><b>Fakta industri:</b> 60–80% waktu data analyst dihabiskan untuk cleaning dan formatting data — bukan untuk analisis. Kamu sudah latihan skill paling penting.</div>
      </div>
      <div className={styles.exitBox}>
        <div className={styles.exitLabel}>exit ticket</div>
        {EXIT_QS.slice(0,s+1).map((q,i)=><div key={i} className={`${styles.exitQ} ${i===s?styles.exitActive:''}`}><span className={styles.exitNum}>{i+1}</span><span className={styles.exitText}>{q}</span></div>)}
        {s<EXIT_QS.length-1&&<button className={styles.nextExit} onClick={next}>Pertanyaan berikutnya →</button>}
      </div>
    </div>
  </>)
}
