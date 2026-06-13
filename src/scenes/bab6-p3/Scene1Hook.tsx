import { useState } from 'react'
import { CHAIN } from './data'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Di sawah: padi dimakan belalang, belalang dimakan katak, katak dimakan ular. <em>Apa yang sebenarnya mengalir di sepanjang rantai ini?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.hookChain}>
            {CHAIN.map((o, i) => (
              <span key={o.id} className={styles.hookNode}>{o.nama}{i < CHAIN.length - 1 && <span className={styles.hookArrow}>→</span>}</span>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Yang mengalir adalah <b>energi</b> (dan zat makanan). Panah selalu menunjuk ke pihak yang <b>memakan</b> - searah aliran energi, dari produsen menuju konsumen puncak.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa yang mengalir? →</button>}
        </div>
      </div>
    </>
  )
}
