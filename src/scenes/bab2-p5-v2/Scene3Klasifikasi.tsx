import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const SOAL = [
  { peristiwa:'Garam dilarutkan dalam air', jawab:'fisika', ket:'Garam masih garam, hanya tersebar — bisa dipisahkan lagi dengan penguapan.' },
  { peristiwa:'Besi berkarat',              jawab:'kimia',  ket:'Besi bereaksi dengan oksigen membentuk zat baru (karat/oksida besi) yang tidak bisa dikembalikan.' },
  { peristiwa:'Kertas disobek',             jawab:'fisika', ket:'Bentuknya berubah, tapi tetap zat yang sama (kertas), tidak ada zat baru.' },
  { peristiwa:'Lilin yang dibakar',         jawab:'kimia',  ket:'Lilin bereaksi dengan oksigen menghasilkan zat baru (CO₂, H₂O, dan jelaga).' },
  { peristiwa:'Es yang dipecah jadi serpihan', jawab:'fisika', ket:'Tetap H₂O padat, hanya ukurannya berubah.' },
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
      <p className={styles.transferHead}>Klasifikasikan: fisika atau kimia?</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit} style={{fontSize:19, fontWeight:700}}>{q.peristiwa}</div>
        <div className={styles.caseOpts}>
          {['fisika','kimia'].map(k => {
            const isPicked = pick === k
            const right = done && k === q.jawab
            const wrong = done && isPicked && k !== q.jawab
            return <button key={k} className={`${styles.caseOpt} ${isPicked?styles.casePicked:''} ${right?styles.caseRight:''} ${wrong?styles.caseWrong:''}`}
              onClick={() => { if (!done) setPick(k) }} disabled={done} style={{textTransform:'capitalize'}}>Perubahan {k}</button>
          })}
        </div>
        {done && <div className={styles.insight}><span className={styles.insightIcon}>💡</span>{q.ket}</div>}
        {done && <button className={styles.revealBtn} onClick={next} style={{marginTop:8}}>{idx < SOAL.length - 1 ? 'Berikutnya →' : 'Selesai →'}</button>}
      </div>
      <div className={styles.caseProgress}>{idx + 1} / {SOAL.length}</div>
    </div>
  )
}
