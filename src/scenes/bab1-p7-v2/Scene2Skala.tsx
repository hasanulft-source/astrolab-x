import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const SOAL = [
  { skala:[0,1,2,3,4,5], marker:2.4, jawab:'2,4', clue:'Tunjuk posisi antara angka 2 dan 3.' },
  { skala:[0,2,4,6,8,10], marker:7.0, jawab:'7,0', clue:'Setiap kotak = 2 satuan. Posisi ini tepat di antara 6 dan 8.' },
  { skala:[0,10,20,30,40,50], marker:35, jawab:'35', clue:'Setiap kotak = 10 satuan. Ini tepat di tengah antara 30 dan 40.' },
]

export function Scene2Skala({ onUnlock }: DiscoverySceneProps) {
  const [idx, setIdx]   = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = SOAL[idx]
  const done = pick !== null
  const max = q.skala[q.skala.length - 1]
  const pct = q.marker / max

  const OPSI = [
    String(q.marker - 0.5),
    q.jawab,
    String(q.marker + 0.5),
    String(q.marker + 1),
  ].sort(() => Math.random() - 0.5).slice(0, 3).concat([q.jawab])
    .filter((v, i, a) => a.indexOf(v) === i).slice(0, 4)
    .sort(() => Math.random() - 0.5)

  const next = () => {
    if (idx === SOAL.length - 1) onUnlock()
    else { setIdx(i => i + 1); setPick(null) }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Baca skala ini. Berapa nilai yang ditunjuk penanda merah?</p>
        <div className={local.scaleViz}>
          <div className={local.scaleBar}>
            {q.skala.map((v, i) => (
              <div key={i} className={local.scaleTick}>
                <div className={local.tickLine} />
                <div className={local.tickVal}>{v}</div>
              </div>
            ))}
          </div>
          <div className={local.scaleMarker} style={{ left: `${pct * 100}%` }}>
            <div className={local.markerLine} />
            <div className={local.markerDot} />
          </div>
        </div>
        <div className={styles.sliderHint}>{q.clue}</div>
        <div className={local.scaleOpts}>
          {OPSI.map((o, i) => {
            const isPicked = pick === o
            const right = done && o === q.jawab
            const wrong = done && isPicked && o !== q.jawab
            return (
              <button key={i}
                className={`${local.scaleOpt} ${isPicked ? local.scaleOptPicked : ''} ${right ? local.scaleOptRight : ''} ${wrong ? local.scaleOptWrong : ''}`}
                onClick={() => { if (!done) setPick(o) }}
                disabled={done}>{o}</button>
            )
          })}
        </div>
        {done && <button className={styles.revealBtn} onClick={next} style={{marginTop:8}}>
          {idx < SOAL.length - 1 ? 'Berikutnya →' : 'Lanjut →'}
        </button>}
      </div>
      <div className={local.skalaInfo}>
        <div className={local.siTitle}>Tips membaca skala:</div>
        <div className={local.siItem}><span>1</span> Posisikan mata <strong>sejajar</strong> dengan skala (hindari parallax)</div>
        <div className={local.siItem}><span>2</span> Tentukan nilai <strong>per kotak</strong> skala terkecil</div>
        <div className={local.siItem}><span>3</span> Untuk cairan: baca dari bagian bawah <strong>meniskus</strong></div>
        <div className={local.siItem}><span>4</span> Tulis hingga satu desimal di bawah skala terkecil</div>
      </div>
    </div>
  )
}
