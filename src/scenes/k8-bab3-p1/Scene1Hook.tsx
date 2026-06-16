import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Kamu mendorong tembok sekuat tenaga sampai berkeringat - tapi tembok diam. <em>Apakah kamu melakukan usaha?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookWall}><span className={styles.person}>⇨</span><div className={styles.wall} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Dalam fisika, <b>tidak</b>. Usaha hanya terjadi jika benda <b>berpindah</b>. Rumusnya <b>W = F × s</b> - kalau perpindahan (s) nol, usaha pun nol, sekeras apa pun kamu mendorong.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Menurut fisika? →</button>}
        </div>
      </div>
    </>
  )
}
