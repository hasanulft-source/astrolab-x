import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const KASUS = [
  { situasi: 'Sepatu salju (snowshoe) punya alas sangat lebar', tujuan: 'memperkecil', ket: 'Alas lebar memperbesar luas permukaan → tekanan pada salju mengecil → tidak mudah amblas.' },
  { situasi: 'Pisau diasah tajam sebelum memotong', tujuan: 'memperbesar', ket: 'Ujung tajam memperkecil luas kontak → tekanan pada bahan yang dipotong membesar → mudah memotong.' },
  { situasi: 'Ban traktor dibuat sangat lebar', tujuan: 'memperkecil', ket: 'Luas kontak dengan tanah membesar → tekanan mengecil → traktor tidak terjebak di tanah lunak.' },
]

export function Scene3Terapan({ onUnlock }: DiscoverySceneProps) {
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
      <p className={styles.transferHead}>Desain benda sehari-hari sering sengaja memperbesar atau memperkecil tekanan. {step + 1}/{KASUS.length}</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>{k.situasi}</div>
        <div className={styles.caseOpts}>
          {['memperbesar', 'memperkecil'].map(o => {
            const isPicked = g === o; const isAns = r && o === k.tujuan; const isWr = r && isPicked && !isAns
            return <button key={o} className={`${styles.caseOpt} ${isPicked?styles.casePicked:''} ${isAns?styles.caseRight:''} ${isWr?styles.caseWrong:''}`}
              onClick={() => !r && setPicks(p => ({...p,[step]:o}))} disabled={r} style={{textTransform:'capitalize'}}>Tujuannya {o} tekanan</button>
          })}
        </div>
        {g && !r && <button className={styles.revealBtn} onClick={reveal}>Cek →</button>}
        {r && <div className={styles.insight}><span className={styles.insightIcon}>💡</span>{k.ket}{step < KASUS.length - 1 && <button className={styles.revealBtn} onClick={() => setStep(s => s + 1)} style={{marginTop:8,display:'block'}}>Kasus berikutnya →</button>}</div>}
      </div>
      <div className={styles.caseProgress}>{step + 1} / {KASUS.length}</div>
    </div>
  )
}
