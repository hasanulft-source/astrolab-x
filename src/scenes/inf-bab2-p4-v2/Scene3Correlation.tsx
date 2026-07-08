import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene3Correlation.module.css'
const CASES = [
  {klaim:'Data menunjukkan: siswa yang duduk di depan punya nilai lebih tinggi. Kesimpulan: "Duduk di depan membuat pintar."', jawab:'kausalitas-salah', why:'Ini korelasi, BUKAN kausalitas. Mungkin siswa yang sudah rajin memilih duduk di depan (faktor ketiga: motivasi). Duduk di depan tidak otomatis menyebabkan pintar.'},
  {klaim:'Data menunjukkan: makin banyak jam belajar, makin tinggi nilai (untuk sebagian besar siswa). Kesimpulan: "Belajar lebih banyak cenderung meningkatkan nilai."', jawab:'wajar', why:'Ini kesimpulan yang masuk akal karena ada mekanisme logis (belajar → paham → nilai naik). Tapi tetap gunakan "cenderung" bukan "pasti" — masih ada faktor lain.'},
  {klaim:'Data: bulan dengan penjualan es krim tinggi juga bulan dengan kasus tenggelam tinggi. Kesimpulan: "Es krim menyebabkan tenggelam."', jawab:'kausalitas-salah', why:'Klasik! Faktor ketiga: CUACA PANAS. Panas → beli es krim DAN panas → berenang → risiko tenggelam. Dua hal berkorelasi karena penyebab yang sama, bukan sebab-akibat langsung.'},
]
export function Scene3Correlation({ onUnlock }: DiscoverySceneProps) {
  const [step,setStep]=useState(0)
  const [picks,setPicks]=useState<Record<number,string|null>>({})
  const [rev,setRev]=useState<Set<number>>(new Set())
  const c=CASES[step];const g=picks[step];const r=rev.has(step)
  const reveal = () => {
    setRev(p=>{
      const n = new Set([...p, step])
      if (n.size === CASES.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>Korelasi ≠ Kausalitas. <em>Dua hal berhubungan belum tentu satu menyebabkan yang lain.</em> {step+1}/{CASES.length}</p>
      <div className={styles.klaimBox}>{c.klaim}</div>
      <div className={styles.opts}>
        {[['wajar','Kesimpulan wajar'],['kausalitas-salah','Salah — ini korelasi, bukan kausalitas']].map(([k,l])=>{
          const isSel=g===k;const isAns=r&&k===c.jawab;const isWr=r&&isSel&&!isAns
          return <button key={k} disabled={!!g} onClick={()=>setPicks(p=>({...p,[step]:k}))}
            className={`${styles.opt} ${isSel&&!r?styles.sel:''} ${isAns?styles.ok:''} ${isWr?styles.wr:''}`}>{l}</button>})}
      </div>
      {g&&!r&&<button className={styles.revBtn} onClick={reveal}>Cek →</button>}
      {r&&<div className={styles.why}><b>{g===c.jawab?'✓ Tepat':'Perhatikan'}:</b> {c.why}{step<CASES.length-1&&<button className={styles.nextBtn} onClick={()=>setStep(s=>s+1)}>Berikutnya →</button>}</div>}
    </>
  )
}
