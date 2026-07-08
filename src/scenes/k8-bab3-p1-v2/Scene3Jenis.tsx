import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const KASUS = [
  { situasi: 'Kamu mendorong kereta belanja ke depan, kereta bergerak searah dorongan', jenis: 'positif', ket: 'Gaya searah dengan perpindahan → usaha positif, energi bertambah pada benda.' },
  { situasi: 'Kamu mengerem sepeda — gaya rem berlawanan arah dengan gerak sepeda', jenis: 'negatif', ket: 'Gaya berlawanan arah dengan perpindahan → usaha negatif, energi berkurang dari benda.' },
  { situasi: 'Kamu mendorong tembok sekuat tenaga, tembok tidak bergerak sama sekali', jenis: 'nol', ket: 'Tidak ada perpindahan → usaha nol, berapa pun besar gayanya.' },
]

export function Scene3Jenis({ onUnlock }: DiscoverySceneProps) {
  const [step, setStep] = useState(0)
  const [picks, setPicks] = useState<Record<number, string>>({})
  const [rev, setRev] = useState<Set<number>>(new Set())
  const k = KASUS[step]; const g = picks[step]; const r = rev.has(step)

  const reveal = () => {
    setRev(p => {
      const n = new Set([...p, step])
      if (n.size === KASUS.length) onUnlock()
      return n
    })
  }

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Usaha bisa positif, negatif, atau nol — tergantung arah gaya terhadap perpindahan. {step + 1}/{KASUS.length}</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>{k.situasi}</div>
        <div className={styles.caseOpts}>
          {['positif', 'negatif', 'nol'].map(o => {
            const isPicked = g === o; const isAns = r && o === k.jenis; const isWr = r && isPicked && !isAns
            return <button key={o} className={`${styles.caseOpt} ${isPicked?styles.casePicked:''} ${isAns?styles.caseRight:''} ${isWr?styles.caseWrong:''}`}
              onClick={() => !r && setPicks(p => ({...p,[step]:o}))} disabled={r} style={{textTransform:'capitalize'}}>Usaha {o}</button>
          })}
        </div>
        {g && !r && <button className={styles.revealBtn} onClick={reveal}>Cek →</button>}
        {r && <div className={styles.insight}><span className={styles.insightIcon}>💡</span>{k.ket}{step < KASUS.length - 1 && <button className={styles.revealBtn} onClick={() => setStep(s => s + 1)} style={{marginTop:8,display:'block'}}>Kasus berikutnya →</button>}</div>}
      </div>
      <div className={styles.caseProgress}>{step + 1} / {KASUS.length}</div>
    </div>
  )
}
