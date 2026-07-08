import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene2Conditional.module.css'
const FS = [
  {nama:'IF', syntax:'=IF(C2>=75, "LULUS", "REMEDIAL")', pred:'Apa yang dikembalikan IF untuk nilai C2=80?',
   opts:['Angka 80','Teks "LULUS"','Teks "REMEDIAL"','TRUE'], ans:1,
   hasil:'"LULUS" — karena 80>=75 bernilai TRUE, IF mengembalikan argumen kedua. Kalau nilai <75, akan mengembalikan "REMEDIAL".'},
  {nama:'COUNTIF', syntax:'=COUNTIF(C2:C31, ">=75")', pred:'Apa yang dihitung COUNTIF ini?',
   opts:['Total semua nilai','Jumlah siswa yang nilainya ≥75','Nilai rata-rata di atas 75','Nilai tertinggi'], ans:1,
   hasil:'22 — menghitung BERAPA BANYAK sel yang memenuhi syarat ≥75. Ini menjawab "berapa siswa yang lulus?"'},
  {nama:'SUMIF', syntax:'=SUMIF(D2:D31, "Perempuan", C2:C31)', pred:'Apa yang dijumlahkan SUMIF ini?',
   opts:['Semua nilai','Jumlah siswa perempuan','Total nilai HANYA untuk siswa perempuan','Rata-rata nilai perempuan'], ans:2,
   hasil:'1.284 — SUMIF menjumlahkan nilai (kolom C) HANYA untuk baris yang kolom D-nya "Perempuan". Range syarat dan range jumlah berbeda.'},
  {nama:'COUNTIF ganda', syntax:'=COUNTIF(E2:E31, "Alpa")', pred:'Untuk apa formula ini berguna bagi wali kelas?',
   opts:['Menghitung total kehadiran','Menghitung berapa kali status "Alpa" muncul → deteksi siswa bermasalah','Mengurutkan kehadiran','Menghitung nilai rata-rata'], ans:1,
   hasil:'Menghitung frekuensi "Alpa" di kolom kehadiran. Kalau seorang siswa punya banyak Alpa, wali kelas bisa deteksi lebih awal. Data → tindakan.'},
]
export function Scene2Conditional({ onUnlock }: DiscoverySceneProps) {
  const [step,setStep]=useState(0)
  const [picks,setPicks]=useState<Record<number,number|null>>({})
  const [rev,setRev]=useState<Set<number>>(new Set())
  const f=FS[step];const g=picks[step];const r=rev.has(step)
  const reveal = () => {
    setRev(p=>{
      const n = new Set([...p, step])
      if (n.size === FS.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>Formula bersyarat — <em>prediksi hasil sebelum eksekusi.</em> {step+1}/{FS.length}</p>
      <div className={styles.fBox}><div className={styles.fNama}>{f.nama}</div><div className={styles.fSyn}>{f.syntax}</div></div>
      <div className={styles.predQ}>{f.pred}</div>
      <div className={styles.opts}>
        {f.opts.map((o,i)=>{const isSel=g===i;const isAns=r&&i===f.ans;const isWr=r&&isSel&&!isAns
          return <button key={i} disabled={g!==undefined&&g!==null} onClick={()=>setPicks(p=>({...p,[step]:i}))}
            className={`${styles.opt} ${isSel&&!r?styles.sel:''} ${isAns?styles.ok:''} ${isWr?styles.wr:''}`}>{o}</button>})}
      </div>
      {g!==undefined&&g!==null&&!r&&<button className={styles.revBtn} onClick={reveal}>Lihat hasil →</button>}
      {r&&<div className={styles.hasil}><b>Hasil:</b> {f.hasil}{step<FS.length-1&&<button className={styles.nextBtn} onClick={()=>setStep(s=>s+1)}>Berikutnya →</button>}</div>}
    </>
  )
}
