import { useState } from 'react'
import { CONTOH } from './data'
import styles from './ui.module.css'
export function Scene3Klasifikasi() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = CONTOH[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Campuran ini termasuk <em>homogen</em> atau <em>heterogen?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}>
            <div className={styles.quizName}>{q.nama}</div>
            <div className={styles.quizOpts}>
              {(['homogen', 'heterogen'] as const).map(opt => {
                const cls = !done ? styles.qOpt : opt === q.jawab ? `${styles.qOpt} ${styles.qRight}` : opt === pick ? `${styles.qOpt} ${styles.qWrong}` : styles.qOpt
                return <button key={opt} className={cls} disabled={done} onClick={() => setPick(opt)}>{opt}</button>
              })}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          {done
            ? <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat!' : 'Belum tepat.'} {q.nama} adalah campuran {q.jawab}.</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % CONTOH.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Berikutnya →</button>
              </>
            : <div className={styles.allNote}>Tanya dirimu: apakah komponennya masih bisa dibedakan dengan mata?</div>}
        </div>
      </div>
    </>
  )
}
