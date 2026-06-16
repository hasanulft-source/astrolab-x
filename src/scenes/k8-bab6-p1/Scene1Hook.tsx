import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Segelas air gula terlihat <em>bening dan menyatu.</em> Segelas air pasir terlihat <em>keruh dan terpisah.</em> Keduanya campuran - tapi berbeda. Apa bedanya?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookGlasses}><div className={styles.gClear} /><div className={styles.gMurky} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Air gula adalah campuran <b>homogen</b> - komponennya tercampur merata sampai tak terlihat. Air pasir adalah campuran <b>heterogen</b> - komponennya masih bisa dibedakan.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa bedanya? →</button>}
        </div>
      </div>
    </>
  )
}
