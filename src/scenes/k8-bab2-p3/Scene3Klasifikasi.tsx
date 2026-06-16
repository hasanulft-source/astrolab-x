import { useState } from 'react'
import { ORGAN, ZAT } from './data'
import styles from './ui.module.css'
export function Scene3Klasifikasi() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = ZAT[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Zat sisa ini dikeluarkan oleh organ <em>apa?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}>
            <div className={styles.quizZat}>{q.zat}</div>
            <div className={styles.quizOpts}>
              {ORGAN.map(o => {
                const cls = !done ? styles.qOpt : o.id === q.jawab ? `${styles.qOpt} ${styles.qRight}` : o.id === pick ? `${styles.qOpt} ${styles.qWrong}` : styles.qOpt
                return <button key={o.id} className={cls} disabled={done} onClick={() => setPick(o.id)}>{o.nama}</button>
              })}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          {done
            ? <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat!' : 'Belum tepat.'} {q.zat} dikeluarkan oleh {ORGAN.find(o => o.id === q.jawab)!.nama}.</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % ZAT.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Berikutnya →</button>
              </>
            : <div className={styles.allNote}>Ingat zat khas tiap organ: urine, keringat, CO2, urea.</div>}
        </div>
      </div>
    </>
  )
}
