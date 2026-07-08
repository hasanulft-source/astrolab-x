import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene5Reveal.module.css'
const EXIT_QS=["Temukan 1 contoh nyata dari internet tentang konten yang berdampak negatif bagi pengirimnya. Analisis: kesalahan apa yang dibuat, dan apa yang seharusnya dilakukan berbeda?", "Dari 5 etika yang dirumuskan, mana yang paling sulit kamu jalankan secara jujur — dan mengapa?", "Bedakan: kapan sebuah postingan adalah 'ekspresi diri yang sah' vs 'membahayakan diri/orang lain'? Beri kriteria yang bisa kamu pakai sebelum posting."]
const ROWS:[string,string,string][]=[['1','Permanensi','Jejak digital tidak bisa dihapus total'],['2','Consent','Jangan posting orang lain tanpa izin'],['3','Verifikasi','Cek kebenaran sebelum berbagi'],['4','Empati Digital','Perlakukan orang seperti bertemu langsung'],['5','Kesadaran Publik','Ruang publik digital = ruang publik nyata']]
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
    <p className={styles.prompt}>Level 1 selesai. <em>Etika digital bukan dari definisi — tapi dari memahami konsekuensi.</em></p>
    <div className={styles.main}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.ct}>Rangkuman</div>
          {ROWS.map(([l,t,d])=><div key={l} className={styles.row}><span className={styles.lv}>{l}</span><span><b>{t}</b> — {d}</span></div>)}
        </div>
        <div className={styles.fact}><b>Filosofi Bab 4:</b> Digital Citizen yang baik bukan yang menghindari teknologi, tapi yang membuat keputusan sadar. Guru bukan hakim — kamu yang memutuskan.</div>
      </div>
      <div className={styles.exitBox}>
        <div className={styles.exitLabel}>exit ticket</div>
        {EXIT_QS.slice(0,s+1).map((q,i)=><div key={i} className={`${styles.exitQ} ${i===s?styles.exitActive:''}`}><span className={styles.exitNum}>{i+1}</span><span className={styles.exitText}>{q}</span></div>)}
        {s<EXIT_QS.length-1&&<button className={styles.nextExit} onClick={next}>Pertanyaan berikutnya →</button>}
      </div>
    </div>
  </>)
}
