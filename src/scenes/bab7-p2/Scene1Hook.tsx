import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Tiap hari Matahari terbit lalu tenggelam; tiap tahun musim berganti. <em>Apa dua gerak Bumi yang menyebabkannya?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.hookRow}>
            <div className={styles.hCard}><span className={styles.hBig}>~24 jam</span><span className={styles.hLbl}>Siang → malam</span></div>
            <div className={styles.hCard}><span className={styles.hBig}>~365 hari</span><span className={styles.hLbl}>Musim berganti</span></div>
          </div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}><b>Rotasi</b> - Bumi berputar pada porosnya (~24 jam) menyebabkan siang-malam. <b>Revolusi</b> - Bumi mengelilingi Matahari (~365 hari) menyebabkan musim.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa penyebabnya? →</button>}
        </div>
      </div>
    </>
  )
}
