import { useState } from 'react'
import { HEWAN } from './data'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Burung, capung, dan kelelawar sama-sama terbang, tapi sangat berbeda. <em>Bagaimana ilmuwan mengidentifikasi makhluk hidup secara sistematis?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.chipWrap}>{HEWAN.map(h => <span key={h} className={styles.chipN}>{h}</span>)}</div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Pakai <b>kunci dikotomi</b>: daftar pertanyaan <b>ya / tidak</b> bertahap yang menuntunmu ke satu jawaban - seperti GPS untuk mengenali organisme.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa alatnya? →</button>}
        </div>
      </div>
    </>
  )
}
