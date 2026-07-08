import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene5Reveal.module.css'
const EXIT_QS=["Bedakan kapan pakai COUNTIF vs SUMIF vs IF. Beri 1 contoh pertanyaan rapor untuk masing-masing.", "Formula =SUMIF(D2:D31,\"Perempuan\",C2:C31) — jelaskan mengapa range syarat (D) berbeda dari range yang dijumlahkan (C). Apa yang terjadi kalau tertukar?", "Rancang 1 analisis 2-kriteria yang bisa membantu wali kelas mendeteksi siswa berisiko. Tulis kriteria dan formula yang dipakai."]
const ROWS:[string,string,string][]=[['L5','Formula Bersyarat','IF, COUNTIF, SUMIF, COUNTIFS'],['L6','Sort & Filter','Susun ulang & saring untuk temukan pola'],['—','Kombinasi','Multi-kriteria = analisis data nyata']]
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
    <p className={styles.prompt}>L5–L6 selesai. <em>Formula bersyarat + sort/filter = alat analisis data yang sebenarnya.</em></p>
    <div className={styles.main}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.ct}>Rangkuman</div>
          {ROWS.map(([l,t,d])=><div key={l} className={styles.row}><span className={styles.lv}>{l}</span><span><b>{t}</b> — {d}</span></div>)}
        </div>
        <div className={styles.fact}><b>Prinsip kunci:</b> Formula bersyarat mengubah Excel dari kalkulator menjadi alat analisis. Pertanyaan "berapa yang memenuhi syarat X" adalah inti analisis data.</div>
      </div>
      <div className={styles.exitBox}>
        <div className={styles.exitLabel}>exit ticket</div>
        {EXIT_QS.slice(0,s+1).map((q,i)=><div key={i} className={`${styles.exitQ} ${i===s?styles.exitActive:''}`}><span className={styles.exitNum}>{i+1}</span><span className={styles.exitText}>{q}</span></div>)}
        {s<EXIT_QS.length-1&&<button className={styles.nextExit} onClick={next}>Pertanyaan berikutnya →</button>}
      </div>
    </div>
  </>)
}
