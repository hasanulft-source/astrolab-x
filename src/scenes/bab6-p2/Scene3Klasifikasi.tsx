import { useState } from 'react'
import { SIMB, PAIRS } from './data'
import styles from './ui.module.css'
export function Scene3Klasifikasi() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = PAIRS[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Pasangan ini termasuk simbiosis <em>apa?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}>
            <div className={styles.quizOrg}>{q.pasangan}</div>
            <div className={styles.quizOpts}>
              {SIMB.map(s => {
                const cls = !done ? styles.qOpt
                  : s.id === q.jawab ? `${styles.qOpt} ${styles.qRight}`
                  : s.id === pick ? `${styles.qOpt} ${styles.qWrong}` : styles.qOpt
                return <button key={s.id} className={cls} disabled={done} onClick={() => setPick(s.id)}>{s.nama}</button>
              })}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          {done
            ? <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat!' : 'Belum tepat.'} {q.alasan}</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % PAIRS.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Soal berikutnya →</button>
              </>
            : <div className={styles.allNote}>Tanya: pihak kedua <b>diuntungkan</b>, <b>tak terpengaruh</b>, atau <b>dirugikan?</b></div>}
        </div>
      </div>
    </>
  )
}
