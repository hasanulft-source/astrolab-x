import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene5Reveal.module.css'
const EXIT_QS=["Submit file Word Profil Kelas VII yang sudah difinalisasi. Pastikan memenuhi 5+ formatting sesuai brief.", "Kenapa aturan '1 ide besar per slide' penting? Beri contoh slide buruk yang melanggar aturan ini + cara memperbaikinya.", "Rancang struktur 5-slide pitch untuk mempromosikan 1 kegiatan sekolah. Tulis judul tiap slide + 1 kalimat isinya."]
const ROWS:[string,string,string][]=[['L3','Microsoft Word','Dokumen Profil Kelas + 5 formatting'],['L4','PowerPoint','Pitch 5 slide, 3 menit, 1 ide/slide'],['—','Prinsip','Formatting & desain = komunikasi, bukan dekorasi']]
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
    <p className={styles.prompt}>L3–L4 selesai. <em>Dokumen & presentasi yang baik membuat idemu didengar.</em></p>
    <div className={styles.main}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.ct}>Rangkuman</div>
          {ROWS.map(([l,t,d])=><div key={l} className={styles.row}><span className={styles.lv}>{l}</span><span><b>{t}</b> — {d}</span></div>)}
        </div>
        <div className={styles.fact}><b>Alur proyek:</b> File Word (L3) → dikirim via email (L6). Pitch PPT (L4) → dipresentasikan & jadi proyek akhir (L10). Semua terhubung.</div>
      </div>
      <div className={styles.exitBox}>
        <div className={styles.exitLabel}>exit ticket</div>
        {EXIT_QS.slice(0,s+1).map((q,i)=><div key={i} className={`${styles.exitQ} ${i===s?styles.exitActive:''}`}><span className={styles.exitNum}>{i+1}</span><span className={styles.exitText}>{q}</span></div>)}
        {s<EXIT_QS.length-1&&<button className={styles.nextExit} onClick={next}>Pertanyaan berikutnya →</button>}
      </div>
    </div>
  </>)
}
