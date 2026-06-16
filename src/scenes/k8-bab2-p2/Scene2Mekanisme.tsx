import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Mekanisme() {
  const [fase, setFase] = useState<'in' | 'ex'>('in')
  const inn = fase === 'in'
  return (
    <>
      <p className={styles.prompt}>Lihat apa yang terjadi pada paru & diafragma. Klik tiap fase.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.tabsTop}>
            <button className={`${styles.tt} ${inn ? styles.on : ''}`} onClick={() => setFase('in')}>Inspirasi</button>
            <button className={`${styles.tt} ${!inn ? styles.on : ''}`} onClick={() => setFase('ex')}>Ekspirasi</button>
          </div>
          <svg viewBox="0 0 200 200" className={styles.lungSvg}>
            <line x1="100" y1="18" x2="100" y2="56" stroke="#9aa0b0" strokeWidth="4" strokeLinecap="round" />
            <text x={inn ? 118 : 118} y="30" fontSize="18" fontWeight="700" fill={inn ? '#2a7d52' : '#c0392b'}>{inn ? '↓' : '↑'}</text>
            <g className={`${styles.lungs} ${inn ? styles.lungsIn : styles.lungsEx}`}>
              <ellipse cx="74" cy="92" rx="26" ry="46" fill="#eaf4fb" stroke="#7fb0d6" strokeWidth="2" />
              <ellipse cx="126" cy="92" rx="26" ry="46" fill="#eaf4fb" stroke="#7fb0d6" strokeWidth="2" />
              <line x1="100" y1="56" x2="80" y2="70" stroke="#9aa0b0" strokeWidth="2.5" />
              <line x1="100" y1="56" x2="120" y2="70" stroke="#9aa0b0" strokeWidth="2.5" />
            </g>
            <g className={`${styles.dia} ${inn ? styles.diaIn : styles.diaEx}`}>
              <path d="M44 150Q100 134 156 150" fill="none" stroke="#c0392b" strokeWidth="4" strokeLinecap="round" />
            </g>
            <text x="100" y="186" textAnchor="middle" fontSize="11" fontWeight="600" fill="#9a3b36">diafragma {inn ? 'turun (mendatar)' : 'naik (melengkung)'}</text>
          </svg>
        </div>
        <div className={styles.side}>
          {inn
            ? <div className={styles.detail}><b>Inspirasi (menarik napas).</b> Diafragma & otot rusuk berkontraksi → rongga dada <b>membesar</b> → tekanan turun → udara <b>masuk</b>.</div>
            : <div className={styles.detail}><b>Ekspirasi (mengembuskan napas).</b> Otot melemas → rongga dada <b>mengecil</b> → tekanan naik → udara <b>keluar</b>.</div>}
        </div>
      </div>
    </>
  )
}
