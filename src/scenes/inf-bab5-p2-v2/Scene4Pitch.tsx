import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene4Pitch.module.css'
const STRUCTURE = [
  {slide:'Slide 1 — Hook', isi:'Buka dengan pertanyaan/fakta menarik yang bikin audiens penasaran', durasi:'~30 detik'},
  {slide:'Slide 2 — Masalah', isi:'Apa masalah/kebutuhan yang mau kamu jawab?', durasi:'~30 detik'},
  {slide:'Slide 3 — Solusi/Ide', isi:'Ide utamamu — inti presentasi', durasi:'~60 detik'},
  {slide:'Slide 4 — Bukti/Contoh', isi:'Data, contoh, atau demonstrasi yang mendukung', durasi:'~40 detik'},
  {slide:'Slide 5 — Penutup & Ajakan', isi:'Rangkuman + apa yang kamu ingin audiens lakukan/ingat', durasi:'~20 detik'},
]
export function Scene4Pitch({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set([0]))
  const total = revealed.size
  const open = (i: number) => {
    setRevealed(p=>{
      const n = new Set([...p, i])
      if (n.size === STRUCTURE.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>Struktur pitch 5 slide, 3 menit. <em>Setiap slide punya peran. Klik untuk buka satu per satu.</em></p>
      <div className={styles.slides}>
        {STRUCTURE.map((s,i)=>{
          const r=revealed.has(i)
          return (
            <div key={i} className={`${styles.slide} ${r?styles.slideShown:''}`}>
              <div className={styles.slideNum}>{i+1}</div>
              <div className={styles.slideBody}>
                <div className={styles.slideTitle}>{s.slide}</div>
                {r?<><div className={styles.slideIsi}>{s.isi}</div><div className={styles.slideDur}>{s.durasi}</div></>
                  :<button className={styles.openBtn} onClick={()=>open(i)}>Buka →</button>}
              </div>
            </div>
          )
        })}
      </div>
      {total===STRUCTURE.length&&<div className={styles.done}>
        <b>Total ~3 menit.</b> Struktur ini bukan aturan kaku — tapi kerangka yang teruji. Hook di awal & ajakan di akhir adalah yang paling sering dilupakan pemula. File PPT pitch-mu akan dipresentasikan di Level 4 dan jadi bagian proyek akhir.
      </div>}
    </>
  )
}
