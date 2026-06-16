import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Tanah liat terasa <em>lengket</em> saat basah, sedangkan pasir tetap <em>gembur.</em> Apa yang membuatnya berbeda?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookGrains}><div className={styles.coarse} /><div className={styles.fine} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Perbedaan ada pada <b>ukuran butir</b> - inilah yang disebut <b>tekstur tanah</b>. Selain itu, kesuburan juga dipengaruhi sifat kimianya, yaitu <b>pH</b>.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa bedanya? →</button>}
        </div>
      </div>
    </>
  )
}
