import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const KASUS = [
  { nama:'Virus Influenza', fakta:'Tidak bisa bereproduksi sendiri — hanya bisa menggandakan diri di dalam sel inang.', jawab:'Diperdebatkan',
    insight:'Virus tidak memenuhi SEMUA ciri di luar sel inang (tidak bernapas, tidak nutrisi sendiri). Inilah mengapa status virus sebagai "hidup" masih diperdebatkan ilmuwan hingga sekarang.' },
  { nama:'Kristal Garam', fakta:'Bisa "tumbuh" membesar dalam larutan jenuh, tapi tidak bernapas atau bereproduksi.', jawab:'Bukan makhluk hidup',
    insight:'Kristal hanya memenuhi SATU ciri (tumbuh) — itu tidak cukup. Makhluk hidup harus memenuhi serangkaian ciri sekaligus, bukan satu saja.' },
  { nama:'Jamur Ragi (Yeast)', fakta:'Bersel tunggal, bernapas, bereproduksi dengan membelah diri, merespon gula sebagai makanan.', jawab:'Makhluk hidup',
    insight:'Meski sangat kecil dan sederhana, ragi memenuhi semua ciri utama makhluk hidup — nutrisi, napas, tumbuh, dan reproduksi.' },
]

export function Scene3UjiKasus({ onUnlock }: DiscoverySceneProps) {
  const [idx, setIdx]     = useState(0)
  const [pick, setPick]   = useState<string | null>(null)
  const done = pick !== null
  const k = KASUS[idx]

  const next = () => {
    if (idx === KASUS.length - 1) onUnlock()
    else { setIdx(i => i + 1); setPick(null) }
  }

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Uji kasus nyata: hidup, bukan, atau diperdebatkan?</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit} style={{fontSize:19,fontWeight:700}}>{k.nama}</div>
        <div className={styles.caseQ}>{k.fakta}</div>
        <div className={styles.caseOpts}>
          {['Makhluk hidup','Bukan makhluk hidup','Diperdebatkan'].map(o => {
            const isPicked = pick === o
            const right = done && o === k.jawab
            const wrong = done && isPicked && o !== k.jawab
            return <button key={o} className={`${styles.caseOpt} ${isPicked?styles.casePicked:''} ${right?styles.caseRight:''} ${wrong?styles.caseWrong:''}`}
              onClick={() => { if (!done) setPick(o) }} disabled={done}>{o}</button>
          })}
        </div>
        {done && <div className={styles.insight}><span className={styles.insightIcon}>💡</span>{k.insight}</div>}
        {done && <button className={styles.revealBtn} onClick={next} style={{marginTop:8}}>{idx < KASUS.length - 1 ? 'Kasus berikutnya →' : 'Selesai →'}</button>}
      </div>
      <div className={styles.caseProgress}>{idx + 1} / {KASUS.length}</div>
    </div>
  )
}
