import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene4Combine.module.css'
const CASES = [
  {q:'Wali kelas ingin tahu: berapa siswa PEREMPUAN yang nilainya di atas 80?', tools:['Filter gender=P, lalu COUNTIF nilai>80','SUM semua nilai','AVERAGE kolom nilai','Sort nama A-Z'], ans:0, why:'Butuh 2 kondisi sekaligus: gender DAN nilai. Filter dulu perempuan, lalu COUNTIF pada hasil. Atau langsung pakai COUNTIFS (dua kriteria).'},
  {q:'Kepsek minta: total nilai semua siswa yang HADIR (tidak termasuk yang alpa/sakit).', tools:['COUNTIF status=Hadir','SUMIF(status,"Hadir",nilai)','AVERAGE semua','MAX nilai'], ans:1, why:'SUMIF menjumlahkan nilai HANYA untuk baris berstatus "Hadir". Ini persis fungsi SUMIF: jumlah dengan syarat.'},
  {q:'Guru BK ingin daftar siswa yang perlu perhatian: nilai di bawah 70 DAN alpa lebih dari 2 kali.', tools:['SUM biasa','Sort nilai saja','Filter nilai<70, lalu cek kolom alpa dengan COUNTIF per siswa','MAX dan MIN'], ans:2, why:'Kombinasi filter (nilai<70) dengan analisis frekuensi alpa. Data → identifikasi siswa berisiko → tindakan preventif. Ini analisis nyata.'},
]
export function Scene4Combine({ onUnlock }: DiscoverySceneProps) {
  const [step,setStep]=useState(0)
  const [picks,setPicks]=useState<Record<number,number|null>>({})
  const [rev,setRev]=useState<Set<number>>(new Set())
  const c=CASES[step];const g=picks[step];const r=rev.has(step)
  const reveal = () => {
    setRev(p=>{
      const n = new Set([...p, step])
      if (n.size === CASES.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>Pilih alat yang tepat untuk pertanyaan nyata. <em>{step+1}/{CASES.length}</em></p>
      <div className={styles.qBox}>{c.q}</div>
      <div className={styles.opts}>
        {c.tools.map((t,i)=>{const isSel=g===i;const isAns=r&&i===c.ans;const isWr=r&&isSel&&!isAns
          return <button key={i} disabled={g!==undefined&&g!==null} onClick={()=>setPicks(p=>({...p,[step]:i}))}
            className={`${styles.opt} ${isSel&&!r?styles.sel:''} ${isAns?styles.ok:''} ${isWr?styles.wr:''}`}>{t}</button>})}
      </div>
      {g!==undefined&&g!==null&&!r&&<button className={styles.revBtn} onClick={reveal}>Cek →</button>}
      {r&&<div className={styles.why}><b>{g===c.ans?'✓ Tepat':'Penjelasan'}:</b> {c.why}{step<CASES.length-1&&<button className={styles.nextBtn} onClick={()=>setStep(s=>s+1)}>Kasus berikutnya →</button>}</div>}
    </>
  )
}
