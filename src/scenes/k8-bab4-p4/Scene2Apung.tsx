import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Apung() {
  const [rho, setRho] = useState(700)
  let status: string, color: string, topY: number
  if (rho < 995) { status = 'Terapung'; color = '#2a7d52'; topY = 44 - (1 - rho / 1000) * 32 }
  else if (rho <= 1005) { status = 'Melayang'; color = '#b9781a'; topY = 92 }
  else { status = 'Tenggelam'; color = '#c0492f'; topY = 140 }
  return (
    <>
      <p className={styles.prompt}>Geser massa jenis benda. Air = 1000 kg/m³. Lihat benda <em>{status.toLowerCase()}.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 200 180" className={styles.tankSvg}>
            <rect x="20" y="44" width="160" height="128" rx="4" fill="#dcefff" stroke="#9cc8e0" strokeWidth="2" />
            <line x1="20" y1="44" x2="180" y2="44" stroke="#7fb0d6" strokeWidth="2.5" />
            <rect x="74" y={topY} width="52" height="32" rx="3" fill={color} opacity="0.92" />
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.verdict} style={{ background: color }}>{status}</div>
          <div className={styles.sliderRow}><label>Massa jenis benda</label><input type="range" min={500} max={1500} step={10} value={rho} onChange={e => setRho(+e.target.value)} /><span className={styles.val}>{rho}</span></div>
          <div className={styles.note}>{rho < 995 ? 'ρ benda < ρ air → gaya apung menang, benda terapung.' : rho <= 1005 ? 'ρ benda = ρ air → melayang, gaya apung = berat benda.' : 'ρ benda > ρ air → berat menang, benda tenggelam.'}</div>
        </div>
      </div>
    </>
  )
}
