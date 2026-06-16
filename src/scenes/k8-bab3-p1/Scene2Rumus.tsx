import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Rumus() {
  const [F, setF] = useState(40)
  const [s, setS] = useState(5)
  const W = F * s
  return (
    <>
      <p className={styles.prompt}>Usaha = gaya × perpindahan. Geser nilainya, lihat <em>W</em> berubah.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.calc}>
            <div className={styles.formula}>W = F × s</div>
            <div className={styles.bigW}>{W.toLocaleString('id-ID')}<span> joule</span></div>
            <div className={styles.boxTrack}><div className={styles.box} style={{ left: `${Math.min(s / 10 * 80, 80)}%` }} /></div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.sliderRow}><label>Gaya (F)</label><input type="range" min={0} max={100} value={F} onChange={e => setF(+e.target.value)} /><span className={styles.val}>{F} N</span></div>
          <div className={styles.sliderRow}><label>Perpindahan (s)</label><input type="range" min={0} max={10} value={s} onChange={e => setS(+e.target.value)} /><span className={styles.val}>{s} m</span></div>
          <div className={styles.note}>{s === 0 ? 'Perpindahan nol → usaha nol, berapa pun gayanya.' : `${F} N × ${s} m = ${W.toLocaleString('id-ID')} J`}</div>
        </div>
      </div>
    </>
  )
}
