import { useState } from 'react'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Sebuah kereta menempuh <em>3 km setiap 2 menit</em>, terus-menerus, tanpa berubah. <em>Apa yang istimewa dari geraknya?</em></p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.note}>Setiap selang waktu sama, jaraknya selalu sama. Pola yang sangat teratur.</div>
          {!show && <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa istimewanya? →</button>}
        </div>
        <div className={styles.side}>
          {show && <div className={styles.hl}>Ini <b>Gerak Lurus Beraturan (GLB)</b>: kecepatan <b>konstan</b>, percepatan <b>nol</b>. Grafik posisi-waktunya berupa garis lurus.</div>}
        </div>
      </div>
    </>
  )
}
