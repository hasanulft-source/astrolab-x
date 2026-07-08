import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const SKENARIOS = [
  {id:1,desc:'Hari Senin, semua 8 siswa hadir',expected:'Program menampilkan nama siswa ke-1 (urutan pertama)',warn:false},
  {id:2,desc:'Hari Selasa, siswa ke-3 tidak hadir',expected:'Program melewati siswa ke-3, menampilkan siswa ke-4',warn:true},
  {id:3,desc:'Hari Rabu, sudah putaran kedua (siswa ke-9 = siswa ke-1 lagi)',expected:'Program kembali ke awal daftar setelah melewati semua 8 siswa',warn:false},
]
export function SceneTest({ onUnlock }: DiscoverySceneProps) {
  const [results, setResults] = useState<Record<number,{actual:string,pass:boolean}>>({})
  const allTested = Object.keys(results).length === SKENARIOS.length
  const setResult = (id: number, val: {actual:string,pass:boolean}) => {
    setResults(r => {
      const n = {...r, [id]: val}
      if (Object.keys(n).length === SKENARIOS.length) onUnlock()
      return n
    })
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>SCENE 03  -  TEST PROGRAM  -  PENUTUPAN LEVEL 4</div>
      <p className={styles.prompt}>Test program dengan 3 skenario. <em>Catat hasil aktual</em> dan bandingkan dengan yang diharapkan.</p>
      <div className={styles.hint}>Jalankan program Scratch dengan setiap skenario, lalu isi hasilnya di bawah.</div>
      <div style={{flex:1,display:'flex',flexDirection:'column',gap:10,overflow:'auto'}}>
        {SKENARIOS.map(s => (
          <div key={s.id} style={{border:'2px solid '+(results[s.id]?.pass?'#16a34a':results[s.id]?'#dc2626':'#e2e6ea'),borderRadius:10,padding:'14px 16px',background:results[s.id]?.pass?'#f0fdf4':results[s.id]?'#fef2f2':'#fff'}}>
            {s.warn&&<div style={{fontSize:11,color:'#b45309',fontFamily:'DM Mono',fontWeight:700,marginBottom:6}}>EDGE CASE - PERLU PERHATIAN</div>}
            <div style={{fontWeight:600,color:'#09637e',fontSize:15,marginBottom:4}}>Skenario {s.id}: {s.desc}</div>
            <div style={{fontSize:13,color:'#6b7280',marginBottom:8}}>Yang diharapkan: {s.expected}</div>
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <input style={{flex:1,padding:'8px 12px',borderRadius:6,border:'1.5px solid #e2e6ea',fontFamily:'Plus Jakarta Sans',fontSize:14}}
                placeholder="Hasil aktual program Scratch..."
                onBlur={e=>{if(e.target.value.trim())setResult(s.id,{actual:e.target.value,pass:true})}}/>
              {results[s.id]&&<>
                <button onClick={()=>setResult(s.id,{...results[s.id],pass:true})} style={{background:'#f0fdf4',border:'2px solid #16a34a',borderRadius:7,padding:'6px 12px',cursor:'pointer',fontSize:13,fontWeight:600,color:'#16a34a'}}>Lulus</button>
                <button onClick={()=>setResult(s.id,{...results[s.id],pass:false})} style={{background:'#fef2f2',border:'2px solid #dc2626',borderRadius:7,padding:'6px 12px',cursor:'pointer',fontSize:13,fontWeight:600,color:'#dc2626'}}>Gagal</button>
              </>}
            </div>
          </div>
        ))}
      </div>
      {allTested&&(
        <div className={styles.statusFooter}>
          <div className={styles.statusLevel}>TESTING SELESAI - {Object.values(results).filter(r=>r.pass).length}/3 LULUS</div>
          <div className={styles.statusText}>
            {Object.values(results).every(r=>r.pass)?'Program lulus semua skenario! Siap untuk Level 5: Tantangan Akhir.':'Ada yang gagal — debug pseudocode atau kode Scratch yang bermasalah, lalu test ulang.'}
          </div>
        </div>
      )}
    </div>
  )
}
