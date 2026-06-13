import { useState } from 'react'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Berita cuaca: New York <em>50°F</em>, Banda Aceh <em>30°C</em>. <em>Kota mana yang lebih panas?</em></p>
      <div className={styles.hookRow}>
        <div className={styles.hookCard}><span className={styles.hookVal}>50°F</span><span className={styles.hookWho}>New York</span></div>
        <div className={styles.hookCard}><span className={styles.hookVal}>30°C</span><span className={styles.hookWho}>Banda Aceh</span></div>
      </div>
      <div className={styles.hookQ}>
        {show
          ? <>50°F itu cuma <b>10°C</b> — jadi Banda Aceh (30°C) <b>jauh lebih panas</b>! Angka besar belum tentu lebih panas; tergantung <b>skalanya</b>. Hari ini kita kenalan dengan 4 skala suhu.</>
          : <>Hati-hati — angka 50 lebih besar dari 30, tapi <b>satuannya beda</b>. Klik untuk cek.</>}
      </div>
      {!show && <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Cek jawaban →</button>}
    </>
  )
}
