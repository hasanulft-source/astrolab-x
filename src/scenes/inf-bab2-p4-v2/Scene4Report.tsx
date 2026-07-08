import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene4Report.module.css'
const SHEETS = [
  {nama:'Sheet 1 — Data Mentah', isi:'Dataset asli yang sudah dibersihkan. Semua baris dan kolom, terformat rapi dan konsisten. Ini fondasi — semua sheet lain merujuk ke sini.', tip:'Jangan pernah hapus data mentah. Analisis dibuat di sheet terpisah.'},
  {nama:'Sheet 2 — Perhitungan', isi:'Semua formula: SUM, AVERAGE, COUNTIF, SUMIF. Statistik ringkasan: rata-rata, tertinggi, terendah, jumlah per kategori.', tip:'Beri label jelas tiap hasil formula. Orang lain harus paham tanpa bertanya.'},
  {nama:'Sheet 3 — Visualisasi', isi:'3 chart yang menjawab 3 pertanyaan berbeda. Tiap chart punya judul dan keterangan singkat tentang apa yang ditunjukkan.', tip:'Chart yang tepat untuk tiap pertanyaan. Bar untuk banding, line untuk tren, pie untuk proporsi.'},
  {nama:'Sheet 4 — Kesimpulan', isi:'Laporan naratif: temuan deskriptif, analitis, dan prediktif. Rekomendasi berbasis data. Ditulis untuk dibaca guru/kepsek.', tip:'Gunakan 3 lapisan kesimpulan. Bedakan fakta dari asumsi. Akui ketidakpastian.'},
]
export function Scene4Report({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const pick = (i: number) => { setSel(i); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>Produk akhir Bab 2: <em>satu file Excel 4-sheet — dari data mentah sampai kesimpulan.</em></p>
      <div className={styles.main}>
        <div className={styles.tabs}>
          {SHEETS.map((s,i)=>(
            <button key={i} className={`${styles.tab} ${sel===i?styles.tabOn:''}`} onClick={()=>pick(i)}>{s.nama}</button>
          ))}
        </div>
        <div className={styles.detail}>
          <div className={styles.dNama}>{SHEETS[sel].nama}</div>
          <div className={styles.dIsi}>{SHEETS[sel].isi}</div>
          <div className={styles.dTip}><b>Tip:</b> {SHEETS[sel].tip}</div>
        </div>
      </div>
      <div className={styles.flow}>Data Mentah → Perhitungan → Visualisasi → Kesimpulan. Ini alur kerja data analyst di dunia nyata — file yang bisa dibawa pulang dan dipakai, bukan tugas untuk dinilai lalu dilupakan.</div>
    </>
  )
}
