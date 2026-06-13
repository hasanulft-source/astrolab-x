import { useState } from 'react'
import { Thermometer } from '../../components/Thermometer'
import styles from './ui.module.css'

export function Scene2Skala() {
  const [c, setC] = useState(30)
  return (
    <>
      <p className={styles.prompt}>Satu suhu yang sama, ditulis di <em>empat skala</em>. Geser — lihat keempatnya berubah bersamaan.</p>
      <div className={styles.scaleMain}>
        <div className={styles.therms}>
          <Thermometer celsius={c} scale="C" name="Celsius" />
          <Thermometer celsius={c} scale="F" name="Fahrenheit" />
          <Thermometer celsius={c} scale="K" name="Kelvin" />
          <Thermometer celsius={c} scale="R" name="Reamur" />
        </div>
        <div className={styles.ctrl}>
          <span className={styles.cLabel}>Suhu</span>
          <input className={styles.range} type="range" min={-20} max={120} value={c} onChange={e => setC(+e.target.value)} />
          <span className={styles.cVal}>{c}°C</span>
        </div>
      </div>
    </>
  )
}
