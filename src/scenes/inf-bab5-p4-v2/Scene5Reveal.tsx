import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene5Reveal.module.css'
const EXIT_QS=["Petakan jaringan di rumahmu: perangkat apa saja yang terhubung, lewat router mana, dan bagaimana terhubung ke internet.", "Audit 1 skenario jaringan (sekolah/rumah). Temukan 1 kelemahan keamanan + rekomendasi konkret perbaikannya.", "Rancang 1 proyek yang menggabungkan minimal 3 perkakas (browser, Word, email, PPT). Tulis alur kerjanya dari awal sampai showcase."]
const ROWS:[string,string,string][]=[['L7','Jaringan','Peta jaringan + cara kerja packet switching'],['L8','Keamanan','Audit kelemahan + rekomendasi'],['L9','Integrasi','Browser → Word → Email → PPT dalam 1 alur'],['L10','Showcase','Presentasi proyek + sumatif Bab 5']]
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
    <p className={styles.prompt}>Bab 5 lengkap. <em>Dari pengguna teknologi menjadi Technology Creator.</em></p>
    <div className={styles.main}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.ct}>Rangkuman</div>
          {ROWS.map(([l,t,d])=><div key={l} className={styles.row}><span className={styles.lv}>{l}</span><span><b>{t}</b> — {d}</span></div>)}
        </div>
        <div className={styles.fact}><b>Puncak Bab 5:</b> Technology Creator sejati bukan yang menguasai 1 alat, tapi yang bisa MENGGABUNGKAN banyak alat untuk menyelesaikan masalah nyata. Dari diagnosa hardware (L1) sampai showcase (L10).</div>
      </div>
      <div className={styles.exitBox}>
        <div className={styles.exitLabel}>exit ticket</div>
        {EXIT_QS.slice(0,s+1).map((q,i)=><div key={i} className={`${styles.exitQ} ${i===s?styles.exitActive:''}`}><span className={styles.exitNum}>{i+1}</span><span className={styles.exitText}>{q}</span></div>)}
        {s<EXIT_QS.length-1&&<button className={styles.nextExit} onClick={next}>Pertanyaan berikutnya →</button>}
      </div>
    </div>
  </>)
}
