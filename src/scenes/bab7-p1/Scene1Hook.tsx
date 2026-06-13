import { useState } from 'react'
import { PLANETS } from './data'
import styles from './ui.module.css'
const ANG = [0.3, 1.1, 2.0, 2.9, 3.9, 4.8, 5.6, 0.7]
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  const cx = 150, cy = 90
  return (
    <>
      <p className={styles.prompt}>Matahari dan benda-benda yang mengelilinginya membentuk satu sistem. <em>Apa saja anggotanya, dan bagaimana urutannya?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 300 180" className={styles.solar}>
            {PLANETS.map((p, i) => { const rx = 24 + i * 14.5; return <ellipse key={p.id} cx={cx} cy={cy} rx={rx} ry={rx * 0.42} fill="none" stroke="#d4d8ee" strokeWidth="1" /> })}
            <circle cx={cx} cy={cy} r="11" fill="#f4b73d" />
            {PLANETS.map((p, i) => { const rx = 24 + i * 14.5, ry = rx * 0.42, a = ANG[i]; return <circle key={p.id} cx={cx + rx * Math.cos(a)} cy={cy + ry * Math.sin(a)} r={Math.max(2.6, p.r * 0.34)} fill={p.warna} /> })}
          </svg>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Pusatnya adalah <b>Matahari</b> (sebuah bintang). Mengelilinginya: <b>8 planet</b> - Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus - ditambah satelit, asteroid, komet, dan meteor.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Siapa anggotanya? →</button>}
        </div>
      </div>
    </>
  )
}
