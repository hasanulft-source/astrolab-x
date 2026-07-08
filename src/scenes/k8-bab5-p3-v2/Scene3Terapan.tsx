import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const SOAL = [
  { peristiwa: 'Kolam renang terlihat lebih dangkal dari kedalaman sebenarnya', jawab: 'Pembiasan' },
  { peristiwa: 'Kamu bisa melihat wajahmu di permukaan cermin', jawab: 'Pemantulan' },
  { peristiwa: 'Pensil yang dicelupkan miring ke air terlihat bengkok', jawab: 'Pembiasan' },
  { peristiwa: 'Sinar matahari terpantul dari permukaan danau tenang', jawab: 'Pemantulan' },
]

export function Scene3Terapan({ onUnlock }: DiscoverySceneProps) {
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
      <p className={styles.transferHead}>Peristiwa ini termasuk pemantulan atau pembiasan?</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit} style={{fontSize:17,fontWeight:700}}>{q.peristiwa}</div>
        <div className={styles.caseOpts}>
          {['Pemantulan', 'Pembiasan'].map(o => {
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
