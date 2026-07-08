import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene2Audit.module.css'
export function Scene2Audit({ onUnlock }: DiscoverySceneProps) {
  const [total, setTotal] = useState('')
  const [apps, setApps] = useState(['','',''])
  const [unlocked, setUnlocked] = useState(false)
  const t = parseFloat(total)||0
  const showAnalysis = t>0
  const change = (v: string) => { setTotal(v); if (parseFloat(v)>0 && !unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>Buka <b>Settings → Screen Time</b> (iOS) atau <b>Digital Wellbeing</b> (Android). <em>Isi data pribadimu — jujur, tidak dibandingkan dengan siapapun.</em></p>
      <div className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label}>Total screen time hari ini (jam)</label>
          <input type="number" step="0.5" className={styles.input} placeholder="contoh: 6.5" value={total} onChange={e=>change(e.target.value)}/>
        </div>
        <div className={styles.apps}>
          {['Aplikasi #1 (terlama)','Aplikasi #2','Aplikasi #3'].map((lbl,i)=>(
            <div key={i} className={styles.field}>
              <label className={styles.label}>{lbl}</label>
              <input className={styles.inputText} placeholder="nama app" value={apps[i]} onChange={e=>setApps(a=>{const n=[...a];n[i]=e.target.value;return n})}/>
            </div>
          ))}
        </div>
      </div>
      {showAnalysis&&<div className={styles.analysis}>
        <div className={styles.aRow}>Per minggu: <b>{(t*7).toFixed(1)} jam</b></div>
        <div className={styles.aRow}>Per tahun: <b>{Math.round(t*365/24)} hari penuh</b></div>
        <div className={styles.aQuestion}>Pertanyaan jujur untuk dirimu:</div>
        <div className={styles.aQ}>• Apakah jumlah ini sesuai dengan yang kamu inginkan?</div>
        <div className={styles.aQ}>• Aplikasi #1 — apakah itu untuk hal yang kamu anggap penting?</div>
        <div className={styles.aQ}>• Kalau screen time-mu berkurang 1 jam/hari, waktu itu untuk apa?</div>
      </div>}
    </>
  )
}
