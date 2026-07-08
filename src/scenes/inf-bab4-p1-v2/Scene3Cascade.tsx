import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene3Cascade.module.css'
const STAGES = [
  {t:'Kamu posting', d:'Sebuah komentar kasar tentang teman di grup publik', level:0},
  {t:'Menyebar', d:'5 orang screenshot dalam 2 menit', level:1},
  {t:'Viral lokal', d:'Screenshot beredar ke seluruh angkatan sekolah', level:2},
  {t:'Konsekuensi sosial', d:'Teman yang dihina merasa terluka, orang lain menilai karaktermu', level:3},
  {t:'Konsekuensi formal', d:'Guru/orang tua mengetahui. Bisa masuk catatan konseling', level:3},
  {t:'Jejak permanen', d:'Bertahun kemudian, screenshot masih bisa muncul saat orang mencari namamu', level:4},
]
export function Scene3Cascade({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(1)
  const more = () => {
    setRevealed(r=>{
      const n = r+1
      if (n >= STAGES.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>Satu postingan memicu efek berantai. <em>Klik untuk melihat cascading effect tahap demi tahap.</em></p>
      <div className={styles.cascade}>
        {STAGES.slice(0,revealed).map((s,i)=>(
          <div key={i} className={styles.stage} style={{marginLeft:`${s.level*24}px`}}>
            <div className={styles.stageDot} style={{background:['#088395','#f59e0b','#f97316','#ef4444','#dc2626'][s.level]}}/>
            <div className={styles.stageBody}>
              <div className={styles.stageT}>{s.t}</div>
              <div className={styles.stageD}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>
      {revealed<STAGES.length&&<button className={styles.moreBtn} onClick={more}>Tahap berikutnya ↓</button>}
      {revealed>=STAGES.length&&<div className={styles.insight}>
        <b>Cascading effect:</b> konsekuensi digital tidak linier — satu tindakan kecil bisa memicu rantai efek yang membesar dan tidak bisa dikendalikan. Semakin awal kamu berpikir, semakin besar kontrolmu. Setelah posting, kontrol itu hilang.
      </div>}
    </>
  )
}
