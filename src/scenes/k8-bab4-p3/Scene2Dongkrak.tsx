import { useState } from 'react'
import styles from './ui.module.css'
const F1 = 100
export function Scene2Dongkrak() {
  const [R, setR] = useState(5)
  const F2 = F1 * R
  const bigW = 24 + R * 3
  return (
    <>
      <p className={styles.prompt}>Pengisap besar punya luas <em>{R}×</em> pengisap kecil. Geser - lihat gaya angkatnya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 240 160" className={styles.hydSvg}>
            <path d="M30 150 H210 V120 H160 V60 H120 V120 H80 V100 H30 Z" fill="#dcefff" stroke="#9cc8e0" strokeWidth="2" />
            <rect x="42" y="86" width="26" height="12" rx="2" fill="#7a8694" />
            <line x1="55" y1="86" x2="55" y2="62" stroke="#2a7d52" strokeWidth="3" markerEnd="url(#d1)" />
            <text x="55" y="56" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2a7d52">{F1} N</text>
            <rect x={140 - (bigW - 40) / 2} y="44" width={bigW} height="14" rx="2" fill="#7a8694" />
            <text x="140" y="34" textAnchor="middle" fontSize="11" fontWeight="700" fill="#c0492f">{F2.toLocaleString('id-ID')} N ↑</text>
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.readout}><span>Gaya angkat (F2)</span><b>{F2.toLocaleString('id-ID')} N</b></div>
          <div className={styles.sliderRow}><label>Perbandingan luas</label><input type="range" min={1} max={20} value={R} onChange={e => setR(+e.target.value)} /><span className={styles.val}>{R}×</span></div>
          <div className={styles.note}>F1/A1 = F2/A2 → {F1} N di pengisap kecil menjadi <b>{F2.toLocaleString('id-ID')} N</b> di pengisap besar.</div>
        </div>
      </div>
    </>
  )
}
