import { useState } from 'react'
import { HARI } from './data'
import styles from './ui.module.css'
export function Scene2Chart() {
  const [vals, setVals] = useState([20, 35, 28, 42, 30])
  const set = (i: number, d: number) => setVals(v => v.map((x, k) => k === i ? Math.max(0, Math.min(50, x + d)) : x))
  return (
    <>
      <p className={styles.prompt}>Ubah angka penjualan - lihat <em>grafik batang ikut berubah.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 240 160" className={styles.chart}>
            <line x1="20" y1="130" x2="232" y2="130" stroke="#b9c4cf" strokeWidth="1.5" />
            {vals.map((v, i) => {
              const h = (v / 50) * 100, x = 28 + i * 42, y = 130 - h
              return <g key={i}>
                <rect x={x} y={y} width="28" height={h} rx="3" fill="#1f8a7a" />
                <text x={x + 14} y={y - 5} textAnchor="middle" fontSize="11" fontWeight="700" fill="#147063">{v}</text>
                <text x={x + 14} y="145" textAnchor="middle" fontSize="11" fill="#7a8694">{HARI[i]}</text>
              </g>
            })}
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.steppers}>{HARI.map((h, i) => (
            <div key={h} className={styles.stepRow}><span className={styles.day}>{h}</span><button onClick={() => set(i, -5)}>−</button><b>{vals[i]}</b><button onClick={() => set(i, 5)}>+</button></div>
          ))}</div>
          <div className={styles.note}>Batang tertinggi langsung menunjukkan hari paling laris - tanpa perlu membandingkan angka satu per satu.</div>
        </div>
      </div>
    </>
  )
}
