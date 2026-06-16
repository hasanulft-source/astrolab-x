import { useState } from 'react'
import { HORIZON, SOAL } from './data'
import styles from './ui.module.css'
export function Scene3Kuis() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = SOAL[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Ciri ini menggambarkan <em>lapisan yang mana?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}>
            <div className={styles.quizCiri}>{q.ciri}</div>
            <div className={styles.quizOpts}>
              {HORIZON.map(z => {
                const cls = !done ? styles.qOpt : z.id === q.jawab ? `${styles.qOpt} ${styles.qRight}` : z.id === pick ? `${styles.qOpt} ${styles.qWrong}` : styles.qOpt
                return <button key={z.id} className={cls} disabled={done} onClick={() => setPick(z.id)}>{z.id}</button>
              })}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          {done
            ? <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat!' : 'Belum tepat.'} Jawabannya horizon {q.jawab}.</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % SOAL.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Berikutnya →</button>
              </>
            : <div className={styles.allNote}>Ingat urutan dari atas: O (serasah), A (humus), B (mineral), C (induk), R (batuan).</div>}
        </div>
      </div>
    </>
  )
}
