import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene2Interface.module.css'
const ELEMENTS = [
  {id:'ribbon', nama:'Ribbon', fungsi:'Toolbar utama berisi semua perintah Excel, dikelompokkan per tab (Home, Insert, Formulas, dll)', cara:'Klik tab yang relevan → cari grup perintah → klik ikon'},
  {id:'formulabar', nama:'Formula Bar', fungsi:'Menampilkan isi asli sel yang dipilih — teks, angka, atau formula lengkap', cara:'Klik sel → lihat formula bar untuk melihat konten aktual vs tampilan'},
  {id:'namebox', nama:'Name Box', fungsi:'Menampilkan alamat sel aktif (misal: B4) atau nama range yang sudah diberi nama', cara:'Klik di sini → ketik alamat sel → Enter untuk navigasi cepat'},
  {id:'cell', nama:'Sel & Range', fungsi:'Sel = satu kotak (B4). Range = kumpulan sel (B2:B31). Semua formula bekerja pada sel atau range', cara:'Klik satu sel. Drag untuk pilih range. Ctrl+klik untuk sel tidak berurutan'},
  {id:'sheet', nama:'Sheet Tab', fungsi:'Satu file Excel bisa punya banyak lembar (sheet). Data yang berbeda sebaiknya di sheet berbeda', cara:'Klik nama sheet untuk pindah. Klik kanan untuk rename/tambah/hapus'},
  {id:'freeze', nama:'Freeze Panes', fungsi:'Mengunci baris/kolom agar tetap terlihat saat scroll ke bawah/kanan — penting untuk dataset besar', cara:'View → Freeze Panes → Freeze Top Row (kunci baris header)'},
]
export function Scene2Interface({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<string|null>(null)
  const [unlocked, setUnlocked] = useState(false)
  const e = ELEMENTS.find(x=>x.id===sel)
  const pick = (id: string) => { setSel(id); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>6 elemen antarmuka Excel yang paling sering dipakai.
        <em> Klik tiap elemen untuk fungsi dan cara pakainya.</em>
      </p>
      <div className={styles.main}>
        <div className={styles.list}>
          {ELEMENTS.map(el=>(
            <button key={el.id} className={`${styles.elBtn} ${sel===el.id?styles.elSel:''}`} onClick={()=>pick(el.id)}>
              <div className={styles.elNama}>{el.nama}</div>
            </button>
          ))}
        </div>
        <div className={styles.detail}>
          {!e&&<div className={styles.placeholder}>← Klik elemen untuk detail</div>}
          {e&&<>
            <div className={styles.dNama}>{e.nama}</div>
            <div className={styles.dRow}><b>Fungsi:</b> {e.fungsi}</div>
            <div className={styles.dRow}><b>Cara pakai:</b> {e.cara}</div>
          </>}
          <div className={styles.challenge}>
            <div className={styles.chTitle}>10 Navigation Challenge</div>
            {['Sel mana yang berisi nilai tertinggi?','Berapa banyak kolom di dataset?','Di sheet mana data kehadiran disimpan?','Apa isi formula bar saat klik sel C2?','Bagaimana cara ke sel A1 paling cepat?'].map((q,i)=>(
              <div key={i} className={styles.chQ}><span className={styles.chNum}>{i+1}</span>{q}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
