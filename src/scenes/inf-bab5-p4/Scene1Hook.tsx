import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Kamu mengirim pesan dari Banda Aceh, dan dalam sekejap sampai ke temanmu di Jakarta. <em>Lewat jalan apa pesan itu berjalan?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookNet}><span className={styles.dot} /><span className={styles.line} /><span className={styles.dot} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Lewat <b>jaringan komputer</b> - perangkat yang saling terhubung dan bertukar data. Jaringan terbesar dari semuanya adalah <b>internet</b>.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Lewat jalan apa? →</button>}
        </div>
      </div>
    </>
  )
}
