import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Masuk pesan di grup: <em>"BESOK LIBUR! Sebarkan ke semua sebelum terlambat!!!"</em> Jarimu sudah siap menekan tombol bagikan. Tunggu - benarkah itu?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookChat}>BESOK LIBUR!!! SEBARKAN!!!</div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Sebelum percaya, kita harus bisa membedakan <b>fakta</b> (bisa dibuktikan), <b>opini</b> (pendapat pribadi), dan <b>hoaks</b> (informasi palsu yang menyesatkan).</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Benarkah itu? →</button>}
        </div>
      </div>
    </>
  )
}
