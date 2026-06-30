import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const KASUS = [
  { situasi:'Tabung gas LPG diisi dengan gas yang dimampatkan menjadi cair di dalamnya.', question:'Mengapa gas LPG bisa dimampatkan jadi bentuk cair dalam tabung?', opsi:[
    { teks:'Karena tekanan tinggi memaksa partikel gas saling mendekat.', correct:true },
    { teks:'Karena suhu tabung sangat dingin.', correct:false },
    { teks:'Karena gas LPG memang berbentuk cair sejak awal.', correct:false },
  ], insight:'Tekanan tinggi dalam tabung memaksa jarak antar-partikel gas mengecil drastis — mengubahnya menjadi fase cair yang lebih mampat.' },
  { situasi:'Ban sepeda yang dipompa terasa keras meski hanya diisi udara.', question:'Mengapa udara di dalam ban bisa menopang berat orang?', opsi:[
    { teks:'Udara yang dimampatkan dalam ruang tertutup memberikan tekanan balik yang kuat.', correct:true },
    { teks:'Karet ban yang membuatnya keras, bukan udaranya.', correct:false },
    { teks:'Udara berubah menjadi padat saat dipompa.', correct:false },
  ], insight:'Memompa udara memaksa partikel gas lebih rapat dalam ruang terbatas — partikel yang dipadatkan ini menghasilkan tekanan tinggi yang menopang beban.' },
]

export function Scene4Transfer({ onUnlock }: DiscoverySceneProps) {
  const [active, setActive] = useState(0)
  const [picks, setPicks]   = useState<Record<number, number>>({})
  const [shown, setShown]   = useState<Record<number, boolean>>({})

  const pick = (ci: number, oi: number) => {
    if (picks[ci] !== undefined) return
    const np = { ...picks, [ci]: oi }
    setPicks(np); setShown(s => ({...s, [ci]: true}))
    if (Object.keys(np).length === KASUS.length) onUnlock()
  }
  const c = KASUS[active]

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Terapkan konsep kemampatan zat di dunia nyata.</p>
      <div className={styles.caseNav}>
        {KASUS.map((_, i) => (
          <button key={i} className={`${styles.caseTab} ${active===i?styles.caseTabOn:''} ${picks[i]!==undefined?styles.caseTabDone:''}`} onClick={() => setActive(i)}>Kasus {i+1} {picks[i]!==undefined?'✓':''}</button>
        ))}
      </div>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>{c.situasi}</div>
        <div className={styles.caseQ}>{c.question}</div>
        <div className={styles.caseOpts}>
          {c.opsi.map((o, i) => {
            const isPicked = picks[active] === i
            const right = shown[active] && o.correct
            const wrong = shown[active] && isPicked && !o.correct
            return <button key={i} className={`${styles.caseOpt} ${isPicked?styles.casePicked:''} ${right?styles.caseRight:''} ${wrong?styles.caseWrong:''}`}
              onClick={() => pick(active, i)} disabled={picks[active]!==undefined}>{o.teks}</button>
          })}
        </div>
        {shown[active] && <div className={styles.insight}><span className={styles.insightIcon}>💡</span>{c.insight}</div>}
      </div>
      <div className={styles.caseProgress}>{Object.keys(picks).length} / {KASUS.length} kasus selesai</div>
    </div>
  )
}
