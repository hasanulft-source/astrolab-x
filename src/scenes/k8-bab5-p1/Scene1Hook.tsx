import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Saat kamu melempar batu ke kolam, riak menyebar ke tepi - tapi daun di permukaan hanya <em>naik-turun di tempat.</em> Apa sebenarnya yang merambat?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookRipple}><span /><span /><span /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Yang merambat adalah <b>energi</b>, bukan airnya. Inilah <b>gelombang</b>: gangguan yang memindahkan energi melalui getaran, tanpa memindahkan medium secara keseluruhan.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa yang merambat? →</button>}
        </div>
      </div>
    </>
  )
}
