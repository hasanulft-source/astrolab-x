import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const KEGIATAN = [
  {id:'a',text:'Apel pagi bersama seluruh staf',durasi:20,bisa_paralel:false},
  {id:'b',text:'Koreksi ulangan kelas VII-3',durasi:30,bisa_paralel:true},
  {id:'c',text:'Rapat koordinasi kurikulum',durasi:45,bisa_paralel:false},
  {id:'d',text:'Persiapan bahan ajar minggu depan',durasi:30,bisa_paralel:true},
  {id:'e',text:'Konsultasi siswa (jadwal bebas)',durasi:20,bisa_paralel:true},
  {id:'f',text:'Update rapor digital',durasi:25,bisa_paralel:true},
  {id:'g',text:'Piket guru (tidak bisa ditinggal)',durasi:60,bisa_paralel:false},
  {id:'h',text:'Makan siang',durasi:30,bisa_paralel:false},
]
type ScheduledItem = { id:string; slot:number }
export function ScenePuzzle({ onUnlock }: DiscoverySceneProps) {
  const [schedule, setSchedule] = useState<ScheduledItem[]>([])
  const [score, setScore] = useState<number|null>(null)
  const [attempt, setAttempt] = useState(0)
  const placed = schedule.map(s => s.id)
  const unplaced = KEGIATAN.filter(k => !placed.includes(k.id))
  const addToSchedule = (id: string) => {
    const slot = (schedule.length > 0 ? Math.max(...schedule.map(s=>s.slot)) : 0) + 1
    setSchedule(s => [...s, {id, slot}])
  }
  const calcScore = () => {
    const paralel = schedule.filter(s => KEGIATAN.find(k=>k.id===s.id)?.bisa_paralel)
    const total_time = schedule.reduce((acc,s) => {
      const k = KEGIATAN.find(k=>k.id===s.id)!
      return k.bisa_paralel ? acc : acc + k.durasi
    }, 0) + Math.max(...paralel.map(s => KEGIATAN.find(k=>k.id===s.id)!.durasi), 0)
    const min_possible = 155
    const s = Math.max(0, Math.round(100 - (total_time - min_possible) / 2))
    setScore(s)
    setAttempt(a => a+1)
    onUnlock()
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>SCENE 02  -  PUZZLE PENJADWALAN</div>
      <p className={styles.prompt}>Susun 8 kegiatan ini menjadi jadwal paling efisien. <em>4 kegiatan bisa dikerjakan bersamaan.</em></p>
      <div className={styles.main} style={{gridTemplateColumns:'1.2fr 1fr'}}>
        <div style={{display:'flex',flexDirection:'column',gap:8,overflow:'auto'}}>
          <div className={styles.panelTitle} style={{color:'#088395'}}>Daftar Kegiatan (klik untuk tambah ke jadwal)</div>
          {unplaced.map(k => (
            <button key={k.id} onClick={()=>addToSchedule(k.id)}
              style={{padding:'10px 14px',borderRadius:8,border:'2px solid '+(k.bisa_paralel?'#088395':'#e2e6ea'),
                background:k.bisa_paralel?'#eef7f7':'#f7f8fa',cursor:'pointer',textAlign:'left',transition:'all .15s',
                fontFamily:'Plus Jakarta Sans',fontSize:14,color:'#09637e'}}>
              <span style={{fontWeight:600}}>{k.text}</span>
              <span style={{fontSize:12,color:'#6b7280',marginLeft:8}}>({k.durasi} mnt){k.bisa_paralel&&' - bisa paralel'}</span>
            </button>
          ))}
          {unplaced.length===0&&<div style={{color:'#16a34a',fontWeight:600,fontSize:14}}>Semua kegiatan sudah dijadwalkan!</div>}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:8,overflow:'auto'}}>
          <div className={styles.panelTitle} style={{color:'#09637e'}}>Jadwalmu</div>
          {schedule.map((s,i) => {
            const k = KEGIATAN.find(k2=>k2.id===s.id)!
            return (
              <div key={s.id} style={{display:'flex',gap:8,alignItems:'center',padding:'8px 12px',
                background:k.bisa_paralel?'#eef7f7':'#f7f8fa',borderRadius:8,
                border:'1px solid '+(k.bisa_paralel?'#7ab2b2':'#e2e6ea')}}>
                <span style={{fontFamily:'DM Mono',fontSize:12,color:'#088395',minWidth:20}}>{i+1}.</span>
                <span style={{fontSize:13,flex:1,color:'#09637e'}}>{k.text}</span>
                <span style={{fontSize:11,color:'#9ca3af'}}>{k.durasi}m</span>
              </div>
            )
          })}
          {schedule.length>0&&(
            <div className={styles.btnRow} style={{marginTop:4}}>
              <button className={styles.btn+' '+styles.btnViolet} onClick={calcScore} style={{fontSize:14,padding:'8px 16px'}}>Hitung skor</button>
              <button className={styles.btn+' '+styles.btnOutline} onClick={()=>{setSchedule([]);setScore(null)}} style={{fontSize:14,padding:'8px 16px'}}>Reset</button>
            </div>
          )}
          {score!==null&&(
            <div className={styles.scoreDisplay}>
              <div className={styles.scoreBig}>{score}</div>
              <div>
                <div className={styles.scoreLabel}>Percobaan ke-{attempt}</div>
                <div style={{fontSize:13,color:'#0a525c'}}>{score>=85?'Strategi sangat efisien!':score>=70?'Lumayan — bisa lebih baik.':'Coba reorganisir kegiatan paralel.'}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
