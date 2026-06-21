import { useState } from 'react'
import { JENIS, SOAL } from './data'
import styles from './ui.module.css'
export function Scene3Jenis() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = SOAL[i]
  const done = pick !== null
  const correct = pick === q.jawab
  const nama = (id: string) => JENIS.find(j => j.id === id)!.nama.split(' (')[0]
  return (
    <>
      <p className={styles.prompt}>Data ini termasuk <em>jenis apa?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}>
            <div className={styles.quizTeks}>{q.teks}</div>
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
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat!' : 'Belum tepat.'} Ini {nama(q.jawab)}.</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % SOAL.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Berikutnya →</button>
              </>
            : <div className={styles.allNote}>Catatan: nomor HP termasuk teks karena tak pernah dihitung secara matematis.</div>}
        </div>
      </div>
    </>
  )
}
