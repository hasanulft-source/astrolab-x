import { useState } from 'react'
import styles from './ui.module.css'
import { Frac } from '../../components/Frac'

export function Scene3Rumus() {
  const [show, setShow] = useState(false)
  const c = 37
  return (
    <>
      <p className={styles.prompt}>Konversi itu seperti <em>tukar mata uang</em> — tiap skala punya “kurs” sendiri. Ini rumusnya:</p>
      <div className={styles.main}>
        <div className={styles.formulas}>
          <div className={styles.fCard}><span className={styles.fName}>Celsius → Fahrenheit</span><span className={styles.fEq}>F = C × <Frac top="9" bottom="5" /> + 32</span></div>
          <div className={styles.fCard}><span className={styles.fName}>Celsius → Kelvin</span><span className={styles.fEq}>K = C + 273</span></div>
          <div className={styles.fCard}><span className={styles.fName}>Celsius → Reamur</span><span className={styles.fEq}>R = C × <Frac top="4" bottom="5" /></span></div>
        </div>
        <div className={styles.worked}>
          <span className={styles.wTitle}>contoh: suhu tubuh {c}°C</span>
          {show ? <>
            <div className={styles.wRow}><span>{c} × <Frac top="9" bottom="5" /> + 32</span><span>= 98,6°F</span></div>
            <div className={styles.wRow}><span>{c} + 273</span><span>= 310 K</span></div>
            <div className={styles.wRow}><span>{c} × <Frac top="4" bottom="5" /></span><span>= 29,6°R</span></div>
          </> : <button className={styles.btn} style={{ alignSelf: 'flex-start' }} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Hitung →</button>}
        </div>
      </div>
    </>
  )
}
