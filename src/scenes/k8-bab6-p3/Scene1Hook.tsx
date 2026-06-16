import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Petani garam menampung air laut di tambak dangkal, lalu menunggu. Beberapa hari kemudian, muncul <em>kristal garam putih.</em> Bagaimana?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookSun}><div className={styles.sun} /><div className={styles.pond} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Panas matahari <b>menguapkan air</b>, meninggalkan garam yang terlarut. Inilah <b>evaporasi</b> - salah satu metode pemisahan berbasis perubahan wujud.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Bagaimana bisa? →</button>}
        </div>
      </div>
    </>
  )
}
