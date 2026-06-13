import { useState } from 'react'
import { MotionGraph } from '../../components/MotionGraph'
import styles from './ui.module.css'

export function Scene4Baca() {
  const [show, setShow] = useState(false)
  const series = [
    { points: [[0, 0], [10, 30]] as [number, number][], color: '#7AB2B2' },
    { points: [[0, 0], [10, 60]] as [number, number][], color: '#088395' },
    { points: [[0, 0], [10, 90]] as [number, number][], color: '#d64545' },
  ]
  return (
    <>
      <p className={styles.prompt}>Tiga benda, satu grafik. <em>Mana yang paling cepat?</em> Tebak dari kemiringannya.</p>
      <div className={styles.main}>
        <div className={styles.graphBox}><MotionGraph series={series} xMax={10} yMax={100} xLabel="waktu (s) →" yLabel="posisi s (m)" /></div>
        <div className={styles.side}>
          <div className={styles.legend}>
            <div className={styles.lItem}><span className={styles.dot} style={{ background: '#7AB2B2' }} />Benda A {show && '— 3 m/s'}</div>
            <div className={styles.lItem}><span className={styles.dot} style={{ background: '#088395' }} />Benda B {show && '— 6 m/s'}</div>
            <div className={styles.lItem}><span className={styles.dot} style={{ background: '#d64545' }} />Benda C {show && '— 9 m/s'}</div>
          </div>
          {!show
            ? <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Cek jawaban →</button>
            : <div className={styles.hl}>Benda <b>C</b> paling cepat — garisnya paling curam. Makin curam grafik s-t, makin besar kecepatannya.</div>}
        </div>
      </div>
    </>
  )
}
