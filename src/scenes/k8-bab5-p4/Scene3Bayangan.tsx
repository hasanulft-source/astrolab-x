import { useState } from 'react'
import styles from './ui.module.css'
const f = 40, LX = 120, AX = 86
export function Scene3Bayangan() {
  const [so, setSo] = useState(100)
  const near = Math.abs(so - f) < 4
  const si = near ? Infinity : (f * so) / (so - f)
  const m = near ? Infinity : si / so
  let sifat: string
  if (near) sifat = 'Bayangan di tak hingga'
  else if (so > 2 * f + 4) sifat = 'Nyata · terbalik · diperkecil'
  else if (Math.abs(so - 2 * f) <= 4) sifat = 'Nyata · terbalik · sama besar'
  else if (so > f) sifat = 'Nyata · terbalik · diperbesar'
  else sifat = 'Maya · tegak · diperbesar'
  const objX = LX - Math.min(so * 0.78, 104)
  let img = null
  if (!near) {
    const h = 30 * Math.min(Math.abs(m), 2.1)
    const siPx = Math.min(Math.abs(si) * 0.55, 98)
    if (si > 0) { const x = LX + siPx; img = <line x1={x} y1={AX} x2={x} y2={AX + h} stroke='#c0492f' strokeWidth='3' markerEnd='url(#id)' /> }
    else { const x = LX - siPx; img = <line x1={x} y1={AX} x2={x} y2={AX - h} stroke='#c0492f' strokeWidth='3' markerEnd='url(#iu)' /> }
  }
  return (
    <>
      <p className={styles.prompt}>Lensa cembung (f = 40). Geser jarak benda - lihat <em>bayangan</em> terbentuk.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 240 140" className={styles.lensSvg}>
            <line x1="6" y1={AX} x2="234" y2={AX} stroke="#cdd4dd" strokeWidth="1" />
            <ellipse cx={LX} cy={AX} rx="9" ry="40" fill="#cdeeff" stroke="#6a4caf" strokeWidth="2" />
            <circle cx={LX - 31} cy={AX} r="2.5" fill="#9aa6b2" /><circle cx={LX + 31} cy={AX} r="2.5" fill="#9aa6b2" />
            <line x1={objX} y1={AX} x2={objX} y2={AX - 30} stroke="#2a7d52" strokeWidth="3" markerEnd="url(#ou)" />
            {img}
            <defs>
              <marker id="ou" markerWidth="9" markerHeight="9" refX="4" refY="2" orient="auto"><path d="M0 8l4-7 4 7z" fill="#2a7d52" /></marker>
              <marker id="iu" markerWidth="9" markerHeight="9" refX="4" refY="2" orient="auto"><path d="M0 8l4-7 4 7z" fill="#c0492f" /></marker>
              <marker id="id" markerWidth="9" markerHeight="9" refX="4" refY="7" orient="auto"><path d="M0 1l4 7 4-7z" fill="#c0492f" /></marker>
            </defs>
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.verdict}>{sifat}</div>
          <div className={styles.sliderRow}><label>Jarak benda</label><input type="range" min={15} max={130} value={so} onChange={e => setSo(+e.target.value)} /><span className={styles.val}>{so}</span></div>
          <div className={styles.note}>{so > 2 * f ? 'Benda jauh (di luar 2F) → bayangan nyata & kecil, seperti pada kamera.' : so < f ? 'Benda dekat (di dalam F) → bayangan maya & besar, seperti pada lup.' : 'Benda di antara F dan 2F → bayangan nyata & diperbesar, seperti pada proyektor.'}</div>
        </div>
      </div>
    </>
  )
}
