import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene2ChartMatch.module.css'
const CASES = [
  {q:'Membandingkan nilai rata-rata antar 5 kelas', chart:'Bar Chart', opts:['Bar Chart','Line Chart','Pie Chart'], why:'Bar chart ideal untuk MEMBANDINGKAN kategori terpisah (kelas berbeda). Tinggi batang langsung terlihat perbedaannya.'},
  {q:'Menunjukkan perubahan nilai rata-rata dari bulan ke bulan', chart:'Line Chart', opts:['Bar Chart','Line Chart','Pie Chart'], why:'Line chart ideal untuk TREN sepanjang waktu. Garis menunjukkan arah perubahan (naik/turun) dengan jelas.'},
  {q:'Menunjukkan proporsi siswa per kategori kehadiran (Hadir/Sakit/Izin/Alpa)', chart:'Pie Chart', opts:['Bar Chart','Line Chart','Pie Chart'], why:'Pie chart ideal untuk PROPORSI dari keseluruhan (100%). Terlihat bagian mana yang dominan. Tapi hanya efektif jika kategori sedikit (≤5).'},
  {q:'Menunjukkan sebaran/distribusi nilai seluruh siswa', chart:'Histogram', opts:['Pie Chart','Histogram','Line Chart'], why:'Histogram ideal untuk DISTRIBUSI — berapa siswa di rentang 60-69, 70-79, dst. Menunjukkan bentuk sebaran (normal, miring, dll).'},
]
export function Scene2ChartMatch({ onUnlock }: DiscoverySceneProps) {
  const [step,setStep]=useState(0)
  const [picks,setPicks]=useState<Record<number,string|null>>({})
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
      <p className={styles.prompt}>Setiap pertanyaan butuh chart yang tepat. <em>Chart bukan selera — tapi fungsi.</em> {step+1}/{CASES.length}</p>
      <div className={styles.qBox}>Pertanyaan: <b>{c.q}</b></div>
      <div className={styles.opts}>
        {c.opts.map(o=>{const isSel=g===o;const isAns=r&&o===c.chart;const isWr=r&&isSel&&!isAns
          return <button key={o} disabled={!!g} onClick={()=>setPicks(p=>({...p,[step]:o}))}
            className={`${styles.opt} ${isSel&&!r?styles.sel:''} ${isAns?styles.ok:''} ${isWr?styles.wr:''}`}>{o}</button>})}
      </div>
      {g&&!r&&<button className={styles.revBtn} onClick={reveal}>Cek →</button>}
      {r&&<div className={styles.why}><b>{g===c.chart?'✓ Tepat':'Yang benar: '+c.chart}</b> — {c.why}{step<CASES.length-1&&<button className={styles.nextBtn} onClick={()=>setStep(s=>s+1)}>Berikutnya →</button>}</div>}
    </>
  )
}
