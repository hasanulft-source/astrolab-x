import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Lebah hinggap di bunga, benalu menempel di pohon, kerbau ditemani burung jalak. <em>Apa untung-ruginya bagi tiap pihak?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.hookRow}>
            <span className={styles.hChip}>Lebah ↔ Bunga</span>
            <span className={styles.hChip}>Benalu ↔ Pohon</span>
            <span className={styles.hChip}>Kerbau ↔ Jalak</span>
          </div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Hubungan erat antar dua makhluk hidup disebut <b>simbiosis</b>. Hasilnya bisa <b>sama untung</b>, <b>satu untung</b> saja, atau <b>satu dirugikan</b>.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa nama hubungannya? →</button>}
        </div>
      </div>
    </>
  )
}
