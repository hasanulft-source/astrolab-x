import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene3Slides.module.css'
const CASES = [
  {slide:'Slide berisi 8 baris teks penuh, font kecil, presenter membaca semuanya', good:false, why:'Slide bukan dokumen. Terlalu banyak teks = audiens membaca, tidak mendengarkan. Aturan: 1 ide besar per slide, maksimal 6 kata per poin.'},
  {slide:'Slide dengan 1 gambar besar + judul singkat "80% siswa suka sains"', good:true, why:'Tepat! Satu pesan jelas, visual mendukung, presenter yang menjelaskan detail. Audiens fokus mendengarkan.'},
  {slide:'Slide dengan 3 bullet singkat, masing-masing 4-5 kata', good:true, why:'Baik. Bullet ringkas jadi panduan, bukan naskah. Presenter mengembangkan tiap poin secara lisan.'},
  {slide:'Slide penuh warna-warni, 5 font berbeda, banyak animasi berputar', good:false, why:'Terlalu ramai mengalihkan perhatian dari pesan. Konsistensi visual (1-2 font, palet warna terbatas) justru lebih profesional.'},
]
export function Scene3Slides({ onUnlock }: DiscoverySceneProps) {
  const [step,setStep]=useState(0)
  const [picks,setPicks]=useState<Record<number,boolean|null>>({})
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
      <p className={styles.prompt}>Anatomi slide yang baik. <em>Nilai tiap slide: efektif atau tidak?</em> {step+1}/{CASES.length}</p>
      <div className={styles.slideBox}>{c.slide}</div>
      <div className={styles.opts}>
        {[[true,'✓ Slide efektif'],[false,'✗ Slide bermasalah']].map(([val,lbl])=>{
          const isSel=g===val;const isAns=r&&val===c.good;const isWr=r&&isSel&&!isAns
          return <button key={String(val)} disabled={g!==undefined&&g!==null} onClick={()=>setPicks(p=>({...p,[step]:val as boolean}))}
            className={`${styles.opt} ${isSel&&!r?styles.sel:''} ${isAns?styles.ok:''} ${isWr?styles.wr:''}`}>{lbl}</button>})}
      </div>
      {g!==undefined&&g!==null&&!r&&<button className={styles.revBtn} onClick={reveal}>Cek →</button>}
      {r&&<div className={styles.why}><b>{g===c.good?'✓ Tepat':'Perhatikan'}:</b> {c.why}{step<CASES.length-1&&<button className={styles.nextBtn} onClick={()=>setStep(s=>s+1)}>Berikutnya →</button>}</div>}
    </>
  )
}
