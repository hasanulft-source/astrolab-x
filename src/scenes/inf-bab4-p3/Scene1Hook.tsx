import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Sebuah aplikasi meminta kamu mengisi profil: nama, alamat rumah, nomor HP, jadwal harian. <em>Semuanya harus diisi?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookForm}><span /><span /><span /><span /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Tidak. Ada data yang aman dibagikan (<b>publik</b>) dan ada yang harus dijaga rapat (<b>privat</b>). Membagikan data privat sembarangan bisa berbahaya.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Semua harus diisi? →</button>}
        </div>
      </div>
    </>
  )
}
