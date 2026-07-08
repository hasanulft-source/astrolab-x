import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const SOAL = [
  { campuran: 'Air teh manis', jawab: 'Homogen' },
  { campuran: 'Air kopi dengan ampas', jawab: 'Heterogen' },
  { campuran: 'Udara yang kita hirup', jawab: 'Homogen' },
  { campuran: 'Salad buah', jawab: 'Heterogen' },
  { campuran: 'Sirup encer', jawab: 'Homogen' },
]

export function Scene3Klasifikasi({ onUnlock }: DiscoverySceneProps) {
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
      <p className={styles.transferHead}>Campuran ini homogen atau heterogen?</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit} style={{fontSize:19,fontWeight:700}}>{q.campuran}</div>
        <div className={styles.caseOpts}>
          {['Homogen', 'Heterogen'].map(o => {
            const isPicked = pick === o
            const right = done && o === q.jawab
            const wrong = done && isPicked && o !== q.jawab
            return <button key={o} className={`${styles.caseOpt} ${isPicked?styles.casePicked:''} ${right?styles.caseRight:''} ${wrong?styles.caseWrong:''}`}
              onClick={() => { if (!done) setPick(o) }} disabled={done}>{o}</button>
          })}
        </div>
        {done && <button className={styles.revealBtn} onClick={next} style={{marginTop:8}}>{idx < SOAL.length - 1 ? 'Berikutnya →' : 'Selesai →'}</button>}
      </div>
      <div className={styles.caseProgress}>{idx + 1} / {SOAL.length}</div>
    </div>
  )
}
