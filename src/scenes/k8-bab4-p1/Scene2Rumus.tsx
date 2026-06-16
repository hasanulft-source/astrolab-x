import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Rumus() {
  const [F, setF] = useState(100)
  const [A, setA] = useState(20)
  const P = Math.round(F / A * 100) / 100
  return (
    <>
      <p className={styles.prompt}>Tekanan = gaya ÷ luas. Geser nilainya - perhatikan <em>P</em> melonjak saat luas mengecil.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.calc}>
            <div className={styles.formula}>P = F ÷ A</div>
            <div className={styles.bigP}>{P}<span> N/cm²</span></div>
            <div className={styles.contactWrap}><div className={styles.contact} style={{ width: `${Math.max(A / 50 * 100, 6)}%` }} /></div>
            <div className={styles.contactLbl}>luas sentuh</div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.sliderRow}><label>Gaya (F)</label><input type="range" min={10} max={300} value={F} onChange={e => setF(+e.target.value)} /><span className={styles.val}>{F} N</span></div>
          <div className={styles.sliderRow}><label>Luas (A)</label><input type="range" min={1} max={50} value={A} onChange={e => setA(+e.target.value)} /><span className={styles.val}>{A} cm²</span></div>
          <div className={styles.note}>Gaya sama, luas separuh → tekanan dua kali lipat.</div>
        </div>
      </div>
    </>
  )
}
