import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Hujan deras mengguyur dua lereng: satu <em>gundul</em>, satu <em>penuh pohon.</em> Mana yang tanahnya hanyut dan longsor?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookHill}><div className={styles.bare} /><div className={styles.green} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Lereng gundul. Tanpa akar yang menahan, air hujan mengikis tanah - inilah <b>erosi</b>, salah satu bentuk <b>degradasi tanah</b>. Akar tumbuhan adalah pelindung alami tanah.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Mana yang longsor? →</button>}
        </div>
      </div>
    </>
  )
}
