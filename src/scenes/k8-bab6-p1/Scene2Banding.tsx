import { useState } from 'react'
import styles from './ui.module.css'
const HOMO = [[30, 28], [62, 40], [44, 64], [76, 70], [24, 80], [58, 96], [84, 52], [38, 44], [70, 22]]
const HETERO = [[34, 30], [40, 34], [36, 40], [72, 78], [78, 82], [74, 86], [30, 88], [80, 30]]
export function Scene2Banding() {
  const [mode, setMode] = useState<'homogen' | 'heterogen'>('homogen')
  const pts = mode === 'homogen' ? HOMO : HETERO
  return (
    <>
      <p className={styles.prompt}>Bandingkan sebaran partikelnya. Klik tiap jenis campuran.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 110 110" className={styles.partSvg}>
            <rect x="6" y="6" width="98" height="98" rx="8" fill="#eaf6ef" stroke="#bcdcc7" strokeWidth="2" />
            {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={mode === 'homogen' ? 4 : 6} fill={mode === 'homogen' ? '#3a7d52' : (i < 3 || (i > 4 && i < 7) ? '#3a7d52' : '#b9781a')} opacity="0.85" />)}
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.toggle}>
            <button className={`${styles.tBtn} ${mode === 'homogen' ? styles.tOn : ''}`} onClick={() => setMode('homogen')}>Homogen</button>
            <button className={`${styles.tBtn} ${mode === 'heterogen' ? styles.tOn : ''}`} onClick={() => setMode('heterogen')}>Heterogen</button>
          </div>
          <div className={styles.detail}>{mode === 'homogen'
            ? 'Partikel tersebar merata - komponen tak bisa dibedakan lagi. Disebut juga larutan. Contoh: air garam, sirup, udara.'
            : 'Partikel mengelompok & terlihat beda - komponen masih bisa dibedakan. Contoh: air + pasir, air + minyak.'}</div>
        </div>
      </div>
    </>
  )
}
