import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene5Reveal.module.css'
const EXIT_QS=["Buat pertanyaan investigasi tentang topik bebas, lalu cari jawabannya menggunakan minimal 3 operator pencarian. Catat sumber yang kamu pakai + alasan kredibilitasnya.", "Tulis & kirim email nyata ke guru: proposal proyek + lampiran file. Pastikan ada subjek jelas, salam, isi ringkas, penutup, dan lampiran.", "Kamu menemukan 2 sumber yang saling bertentangan tentang 1 fakta. Bagaimana cara menentukan mana yang lebih bisa dipercaya? Sebutkan 3 kriteria."]
const ROWS:[string,string,string][]=[['L5','Riset Bertarget','Operator pencarian + evaluasi kredibilitas'],['L6','Email Profesional','Struktur email + kirim ke guru dengan lampiran'],['—','Prinsip','Cara bertanya menentukan kualitas jawaban']]
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
    <p className={styles.prompt}>L5–L6 selesai. <em>Peneliti yang baik tahu cara mencari DAN cara menilai yang ditemukan.</em></p>
    <div className={styles.main}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.ct}>Rangkuman</div>
          {ROWS.map(([l,t,d])=><div key={l} className={styles.row}><span className={styles.lv}>{l}</span><span><b>{t}</b> — {d}</span></div>)}
        </div>
        <div className={styles.fact}><b>Alur proyek:</b> File Word Profil Kelas dari Level 3 dikirim via email di Level 6 ini. Riset (L5) jadi bahan untuk proyek integrasi di L9.</div>
      </div>
      <div className={styles.exitBox}>
        <div className={styles.exitLabel}>exit ticket</div>
        {EXIT_QS.slice(0,s+1).map((q,i)=><div key={i} className={`${styles.exitQ} ${i===s?styles.exitActive:''}`}><span className={styles.exitNum}>{i+1}</span><span className={styles.exitText}>{q}</span></div>)}
        {s<EXIT_QS.length-1&&<button className={styles.nextExit} onClick={next}>Pertanyaan berikutnya →</button>}
      </div>
    </div>
  </>)
}
