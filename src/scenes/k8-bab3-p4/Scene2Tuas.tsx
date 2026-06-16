import { useState } from 'react'
import styles from './ui.module.css'
const W = 100, Lb = 2
export function Scene2Tuas() {
  const [Lk, setLk] = useState(2)
  const F = Math.round(W * Lb / Lk)
  const KM = (Lk / Lb).toFixed(1)
  const kuasaX = 130 + (Lk / 6) * 96
  return (
    <>
      <p className={styles.prompt}>Beban 100 N di kiri (lengan 2 m). Geser <em>lengan kuasa</em> - lihat gaya yang dibutuhkan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 260 130" className={styles.leverSvg}>
            <line x1="30" y1="78" x2="240" y2="78" stroke="#c47d1a" strokeWidth="7" strokeLinecap="round" />
            <polygon points="130,80 118,108 142,108" fill="#8a99a6" />
            <rect x="40" y="52" width="26" height="26" rx="3" fill="#7a8694" /><text x="53" y="46" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5a6470">100 N</text>
            <line x1={kuasaX} y1="50" x2={kuasaX} y2="74" stroke="#2a7d52" strokeWidth="3" markerEnd="url(#ka)" />
            <defs><marker id="ka" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0 1h8l-4 6z" fill="#2a7d52" /></marker></defs>
            <text x={kuasaX} y="44" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2a7d52">{F} N</text>
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.sliderRow}><label>Lengan kuasa</label><input type="range" min={1} max={6} step={0.5} value={Lk} onChange={e => setLk(+e.target.value)} /><span className={styles.val}>{Lk} m</span></div>
          <div className={styles.readout}>
            <div className={styles.roItem}><span>Gaya kuasa</span><b>{F} N</b></div>
            <div className={styles.roItem}><span>Keuntungan mekanis</span><b>{KM}×</b></div>
          </div>
          <div className={styles.note}>{Lk > Lb ? 'Lengan kuasa lebih panjang → gaya lebih kecil dari berat beban.' : Lk === Lb ? 'Lengan sama panjang → gaya = berat beban (KM = 1).' : 'Lengan kuasa lebih pendek → malah butuh gaya lebih besar.'}</div>
        </div>
      </div>
    </>
  )
}
