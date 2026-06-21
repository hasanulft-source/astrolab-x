import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Kamu menyuruh robot membuat teh, tapi urutannya kamu balik: <em>"tuang air, aduk, baru masukkan teh."</em> Robot menurut persis - hasilnya kacau. Apa pelajarannya?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookBot}>🤖</div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Komputer menjalankan perintah <b>persis seperti urutannya</b>. Urutan langkah yang jelas dan benar inilah yang disebut <b>algoritma</b> - dan urutan yang salah menghasilkan keluaran yang salah.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa pelajarannya? →</button>}
        </div>
      </div>
    </>
  )
}
