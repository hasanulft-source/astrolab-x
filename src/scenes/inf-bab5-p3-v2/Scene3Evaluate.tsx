import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene3Evaluate.module.css'
const SOURCES = [
  {nama:'Artikel di bmkg.go.id tentang data gempa', kredibel:true, why:'Situs pemerintah resmi (.go.id), sumber primer data gempa, ada tanggal & penulis institusi. Sangat kredibel.'},
  {nama:'Postingan blog anonim "faktagempa123.blogspot"', kredibel:false, why:'Penulis anonim, platform blog gratis, tidak ada sumber referensi, nama sensasional. Rendah kredibilitas.'},
  {nama:'Artikel jurnal ilmiah dari universitas dengan daftar pustaka', kredibel:true, why:'Ditulis peneliti, melalui review, ada referensi & metodologi jelas. Sangat kredibel untuk data ilmiah.'},
  {nama:'Pesan berantai WhatsApp "info gempa dari BMKG" tanpa link', kredibel:false, why:'Tidak ada sumber asli yang bisa dicek, format pesan berantai, klaim mengatasnamakan lembaga. Verifikasi ke situs resmi dulu.'},
]
export function Scene3Evaluate({ onUnlock }: DiscoverySceneProps) {
  const [step,setStep]=useState(0)
  const [picks,setPicks]=useState<Record<number,boolean|null>>({})
  const [rev,setRev]=useState<Set<number>>(new Set())
  const s=SOURCES[step];const g=picks[step];const r=rev.has(step)
  const reveal = () => {
    setRev(p=>{
      const n = new Set([...p, step])
      if (n.size === SOURCES.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>Tidak semua sumber sama. <em>Nilai kredibilitas tiap sumber.</em> {step+1}/{SOURCES.length}</p>
      <div className={styles.srcBox}>{s.nama}</div>
      <div className={styles.opts}>
        {[[true,'✓ Kredibel'],[false,'✗ Ragukan']].map(([val,lbl])=>{
          const isSel=g===val;const isAns=r&&val===s.kredibel;const isWr=r&&isSel&&!isAns
          return <button key={String(val)} disabled={g!==undefined&&g!==null} onClick={()=>setPicks(p=>({...p,[step]:val as boolean}))}
            className={`${styles.opt} ${isSel&&!r?styles.sel:''} ${isAns?styles.ok:''} ${isWr?styles.wr:''}`}>{lbl}</button>})}
      </div>
      {g!==undefined&&g!==null&&!r&&<button className={styles.revBtn} onClick={reveal}>Cek →</button>}
      {r&&<div className={styles.why}><b>{g===s.kredibel?'✓ Tepat':'Perhatikan'}:</b> {s.why}{step<SOURCES.length-1&&<button className={styles.nextBtn} onClick={()=>setStep(x=>x+1)}>Berikutnya →</button>}</div>}
    </>
  )
}
