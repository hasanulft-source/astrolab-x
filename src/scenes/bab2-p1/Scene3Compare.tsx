import { useState } from 'react'
import { ParticleViewer, type ParticleState } from '../../components/ParticleViewer'
import styles from './Scene3Compare.module.css'

const COLS:{state:ParticleState;label:string;sub:string}[]=[
  {state:'solid',label:'Padat',sub:'Es batu'},
  {state:'liquid',label:'Cair',sub:'Air'},
  {state:'gas',label:'Gas',sub:'Udara'},
]
const ROWS:{aspect:string;values:[string,string,string]}[]=[
  {aspect:'Jarak antar partikel',values:['Sangat rapat','Dekat, agak longgar','Sangat jauh']},
  {aspect:'Susunan',values:['Teratur','Acak rapat','Acak menyebar']},
  {aspect:'Gerakan',values:['Bergetar di tempat','Bergerak melewati','Bergerak sangat cepat']},
  {aspect:'Bentuk',values:['Tetap','Mengikuti wadah','Mengisi seluruh ruang']},
]

export function Scene3Compare() {
  const [rev,setRev]=useState<number[]>([])
  const toggle=(i:number)=>setRev(rs=>rs.includes(i)?rs.filter(r=>r!==i):[...rs,i])
  const all=()=>setRev(rev.length===ROWS.length?[]:ROWS.map((_,i)=>i))
  return (
    <div className={styles.layout}>
      <div className={styles.viewers}>
        {COLS.map(c=>(
          <div key={c.state} className={styles.col}>
            <div className={styles.colHead}><span className={styles.colLabel}>{c.label}</span><span className={styles.colSub}>{c.sub}</span></div>
            <div className={styles.viewerWrap}><ParticleViewer state={c.state} size="sm"/></div>
          </div>
        ))}
      </div>
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span className={styles.tableLabel}>perbandingan</span><div className={styles.tableLine}/>
          <span className={styles.tableCount}>{String(rev.length).padStart(2,'0')}/{String(ROWS.length).padStart(2,'0')}</span>
          <button className={styles.tableToggle} onClick={all}>{rev.length===ROWS.length?'Sembunyikan semua':'Tunjukkan semua'}</button>
        </div>
        <div className={styles.tableBody}>
          <div className={styles.tableHeader}><span className={styles.colName}>aspek</span><span>Padat</span><span>Cair</span><span>Gas</span></div>
          {ROWS.map((row,i)=>{
            const on=rev.includes(i)
            return(
              <div key={i} className={`${styles.row} ${on?styles.rowRevealed:''}`} onClick={()=>toggle(i)}>
                <span className={styles.rowAspect}>{row.aspect}</span>
                {row.values.map((v,j)=><span key={j} className={styles.rowValue}>{on?v:'—'}</span>)}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
