import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene3SortFilter.module.css'
const DATA = [
  {nama:'Alya', nilai:85, gender:'P', hadir:'Hadir'},
  {nama:'Budi', nilai:70, gender:'L', hadir:'Alpa'},
  {nama:'Citra', nilai:92, gender:'P', hadir:'Hadir'},
  {nama:'Dani', nilai:65, gender:'L', hadir:'Sakit'},
  {nama:'Eka', nilai:88, gender:'P', hadir:'Hadir'},
  {nama:'Fajar', nilai:73, gender:'L', hadir:'Hadir'},
]
export function Scene3SortFilter({ onUnlock }: DiscoverySceneProps) {
  const [sortBy, setSortBy] = useState<'none'|'nilai-desc'|'nilai-asc'|'nama'>('none')
  const [filterG, setFilterG] = useState<'all'|'P'|'L'>('all')
  const [filterHadir, setFilterHadir] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const trigger = () => { if (!unlocked) { setUnlocked(true); onUnlock() } }
  let rows = [...DATA]
  if (filterG!=='all') rows = rows.filter(r=>r.gender===filterG)
  if (filterHadir) rows = rows.filter(r=>r.hadir==='Hadir')
  if (sortBy==='nilai-desc') rows.sort((a,b)=>b.nilai-a.nilai)
  if (sortBy==='nilai-asc') rows.sort((a,b)=>a.nilai-b.nilai)
  if (sortBy==='nama') rows.sort((a,b)=>a.nama.localeCompare(b.nama))
  return (
    <>
      <p className={styles.prompt}>Data yang sama, disusun berbeda, <em>menceritakan hal berbeda.</em> Coba kombinasi sort dan filter.</p>
      <div className={styles.controls}>
        <div className={styles.ctrlGroup}>
          <span className={styles.ctrlLabel}>Sort:</span>
          {[['none','Asli'],['nilai-desc','Nilai ↓'],['nilai-asc','Nilai ↑'],['nama','Nama A-Z']].map(([k,l])=>(
            <button key={k} className={`${styles.chip} ${sortBy===k?styles.chipOn:''}`} onClick={()=>{setSortBy(k as any); trigger()}}>{l}</button>
          ))}
        </div>
        <div className={styles.ctrlGroup}>
          <span className={styles.ctrlLabel}>Filter:</span>
          {[['all','Semua'],['P','Perempuan'],['L','Laki-laki']].map(([k,l])=>(
            <button key={k} className={`${styles.chip} ${filterG===k?styles.chipOn:''}`} onClick={()=>{setFilterG(k as any); trigger()}}>{l}</button>
          ))}
          <button className={`${styles.chip} ${filterHadir?styles.chipOn:''}`} onClick={()=>{setFilterHadir(x=>!x); trigger()}}>Hadir saja</button>
        </div>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead><tr><th>Nama</th><th>Nilai</th><th>Gender</th><th>Kehadiran</th></tr></thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r.nama}><td>{r.nama}</td><td className={styles.tdNilai}>{r.nilai}</td><td>{r.gender==='P'?'Perempuan':'Laki-laki'}</td><td>{r.hadir}</td></tr>
            ))}
          </tbody>
        </table>
        <div className={styles.count}>{rows.length} dari {DATA.length} baris ditampilkan</div>
      </div>
      <div className={styles.insight}>Sort mengurutkan (tidak menghilangkan data). Filter menyembunyikan yang tidak sesuai (data tetap ada). Kombinasi keduanya = alat eksplorasi data paling cepat.</div>
    </>
  )
}
