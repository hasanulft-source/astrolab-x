import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene2Layers.module.css'
const LAYERS = [
  {level:'1. Deskriptif', warna:'#0ea5e9', tanya:'APA yang terjadi?', contoh:'"Rata-rata nilai IPA kelas VII-3 adalah 78,4. Nilai tertinggi 97, terendah 62."', ciri:'Hanya melaporkan fakta dari data. Tidak ada interpretasi.'},
  {level:'2. Analitis', warna:'#088395', tanya:'MENGAPA / apa polanya?', contoh:'"Siswa dengan kehadiran di bawah 80% cenderung punya nilai di bawah rata-rata. Ada kaitan antara kehadiran dan nilai."', ciri:'Menemukan pola, hubungan antar variabel. Masih berbasis data.'},
  {level:'3. Prediktif', warna:'#09637e', tanya:'APA yang mungkin terjadi?', contoh:'"Jika pola ini berlanjut, siswa dengan kehadiran rendah berisiko tidak lulus KKM semester depan. Perlu intervensi dini."', ciri:'Proyeksi berdasarkan pola + rekomendasi tindakan. Level tertinggi.'},
]
export function Scene2Layers({ onUnlock }: DiscoverySceneProps) {
  const [active, setActive] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const pick = (i: number) => { setActive(i); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>Kesimpulan data punya 3 lapisan kedalaman. <em>Dari sekadar melapor sampai memprediksi.</em></p>
      <div className={styles.ladder}>
        {LAYERS.map((l,i)=>(
          <button key={i} className={`${styles.rung} ${active===i?styles.active:''}`} style={active===i?{borderColor:l.warna,background:l.warna+'12'}:{}} onClick={()=>pick(i)}>
            <div className={styles.rungLevel} style={{color:active===i?l.warna:undefined}}>{l.level}</div>
            <div className={styles.rungTanya}>{l.tanya}</div>
          </button>
        ))}
      </div>
      <div className={styles.detail} style={{borderColor:LAYERS[active].warna}}>
        <div className={styles.dContoh}>{LAYERS[active].contoh}</div>
        <div className={styles.dCiri}>{LAYERS[active].ciri}</div>
      </div>
      <div className={styles.note}>Laporan data analyst yang baik mengandung ketiga lapisan — bukan hanya deskriptif. Kekuatan analisis ada di lapisan analitis dan prediktif.</div>
    </>
  )
}
