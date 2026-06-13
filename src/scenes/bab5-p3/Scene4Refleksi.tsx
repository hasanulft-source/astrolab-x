import { useState } from 'react'
import { KINGS, QUIZ } from './data'
import styles from './ui.module.css'

export function Scene4Refleksi() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = QUIZ[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Uji cepat: organisme ini masuk <em>kingdom apa?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}>
            <div className={styles.quizOrg}>{q.organisme}</div>
            <div className={styles.quizOpts}>
              {KINGS.map(k => {
                const cls = !done ? styles.qOpt
                  : k.id === q.jawab ? `${styles.qOpt} ${styles.qRight}`
                  : k.id === pick ? `${styles.qOpt} ${styles.qWrong}` : styles.qOpt
                return <button key={k.id} className={cls} disabled={done} onClick={() => setPick(k.id)}>{k.nama}</button>
              })}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          {done
            ? <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat!' : 'Belum tepat.'} {q.alasan}</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % QUIZ.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Soal berikutnya →</button>
              </>
            : <div className={styles.allNote}>Ingat 3 kunci: <b>membran inti</b>, <b>jumlah sel</b>, <b>cara makan</b>.</div>}
        </div>
      </div>
    </>
  )
}
