import { useState } from 'react'
import { HORIZON } from './data'
import styles from './ui.module.css'
const H = [22, 30, 40, 34, 30]
export function Scene2Profil() {
  const [sel, setSel] = useState('A')
  const h = HORIZON.find(x => x.id === sel)!
  let y = 8
  return (
    <>
      <p className={styles.prompt}>Klik tiap lapisan untuk menjelajah <em>profil tanah.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 140 164" className={styles.profSvg}>
            {HORIZON.map((z, i) => {
              const yy = y; y += H[i]
              return <g key={z.id} onClick={() => setSel(z.id)} style={{ cursor: 'pointer' }}>
                <rect x="14" y={yy} width="88" height={H[i]} fill={z.warna} opacity={sel === z.id ? 1 : 0.55} stroke={sel === z.id ? '#fff' : 'none'} strokeWidth="2" />
                <text x="58" y={yy + H[i] / 2 + 4} textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">{z.id}</text>
              </g>
            })}
          </svg>
        </div>
        <div className={styles.side}><div className={styles.detail}><div className={styles.dName}>{h.nama}</div><div className={styles.dDef}>{h.ket}</div></div></div>
      </div>
    </>
  )
}
