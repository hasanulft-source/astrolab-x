import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Buka casing komputer dan kamu akan melihat puluhan komponen berbeda. Mengapa sebanyak itu, dan <em>apa tugas masing-masing?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookPc}><div className={styles.chip} /><div className={styles.chip} /><div className={styles.chip} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Semua <b>perangkat keras</b> dikelompokkan menurut tugasnya menjadi 4: <b>input</b>, <b>proses</b>, <b>output</b>, dan <b>penyimpanan</b>. Bersama-sama mereka membentuk satu sistem komputer.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa tugasnya? →</button>}
        </div>
      </div>
    </>
  )
}
