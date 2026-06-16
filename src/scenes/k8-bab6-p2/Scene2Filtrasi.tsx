import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Filtrasi() {
  const [done, setDone] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Filtrasi memisahkan padatan dari cairan berdasarkan <em>ukuran partikel.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 180 180" className={styles.filtSvg}>
            <path d="M50 30 H130 L98 78 V96 L82 96 V78 Z" fill="none" stroke="#8a99a6" strokeWidth="2" />
            <path d="M52 33 H128 L100 75 H80 Z" fill={done ? '#cdeeff' : '#d9c8a8'} opacity="0.7" />
            {done && <rect x="80" y="68" width="20" height="8" fill="#9c7b4a" />}
            <line x1="90" y1="96" x2="90" y2="118" stroke="#cdeeff" strokeWidth="3" strokeDasharray={done ? '0' : '4 4'} />
            <path d="M58 122 H122 V165 H58 Z" fill="none" stroke="#8a99a6" strokeWidth="2" />
            <rect x="60" y={done ? 138 : 162} width="60" height={done ? 25 : 1} fill="#cdeeff" opacity="0.85" />
            {done && <><text x="105" y="64" fontSize="10" fill="#9c7b4a" fontWeight="700">residu</text><text x="124" y="155" fontSize="10" fill="#2b6f9e" fontWeight="700">filtrat</text></>}
          </svg>
        </div>
        <div className={styles.side}>
          {!done
            ? <button className={styles.btn} onClick={(e) => { setDone(true); (e.currentTarget as HTMLButtonElement).blur() }}>Saring campuran →</button>
            : <div className={styles.detail}>Padatan (pasir/lumpur) tertahan di kertas saring sebagai <b>residu</b>. Cairan jernih yang lolos disebut <b>filtrat</b>. Contoh: menyaring kopi, mengolah air keruh.</div>}
        </div>
      </div>
    </>
  )
}
