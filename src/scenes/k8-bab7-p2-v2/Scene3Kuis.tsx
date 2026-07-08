import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const SOAL = [
  { deskripsi: 'Lapisan paling subur, tempat akar tanaman tumbuh paling banyak', jawab: 'A' },
  { deskripsi: 'Batuan induk yang belum lapuk sama sekali', jawab: 'R' },
  { deskripsi: 'Serasah daun yang baru gugur, belum terurai sempurna', jawab: 'O' },
  { deskripsi: 'Tempat mineral dari atas mengendap, teksturnya lebih padat', jawab: 'B' },
]

export function Scene3Kuis({ onUnlock }: DiscoverySceneProps) {
  const [idx, setIdx] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const done = pick !== null
  const q = SOAL[idx]

  const next = () => {
    if (idx === SOAL.length - 1) onUnlock()
    else { setIdx(i => i + 1); setPick(null) }
  }

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Deskripsi ini termasuk horizon apa?</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>{q.deskripsi}</div>
        <div className={styles.caseOpts}>
          {['O', 'A', 'B', 'C', 'R'].map(o => {
            const isPicked = pick === o
            const right = done && o === q.jawab
            const wrong = done && isPicked && o !== q.jawab
            return <button key={o} className={`${styles.caseOpt} ${isPicked?styles.casePicked:''} ${right?styles.caseRight:''} ${wrong?styles.caseWrong:''}`}
              onClick={() => { if (!done) setPick(o) }} disabled={done}>Horizon {o}</button>
          })}
        </div>
        {done && <button className={styles.revealBtn} onClick={next} style={{marginTop:8}}>{idx < SOAL.length - 1 ? 'Berikutnya →' : 'Selesai →'}</button>}
      </div>
      <div className={styles.caseProgress}>{idx + 1} / {SOAL.length}</div>
    </div>
  )
}
