import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Sheet() {
  const [vals, setVals] = useState([80, 90, 75, 85, 95])
  const set = (i: number, d: number) => setVals(v => v.map((x, k) => k === i ? Math.max(0, Math.min(100, x + d)) : x))
  const sum = vals.reduce((a, b) => a + b, 0)
  const avg = Math.round(sum / vals.length)
  const max = Math.max(...vals)
  const min = Math.min(...vals)
  return (
    <>
      <p className={styles.prompt}>Ubah nilai dengan tombol −/+. Lihat <em>semua formula menghitung ulang otomatis.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.sheet}>
            <div className={styles.shHead}><span className={styles.corner}></span><span className={styles.colH}>A</span><span className={styles.colH}>B</span></div>
            {vals.map((v, i) => (
              <div key={i} className={styles.shRow}>
                <span className={styles.rowH}>{i + 1}</span>
                <span className={styles.labelCell}>Siswa {i + 1}</span>
                <span className={styles.valCell}><button onClick={() => set(i, -5)}>−</button><b>{v}</b><button onClick={() => set(i, 5)}>+</button></span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.formulas}>
            <div className={styles.fRow}><code>=SUM(B1:B5)</code><b>{sum}</b></div>
            <div className={styles.fRow}><code>=AVERAGE(B1:B5)</code><b>{avg}</b></div>
            <div className={styles.fRow}><code>=MAX(B1:B5)</code><b>{max}</b></div>
            <div className={styles.fRow}><code>=MIN(B1:B5)</code><b>{min}</b></div>
          </div>
          <div className={styles.note}>Satu rumus bekerja untuk berapa pun banyaknya data - ubah satu angka, hasilnya langsung menyesuaikan.</div>
        </div>
      </div>
    </>
  )
}
