import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene4Contract.module.css'
export function Scene4Contract({ onUnlock }: DiscoverySceneProps) {
  const [decisions, setDecisions] = useState(['','',''])
  const [unlocked, setUnlocked] = useState(false)
  const filled = decisions.filter(d=>d.trim()).length
  const change = (i: number, v: string) => {
    setDecisions(a=>{const n=[...a];n[i]=v;return n})
    const newFilled = decisions.map((d,idx)=>idx===i?v:d).filter(d=>d.trim()).length
    if (newFilled===3 && !unlocked) { setUnlocked(true); onUnlock() }
  }
  return (
    <>
      <p className={styles.prompt}>Kontrak Digital: <em>3 keputusan keseimbangan yang KAMU pilih sendiri.</em> Bukan dari daftar tips guru.</p>
      <div className={styles.criteria}>
        <div className={styles.crTitle}>Syarat keputusan yang baik:</div>
        <div className={styles.crItem}>1. Spesifik & terukur — bukan "kurangi main HP" tapi "tidak buka HP setelah jam 21.00"</div>
        <div className={styles.crItem}>2. Realistis — bisa kamu jalankan minggu ini</div>
        <div className={styles.crItem}>3. Dipilih karena kamu mau — bukan karena disuruh</div>
      </div>
      <div className={styles.form}>
        {decisions.map((d,i)=>(
          <div key={i} className={styles.field}>
            <span className={styles.num}>{i+1}</span>
            <input className={styles.input} placeholder={`Keputusan ${i+1} (spesifik & terukur)`} value={d} onChange={e=>change(i, e.target.value)}/>
          </div>
        ))}
      </div>
      {filled===3&&<div className={styles.contract}>
        <div className={styles.cTitle}>KONTRAK DIGITAL</div>
        <div className={styles.cBody}>Saya berkomitmen mencoba 3 keputusan di atas selama 1 minggu — bukan karena diwajibkan, tapi karena saya memilihnya sendiri.</div>
        <div className={styles.cSign}>Tanda tangan: _______________  Tanggal: _______</div>
      </div>}
    </>
  )
}
