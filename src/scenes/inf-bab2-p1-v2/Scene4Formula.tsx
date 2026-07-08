import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene4Formula.module.css'
const FS = [
  {nama:'SUM', syntax:'=SUM(C2:C31)', pred:'Apa yang dikembalikan SUM dari kolom nilai?',
   opts:['Nilai terbesar','Total semua nilai yang ada','Rata-rata','Jumlah baris'], ans:1,
   hasil:'2.436 — total seluruh nilai 30 siswa. Berguna untuk menghitung total poin.'},
  {nama:'AVERAGE', syntax:'=AVERAGE(C2:C31)', pred:'Apa yang dilakukan AVERAGE dengan sel kosong?',
   opts:['Dihitung sebagai 0','Diabaikan — hanya rata-rata sel berisi angka','Menghasilkan error','Diganti median'], ans:1,
   hasil:'81,2 — AVERAGE mengabaikan sel kosong, bukan menghitungnya sebagai 0. Ini penting saat ada missing value.'},
  {nama:'COUNT vs COUNTA', syntax:'=COUNT(C2:C31) vs =COUNTA(B2:B31)', pred:'Apa perbedaan COUNT dan COUNTA?',
   opts:['Tidak ada bedanya','COUNT hanya hitung angka; COUNTA hitung semua sel tidak kosong termasuk teks','COUNTA lebih cepat','COUNT lebih akurat'], ans:1,
   hasil:'COUNT(nilai)=28 · COUNTA(nama)=30 → ada 2 nilai kosong yang tidak terdeteksi oleh AVERAGE.'},
  {nama:'MAX & MIN', syntax:'=MAX(C2:C31) dan =MIN(C2:C31)', pred:'Untuk apa MAX dan MIN berguna di laporan rapor?',
   opts:['Hanya dekorasi','Tentukan batas remedial (di bawah MIN threshold) dan pengayaan (di atas MAX threshold)','Mengurutkan nilai','Menghitung median'], ans:1,
   hasil:'MAX:97 · MIN:62 → rentang 35 poin. Siswa di bawah 70 masuk remedial. Informasi ini langsung bisa dipakai guru.'},
]
export function Scene4Formula({ onUnlock }: DiscoverySceneProps) {
  const [step,setStep]=useState(0)
  const [picks,setPicks]=useState<Record<number,number|null>>({})
  const [revealed,setRevealed]=useState<Set<number>>(new Set())
  const f=FS[step];const g=picks[step];const r=revealed.has(step)
  const reveal = () => {
    setRevealed(p=>{
      const n = new Set([...p, step])
      if (n.size === FS.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>5 formula dasar — <em>prediksi hasilnya dulu sebelum dieksekusi.</em> {step+1}/{FS.length}</p>
      <div className={styles.fBox}>
        <div className={styles.fNama}>{f.nama}</div>
        <div className={styles.fSyn}>{f.syntax}</div>
      </div>
      <div className={styles.predQ}>{f.pred}</div>
      <div className={styles.opts}>
        {f.opts.map((o,i)=>{
          const isSel=g===i;const isAns=r&&i===f.ans;const isWr=r&&isSel&&!isAns
          return <button key={i} disabled={g!==undefined&&g!==null}
            onClick={()=>setPicks(p=>({...p,[step]:i}))}
            className={`${styles.opt} ${isSel&&!r?styles.sel:''} ${isAns?styles.ok:''} ${isWr?styles.wr:''}`}>{o}</button>
        })}
      </div>
      {g!==undefined&&g!==null&&!r&&<button className={styles.revBtn} onClick={reveal}>Lihat hasil →</button>}
      {r&&<div className={styles.hasil}><b>Hasil aktual:</b> {f.hasil}
        {step<FS.length-1&&<button className={styles.nextBtn} onClick={()=>setStep(s=>s+1)}>Formula berikutnya →</button>}
      </div>}
    </>
  )
}
