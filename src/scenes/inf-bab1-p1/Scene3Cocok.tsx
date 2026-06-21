import { useState } from 'react'
import { PONDASI, SOAL } from './data'
import styles from './ui.module.css'
export function Scene3Cocok() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = SOAL[i]
  const done = pick !== null
  const correct = pick === q.jawab
  const nama = (id: string) => PONDASI.find(p => p.id === id)!.nama
  return (
    <>
      <p className={styles.prompt}>Kegiatan ini memakai pondasi yang <em>mana?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}>
            <div className={styles.quizTeks}>{q.teks}</div>
            <div className={styles.quizOpts}>
              {PONDASI.map(p => {
                const cls = !done ? styles.qOpt : p.id === q.jawab ? `${styles.qOpt} ${styles.qRight}` : p.id === pick ? `${styles.qOpt} ${styles.qWrong}` : styles.qOpt
                return <button key={p.id} className={cls} disabled={done} onClick={() => setPick(p.id)}>{p.nama}</button>
              })}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          {done
            ? <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat!' : 'Belum tepat.'} Ini contoh {nama(q.jawab)}.</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % SOAL.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Berikutnya →</button>
              </>
            : <div className={styles.allNote}>Tanya: apakah ini memecah, mencari kemiripan, menyederhanakan, atau mengurutkan?</div>}
        </div>
      </div>
    </>
  )
}
