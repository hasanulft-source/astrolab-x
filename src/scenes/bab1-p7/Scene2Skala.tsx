import { useState } from 'react'
import { RulerReader } from '../../components/RulerReader'
import styles from './ui.module.css'

export function Scene2Skala() {
  const [val, setVal] = useState(6.4)
  return (
    <>
      <p className={styles.prompt}>Geser ujung benda, lalu <em>baca panjangnya pada skala</em>. Perhatikan garis putus-putus.</p>
      <div className={styles.stageCol}>
        <div className={styles.rulerViz}><RulerReader value={val} /></div>
        <div className={styles.controls}>
          <span className={styles.cLabel}>Panjang benda</span>
          <input className={styles.range} type="range" min={0} max={14} step={0.1} value={val} onChange={e => setVal(+e.target.value)} />
          <span className={styles.readout}>{val.toFixed(1).replace('.', ',')} cm</span>
        </div>
        <div className={styles.note}>Baca skala dengan mata <b>tegak lurus</b> (sejajar) terhadap garis ukur. Membaca dari samping menimbulkan kesalahan <b>paralaks</b> — angka terlihat bergeser.</div>
      </div>
    </>
  )
}
