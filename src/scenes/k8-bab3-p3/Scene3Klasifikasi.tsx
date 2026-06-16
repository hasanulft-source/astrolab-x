import { useState } from 'react'
import { JENIS, ALAT } from './data'
import styles from './ui.module.css'
export function Scene3Klasifikasi() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = ALAT[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Alat ini termasuk pesawat sederhana <em>jenis apa?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}>
            <div className={styles.quizAlat}>{q.alat}</div>
            <div className={styles.quizOpts}>
              {JENIS.map(j => {
                const cls = !done ? styles.qOpt : j.id === q.jawab ? `${styles.qOpt} ${styles.qRight}` : j.id === pick ? `${styles.qOpt} ${styles.qWrong}` : styles.qOpt
                return <button key={j.id} className={cls} disabled={done} onClick={() => setPick(j.id)}>{j.nama.split(' (')[0]}</button>
              })}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          {done
            ? <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat!' : 'Belum tepat.'} {q.alat} termasuk {JENIS.find(j => j.id === q.jawab)!.nama.split(' (')[0]}.</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % ALAT.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Berikutnya →</button>
              </>
            : <div className={styles.allNote}>Perhatikan cara kerjanya: mengungkit, menarik tali, naik miring, atau memutar.</div>}
        </div>
      </div>
    </>
  )
}
