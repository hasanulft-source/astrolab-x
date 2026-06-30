import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './discovery.module.css'

const MATS = [
  { id:'air',   name:'Air (dispenser)',  c:4200, emoji:'💧' },
  { id:'pasir', name:'Pasir pantai',     c:840,  emoji:'🏖' },
  { id:'besi',  name:'Wajan besi',       c:450,  emoji:'⚙' },
]

export function Scene4Rumus({ onUnlock }: DiscoverySceneProps) {
  const [m, setM]       = useState(2)
  const [matId, setMat] = useState('air')
  const [dT, setDT]     = useState(50)
  const [used, setUsed] = useState(false)
  const mat = MATS.find(x => x.id === matId)!
  const Q   = m * mat.c * dT
  const touch = () => { if (!used) { setUsed(true); onUnlock() } }

  return (
    <div className={styles.rumusPanel}>
      <div className={styles.rumusLeft}>
        <p className={styles.rumusIntro}>
          Kamu sudah menemukan polanya. Sekarang kita punya <em>bahasa matematika</em> untuk menjelaskannya.
        </p>
        <div className={styles.formulaBox}>
          <span className={styles.formulaText}>Q = m · c · ΔT</span>
          <div className={styles.formulaLegend}>
            <span><strong>Q</strong> = kalor (Joule)</span>
            <span><strong>m</strong> = massa (kg)</span>
            <span><strong>c</strong> = kalor jenis (J/kg°C)</span>
            <span><strong>ΔT</strong> = kenaikan suhu (°C)</span>
          </div>
        </div>
        <p className={styles.contextQ}>
          Berapa energi untuk memanaskan air di dispenser kelasmu dari 28°C ke 78°C?
        </p>
      </div>

      <div className={styles.rumusRight}>
        <div className={styles.ctrl}>
          <span className={styles.ctrlLabel}>Material</span>
          <div className={styles.matChips}>
            {MATS.map(x => (
              <button key={x.id} className={`${styles.matChip} ${matId === x.id ? styles.matChipOn : ''}`}
                onClick={() => { setMat(x.id); touch() }}>
                {x.emoji} {x.name}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.ctrl}>
          <span className={styles.ctrlLabel}>Massa: <strong>{m.toFixed(1)} kg</strong></span>
          <input type="range" min={0.5} max={10} step={0.5} value={m} className={styles.slider}
            onChange={e => { setM(+e.target.value); touch() }} />
        </div>
        <div className={styles.ctrl}>
          <span className={styles.ctrlLabel}>ΔT: <strong>{dT}°C</strong></span>
          <input type="range" min={1} max={100} value={dT} className={styles.slider}
            onChange={e => { setDT(+e.target.value); touch() }} />
        </div>
        <div className={styles.resultBox}>
          <div className={styles.resultLabel}>Q =</div>
          <div className={styles.resultVal}>{Q.toLocaleString('id-ID')} J</div>
          <div className={styles.resultSub}>{(Q / 1000).toFixed(2)} kJ</div>
        </div>
        <div className={styles.resultNote}>{m.toFixed(1)} kg × {mat.c.toLocaleString()} × {dT}°C</div>
      </div>
    </div>
  )
}
