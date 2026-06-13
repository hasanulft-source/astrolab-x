import { useState } from 'react'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Rel kereta bisa <em>melengkung</em> di siang panas, dan jembatan punya <em>celah sambungan</em>. Kenapa insinyur sengaja begitu?</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.note}>Logam terlihat kaku — tapi saat dipanaskan matahari, ia benar-benar bertambah panjang. Kalau tidak diberi ruang, ia akan menekan dan melengkung.</div>
          {!show && <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Kenapa? →</button>}
        </div>
        <div className={styles.side}>
          {show && <div className={styles.hl}>Inilah <b>pemuaian</b>: zat memuai saat dipanaskan, menyusut saat didinginkan. Insinyur memberi <b>celah ekspansi</b> agar struktur tidak rusak.</div>}
        </div>
      </div>
    </>
  )
}
