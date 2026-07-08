import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene5Reveal.module.css'
const EXIT_QS=["Foto/gambar 5 komponen hardware dari komputer di rumahmu. Identifikasi kategori (input/proses/output/penyimpanan) dan fungsinya.", "Komputer temanmu lambat saat buka banyak tab browser. Berdasarkan fungsi RAM, apa diagnosamu dan solusinya?", "Rancang struktur folder untuk menyimpan semua file sekolahmu 1 semester. Tulis hirarki + logika penamaan yang kamu pakai dan mengapa."]
const ROWS:[string,string,string][]=[['L1','Hardware','Diagnosa komputer + 4 kategori komponen'],['L2','File Management','Sistem folder + penamaan konsisten'],['—','Prinsip','Paham fungsi → bisa mendiagnosa masalah']]
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
    <p className={styles.prompt}>L1–L2 selesai. <em>Technology Creator dimulai dari memahami alat yang dipakai.</em></p>
    <div className={styles.main}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.ct}>Rangkuman</div>
          {ROWS.map(([l,t,d])=><div key={l} className={styles.row}><span className={styles.lv}>{l}</span><span><b>{t}</b> — {d}</span></div>)}
        </div>
        <div className={styles.fact}><b>Alur Bab 5:</b> 10 Level yang saling terhubung — dari diagnosa hardware (L1) sampai showcase proyek integrasi (L10). Setiap Level menghasilkan produk nyata.</div>
      </div>
      <div className={styles.exitBox}>
        <div className={styles.exitLabel}>exit ticket</div>
        {EXIT_QS.slice(0,s+1).map((q,i)=><div key={i} className={`${styles.exitQ} ${i===s?styles.exitActive:''}`}><span className={styles.exitNum}>{i+1}</span><span className={styles.exitText}>{q}</span></div>)}
        {s<EXIT_QS.length-1&&<button className={styles.nextExit} onClick={next}>Pertanyaan berikutnya →</button>}
      </div>
    </div>
  </>)
}
