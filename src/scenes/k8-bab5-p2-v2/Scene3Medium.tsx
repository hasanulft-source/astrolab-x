import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const KASUS = [
  { medium: 'Ruang hampa (vakum)', bisa: false, ket: 'Tidak ada partikel sama sekali untuk bergetar — bunyi tidak bisa merambat.' },
  { medium: 'Udara', bisa: true, ket: 'Partikel udara bisa digetarkan — inilah medium yang biasa kita gunakan sehari-hari.' },
  { medium: 'Air', bisa: true, ket: 'Bunyi merambat lebih cepat di air dibanding udara — partikelnya lebih rapat.' },
  { medium: 'Besi/logam padat', bisa: true, ket: 'Bunyi merambat paling cepat di zat padat — partikelnya paling rapat dan mudah meneruskan getaran.' },
]

export function Scene3Medium({ onUnlock }: DiscoverySceneProps) {
  const [step, setStep] = useState(0)
  const [picks, setPicks] = useState<Record<number, boolean>>({})
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
      <p className={styles.transferHead}>Bisakah bunyi merambat lewat medium ini? {step + 1}/{KASUS.length}</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit} style={{fontSize:19,fontWeight:700}}>{k.medium}</div>
        <div className={styles.caseOpts}>
          {[true, false].map(v => {
            const isPicked = g === v; const isAns = r && v === k.bisa; const isWr = r && isPicked && !isAns
            return <button key={String(v)} className={`${styles.caseOpt} ${isPicked?styles.casePicked:''} ${isAns?styles.caseRight:''} ${isWr?styles.caseWrong:''}`}
              onClick={() => !r && setPicks(p => ({...p,[step]:v}))} disabled={r}>{v ? 'Bisa merambat' : 'Tidak bisa merambat'}</button>
          })}
        </div>
        {g !== undefined && !r && <button className={styles.revealBtn} onClick={reveal}>Cek →</button>}
        {r && <div className={styles.insight}><span className={styles.insightIcon}>💡</span>{k.ket}{step < KASUS.length - 1 && <button className={styles.revealBtn} onClick={() => setStep(s => s + 1)} style={{marginTop:8,display:'block'}}>Kasus berikutnya →</button>}</div>}
      </div>
      <div className={styles.caseProgress}>{step + 1} / {KASUS.length}</div>
    </div>
  )
}
