import { useState } from 'react'
import styles from './ui.module.css'
const HX = 120, HY = 122, L = 90
export function Scene2Pantul() {
  const [deg, setDeg] = useState(40)
  const rad = (deg * Math.PI) / 180
  const ix = HX - L * Math.sin(rad), iy = HY - L * Math.cos(rad)
  const rx = HX + L * Math.sin(rad), ry = HY - L * Math.cos(rad)
  return (
    <>
      <p className={styles.prompt}>Geser <em>sudut datang</em> - amati sudut pantulnya selalu sama besar.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 240 150" className={styles.raySvg}>
            <rect x="20" y="122" width="200" height="8" fill="#b9a9e6" />
            <line x1="20" y1="130" x2="220" y2="130" stroke="#8a99a6" strokeWidth="1" />
            <line x1={HX} y1="122" x2={HX} y2="26" stroke="#9aa6b2" strokeWidth="1.5" strokeDasharray="5 4" />
            <line x1={ix} y1={iy} x2={HX} y2={HY} stroke="#c0492f" strokeWidth="2.5" markerEnd="url(#ar)" />
            <line x1={HX} y1={HY} x2={rx} y2={ry} stroke="#2a7d52" strokeWidth="2.5" markerEnd="url(#ag)" />
            <defs>
              <marker id="ar" markerWidth="9" markerHeight="9" refX="6" refY="4" orient="auto"><path d="M0 1l6 3-6 3z" fill="#c0492f" /></marker>
              <marker id="ag" markerWidth="9" markerHeight="9" refX="6" refY="4" orient="auto"><path d="M0 1l6 3-6 3z" fill="#2a7d52" /></marker>
            </defs>
            <text x={HX - 30} y="40" fontSize="11" fill="#c0492f" fontWeight="700">datang</text>
            <text x={HX + 8} y="40" fontSize="11" fill="#2a7d52" fontWeight="700">pantul</text>
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.readout}><div className={styles.roItem}><span>Sudut datang</span><b>{deg}°</b></div><div className={styles.roItem}><span>Sudut pantul</span><b>{deg}°</b></div></div>
          <div className={styles.sliderRow}><label>Sudut datang</label><input type="range" min={10} max={80} value={deg} onChange={e => setDeg(+e.target.value)} /><span className={styles.val}>{deg}°</span></div>
          <div className={styles.note}>Hukum pemantulan: <b>sudut datang = sudut pantul</b>, diukur dari garis normal (garis putus-putus).</div>
        </div>
      </div>
    </>
  )
}
