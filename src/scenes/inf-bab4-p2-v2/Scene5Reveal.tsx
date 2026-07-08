import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene5Reveal.module.css'
const EXIT_QS=["Cek screen time HP-mu selama 7 hari ke depan. Catat data harian dan buat analisis: pola apa yang kamu temukan? Apakah sesuai yang kamu inginkan?", "Dari 3 keputusan di kontrakmu, mana yang paling sulit dijalankan — dan apa strategi konkret agar berhasil?", "Bedakan 'penggunaan HP yang produktif' dari 'penggunaan yang menghabiskan waktu'. Beri kriteria yang bisa kamu pakai untuk membedakan keduanya."]
const ROWS:[string,string,string][]=[['1','Data Nyata','Audit screen time pribadi'],['2','Self-Assessment','5 tanda ketergantungan digital'],['3','Kontrak Digital','3 keputusan yang dipilih sendiri']]
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
    <p className={styles.prompt}>Level 2 selesai. <em>Kamu auditor kehidupan digitalmu sendiri — bukan guru, bukan orang tua.</em></p>
    <div className={styles.main}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.ct}>Rangkuman</div>
          {ROWS.map(([l,t,d])=><div key={l} className={styles.row}><span className={styles.lv}>{l}</span><span><b>{t}</b> — {d}</span></div>)}
        </div>
        <div className={styles.fact}><b>Prinsip:</b> Keseimbangan digital bukan tentang berhenti pakai HP, tapi tentang keputusan sadar. Data pribadimu → kesadaran → tindakan yang kamu pilih sendiri.</div>
      </div>
      <div className={styles.exitBox}>
        <div className={styles.exitLabel}>exit ticket</div>
        {EXIT_QS.slice(0,s+1).map((q,i)=><div key={i} className={`${styles.exitQ} ${i===s?styles.exitActive:''}`}><span className={styles.exitNum}>{i+1}</span><span className={styles.exitText}>{q}</span></div>)}
        {s<EXIT_QS.length-1&&<button className={styles.nextExit} onClick={next}>Pertanyaan berikutnya →</button>}
      </div>
    </div>
  </>)
}
