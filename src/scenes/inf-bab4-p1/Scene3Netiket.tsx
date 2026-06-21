import { useState } from 'react'
import { SKENARIO } from './data'
import styles from './ui.module.css'
export function Scene3Netiket() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<number | null>(null)
  const q = SKENARIO[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Pilih tindakan yang <em>beretika.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.sitBox}>{q.situasi}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.opts}>
            {q.opsi.map((o, k) => {
              const cls = !done ? styles.opt : k === q.jawab ? `${styles.opt} ${styles.optR}` : k === pick ? `${styles.opt} ${styles.optW}` : styles.opt
              return <button key={k} className={cls} disabled={done} onClick={() => setPick(k)}>{o}</button>
            })}
          </div>
          {done && <>
            <div className={correct ? styles.fbOk : styles.fbNo}>{q.ket}</div>
            <button className={styles.btn} onClick={(e) => { setI((i + 1) % SKENARIO.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Situasi berikutnya →</button>
          </>}
        </div>
      </div>
    </>
  )
}
