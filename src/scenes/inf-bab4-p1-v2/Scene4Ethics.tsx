import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene4Ethics.module.css'
const ETHICS = [
  {rumusan:'Sebelum posting, pikirkan: apakah aku rela ini dilihat orang tua, guru, dan calon atasan 10 tahun lagi?', nama:'Prinsip Permanensi', konsekuensi:'Jejak digital tidak bisa dihapus total'},
  {rumusan:'Jangan posting tentang orang lain tanpa izinnya, terutama yang memalukan', nama:'Persetujuan (Consent)', konsekuensi:'Melanggar privasi + bisa jadi perundungan'},
  {rumusan:'Cek kebenaran sebelum membagikan informasi', nama:'Verifikasi Sebelum Berbagi', konsekuensi:'Menyebar hoaks bisa kena UU ITE'},
  {rumusan:'Perlakukan orang di internet seperti kamu bertemu langsung', nama:'Empati Digital', konsekuensi:'Anonimitas bukan alasan untuk kasar'},
  {rumusan:'Ruang publik digital = ruang publik nyata. Ada aturan dan tanggung jawab', nama:'Kesadaran Ruang Publik', konsekuensi:'Yang publik bisa diakses & dinilai siapa saja'},
]
export function Scene4Ethics({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const spot = (i: number) => {
    setRevealed(p=>{
      const n = new Set([...p, i])
      if (n.size === ETHICS.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>Dari konsekuensi yang sudah kamu alami, <em>ini 5 etika ruang publik digital.</em> Klik untuk lihat nama resminya.</p>
      <div className={styles.list}>
        {ETHICS.map((e,i)=>{
          const r=revealed.has(i)
          return (
            <div key={i} className={styles.card} onClick={()=>spot(i)}>
              <div className={styles.rumusan}>"{e.rumusan}"</div>
              {r?<div className={styles.detail}>
                <span className={styles.nama}>{e.nama}</span>
                <span className={styles.konseq}>Jika dilanggar: {e.konsekuensi}</span>
              </div>:<div className={styles.hint}>Klik untuk nama resmi →</div>}
            </div>
          )
        })}
      </div>
    </>
  )
}
