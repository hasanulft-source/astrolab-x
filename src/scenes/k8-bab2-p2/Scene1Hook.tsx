import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Paru-paru tidak punya otot sendiri. <em>Lalu bagaimana udara bisa masuk dan keluar?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookBig}>↓ ↑</div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Yang bekerja adalah <b>otot di sekitar paru</b>: diafragma dan otot antar tulang rusuk. Saat mereka mengubah ukuran rongga dada, udara terdorong masuk (<b>inspirasi</b>) atau keluar (<b>ekspirasi</b>).</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa yang menggerakkan? →</button>}
        </div>
      </div>
    </>
  )
}
