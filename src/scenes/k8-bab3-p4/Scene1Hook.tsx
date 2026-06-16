import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Gagang pintu dipasang <em>jauh</em> dari engsel, bukan dekat. Mendorong di ujung jauh terasa jauh lebih ringan. Mengapa?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookDoor}><div className={styles.hinge} /><div className={styles.doorBar} /><div className={styles.knob} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Karena <b>lengan kuasa</b> yang panjang memperbesar <b>keuntungan mekanis (KM)</b>. Makin besar KM, makin kecil gaya yang kita perlukan.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Kenapa lebih ringan? →</button>}
        </div>
      </div>
    </>
  )
}
