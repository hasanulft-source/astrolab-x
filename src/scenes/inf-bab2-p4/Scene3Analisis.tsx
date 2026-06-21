import { useState } from 'react'
import { HARI, TANYA, FIXED } from './data'
import styles from './ui.module.css'
export function Scene3Analisis() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = TANYA[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Baca grafik, lalu <em>tarik kesimpulan.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 240 160" className={styles.chart}>
            <line x1="20" y1="130" x2="232" y2="130" stroke="#b9c4cf" strokeWidth="1.5" />
            {FIXED.map((v, k) => {
              const h = (v / 50) * 100, x = 28 + k * 42, y = 130 - h
              return <g key={k}>
                <rect x={x} y={y} width="28" height={h} rx="3" fill="#1f8a7a" />
                <text x={x + 14} y={y - 5} textAnchor="middle" fontSize="11" fontWeight="700" fill="#147063">{v}</text>
                <text x={x + 14} y="145" textAnchor="middle" fontSize="11" fill="#7a8694">{HARI[k]}</text>
              </g>
            })}
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.qTeks}>{q.teks}</div>
          <div className={styles.opts}>{q.opsi.map(o => {
            const cls = !done ? styles.opt : o === q.jawab ? `${styles.opt} ${styles.optR}` : o === pick ? `${styles.opt} ${styles.optW}` : styles.opt
            return <button key={o} className={cls} disabled={done} onClick={() => setPick(o)}>{o}</button>
          })}</div>
          {done && <button className={styles.btn} onClick={(e) => { setI((i + 1) % TANYA.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>{correct ? 'Tepat! ' : 'Cek lagi grafiknya. '}Berikutnya →</button>}
        </div>
      </div>
    </>
  )
}
