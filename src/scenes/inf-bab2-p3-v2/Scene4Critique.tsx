import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene4Critique.module.css'
const CASES = [
  {problem:'Pie chart dengan 12 kategori, warna mirip, sulit dibedakan', issue:'Terlalu banyak kategori', fix:'Pie chart efektif maksimal 5-6 kategori. Untuk 12 kategori, pakai bar chart horizontal yang bisa diurutkan.'},
  {problem:'Bar chart sumbu Y mulai dari 90 (bukan 0), perbedaan 2 poin terlihat seperti 2x lipat', issue:'Sumbu Y dipotong (truncated axis)', fix:'Sumbu Y bar chart HARUS mulai dari 0 agar tinggi batang proporsional dengan nilai. Memotong sumbu = menyesatkan.'},
  {problem:'Line chart menghubungkan data yang tidak berurutan waktu (nama siswa acak)', issue:'Line untuk data non-sekuensial', fix:'Line chart menyiratkan hubungan berurutan. Untuk kategori terpisah (nama siswa), gunakan bar chart.'},
  {problem:'3D pie chart dengan efek perspektif, bagian depan terlihat lebih besar', issue:'Efek 3D mendistorsi proporsi', fix:'Efek 3D membuat bagian depan tampak lebih besar dari nilai sebenarnya. Selalu gunakan chart 2D flat untuk akurasi.'},
]
export function Scene4Critique({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const spot = (i: number) => {
    setRevealed(p=>{
      const n = new Set([...p, i])
      if (n.size === CASES.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>Chart yang salah bisa menyesatkan — sengaja atau tidak. <em>Temukan masalah di tiap chart.</em></p>
      <div className={styles.list}>
        {CASES.map((c,i)=>{
          const r=revealed.has(i)
          return (
            <div key={i} className={styles.card}>
              <div className={styles.problem}><span className={styles.warn}>⚠</span> {c.problem}</div>
              {!r&&<button className={styles.spotBtn} onClick={()=>spot(i)}>Apa yang salah? →</button>}
              {r&&<div className={styles.detail}>
                <div className={styles.issue}>Masalah: {c.issue}</div>
                <div className={styles.fix}>✓ {c.fix}</div>
              </div>}
            </div>
          )
        })}
      </div>
    </>
  )
}
