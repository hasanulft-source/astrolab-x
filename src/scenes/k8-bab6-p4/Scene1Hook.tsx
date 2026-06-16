import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Setetes tinta hitam dari spidol ternyata <em>bukan hitam murni</em> - di dalamnya ada banyak warna tersembunyi. Bagaimana membuktikannya?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookInk}><span className={styles.dot} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Dengan <b>kromatografi</b>: tinta dirambatkan pada kertas memakai pelarut. Tiap warna bergerak dengan kecepatan berbeda, sehingga terpisah menjadi pita-pita warna.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Bagaimana? →</button>}
        </div>
      </div>
    </>
  )
}
