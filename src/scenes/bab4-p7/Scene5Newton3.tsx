import { useState } from 'react'
import styles from './Scene5Newton3.module.css'
const PAIRS=[
  {title:"Kaki mendorong lantai saat berjalan",aksi:{obj:"Kaki",arah:"ke bawah-belakang",val:200},reaksi:{obj:"Lantai",arah:"ke atas-depan",val:200},note:"Reaksi lantai ke kaki ke depan inilah yang membuat kamu maju!"},
  {title:"Roket menyemburkan gas",aksi:{obj:"Roket",arah:"semburkan gas ke bawah",val:5000},reaksi:{obj:"Gas",arah:"dorong roket ke atas",val:5000},note:"Tidak perlu udara — aksi-reaksi bekerja di vakum sekalipun."},
  {title:"Buku di atas meja",aksi:{obj:"Buku",arah:"tekan meja ke bawah (W = mg)",val:20},reaksi:{obj:"Meja",arah:"dorong buku ke atas (N)",val:20},note:"Ini BUKAN pasangan aksi-reaksi Newton III! W dan N adalah dua gaya berbeda. Pasangan aksi-reaksi Newton III ada di antara buku-bumi dan meja-buku."},
  {title:"Dua magnet saling tolak",aksi:{obj:"Magnet A",arah:"tolak B ke kanan",val:30},reaksi:{obj:"Magnet B",arah:"tolak A ke kiri",val:30},note:"Gaya elektromagnetik juga mengikuti Newton III. F aksi = F reaksi = 30 N."},
]
export function Scene5Newton3(){
  const [idx,setIdx]=useState(0)
  const [revealed,setRevealed]=useState(false)
  const p=PAIRS[idx]
  return (
    <>
      <p className={styles.prompt}>Newton III — aksi dan reaksi <em>selalu pada dua benda berbeda</em>, sama besar, berlawanan arah.</p>
      <div className={styles.main}>
        <div className={styles.picker}>
          {PAIRS.map((pair,i)=>(
            <button key={i} className={i===idx?styles.pickActive:styles.pick}
              onClick={()=>{setIdx(i);setRevealed(false)}}>{pair.title}</button>
          ))}
        </div>
        <div className={styles.detail}>
          <div className={styles.title}>{p.title}</div>
          <div className={styles.pairRow}>
            <div className={styles.forceBox} style={{background:"var(--teal-cream)",borderColor:"var(--teal-soft)"}}>
              <div className={styles.forceObj}>Aksi: {p.aksi.obj}</div>
              <div className={styles.forceDir}>{p.aksi.arah}</div>
              <div className={styles.forceVal}>{p.aksi.val} N</div>
            </div>
            <div className={styles.versus}>⟷</div>
            <div className={styles.forceBox} style={{background:"#fef3c7",borderColor:"#fcd34d"}}>
              <div className={styles.forceObj}>Reaksi: {p.reaksi.obj}</div>
              <div className={styles.forceDir}>{p.reaksi.arah}</div>
              <div className={styles.forceVal}>{p.reaksi.val} N</div>
            </div>
          </div>
          <div className={styles.equalRow}>
            <span className={styles.equal}>|F_aksi| = |F_reaksi| = {p.aksi.val} N</span>
          </div>
          <button className={styles.revealBtn} onClick={()=>setRevealed(true)}>Penjelasan →</button>
          {revealed&&<div className={styles.note}>{p.note}</div>}
        </div>
      </div>
    </>
  )
}
