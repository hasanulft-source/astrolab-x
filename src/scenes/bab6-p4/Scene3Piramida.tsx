import { useState } from 'react'
import { PYR } from './data'
import styles from './ui.module.css'
export function Scene3Piramida() {
  const [sel, setSel] = useState('p')
  const t = PYR.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Susun energinya jadi <em>piramida ekologi</em> - dasar lebar, puncak sempit. Klik tiap tingkat.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 300 210" className={styles.pyr}>
            {PYR.map(p => {
              const on = sel === p.id
              const cx = 150
              const pts = `${cx - p.wb},${p.yb} ${cx + p.wb},${p.yb} ${cx + p.wt},${p.yt} ${cx - p.wt},${p.yt}`
              return (
                <g key={p.id} onClick={() => setSel(p.id)} style={{ cursor: 'pointer' }}>
                  <polygon points={pts} fill={on ? '#0d6b7a' : '#cfe7e2'} stroke="#fff" strokeWidth="2" />
                  <text x={cx} y={(p.yb + p.yt) / 2 + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill={on ? '#fff' : '#1e7d5e'}>{p.n}</text>
                </g>
              )
            })}
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dName}>{t.n} <span className={styles.dPct}>{t.e} satuan</span></div>
            <div className={styles.dSub}>{t.sub}</div>
            <div className={styles.dDef}>{t.note}</div>
          </div>
        </div>
      </div>
    </>
  )
}
