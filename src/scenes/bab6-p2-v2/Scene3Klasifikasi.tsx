import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const SOAL = [
  { hub:'Ikan badut & anemon laut', jawab:'Mutualisme', ket:'Anemon melindungi ikan, ikan membersihkan dan melindungi anemon.' },
  { hub:'Benalu & pohon inangnya', jawab:'Parasitisme', ket:'Benalu menyerap nutrisi dari pohon, merugikan pohon inang.' },
  { hub:'Burung kuntul & kerbau', jawab:'Mutualisme', ket:'Kuntul makan parasit di kulit kerbau, kerbau bebas dari parasit.' },
  { hub:'Tanaman anggrek di batang pohon besar', jawab:'Komensalisme', ket:'Anggrek mendapat tempat tinggi untuk cahaya, pohon tidak dirugikan.' },
]

export function Scene3Klasifikasi({ onUnlock }: DiscoverySceneProps) {
  const [idx, setIdx]   = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const done = pick !== null
  const q = SOAL[idx]

  const next = () => {
    if (idx === SOAL.length - 1) onUnlock()
    else { setIdx(i => i + 1); setPick(null) }
  }

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Klasifikasikan jenis simbiosisnya.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit} style={{fontSize:18,fontWeight:700}}>{q.hub}</div>
        <div className={styles.caseOpts}>
          {['Mutualisme','Komensalisme','Parasitisme'].map(o => {
            const isPicked = pick === o
            const right = done && o === q.jawab
            const wrong = done && isPicked && o !== q.jawab
            return <button key={o} className={`${styles.caseOpt} ${isPicked?styles.casePicked:''} ${right?styles.caseRight:''} ${wrong?styles.caseWrong:''}`}
              onClick={() => { if (!done) setPick(o) }} disabled={done}>{o}</button>
          })}
        </div>
        {done && <div className={styles.insight}><span className={styles.insightIcon}>💡</span>{q.ket}</div>}
        {done && <button className={styles.revealBtn} onClick={next} style={{marginTop:8}}>{idx < SOAL.length - 1 ? 'Berikutnya →' : 'Selesai →'}</button>}
      </div>
      <div className={styles.caseProgress}>{idx + 1} / {SOAL.length}</div>
    </div>
  )
}
