import { useState } from 'react'
import { KATEGORI, SOAL } from './data'
import styles from './ui.module.css'
export function Scene3Klasifikasi() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = SOAL[i]
  const done = pick !== null
  const correct = pick === q.jawab
  const nama = (id: string) => KATEGORI.find(k => k.id === id)!.nama
  return (
    <>
      <p className={styles.prompt}>Perangkat ini termasuk kelompok <em>apa?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}>
            <div className={styles.quizAlat}>{q.alat}</div>
            <div className={styles.quizOpts}>
              {KATEGORI.map(k => {
                const cls = !done ? styles.qOpt : k.id === q.jawab ? `${styles.qOpt} ${styles.qRight}` : k.id === pick ? `${styles.qOpt} ${styles.qWrong}` : styles.qOpt
                return <button key={k.id} className={cls} disabled={done} onClick={() => setPick(k.id)}>{k.nama}</button>
              })}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          {done
            ? <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat!' : 'Belum tepat.'} {q.alat} termasuk {nama(q.jawab)}.</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % SOAL.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Berikutnya →</button>
              </>
            : <div className={styles.allNote}>Tanya: apakah ia memasukkan, mengolah, menampilkan, atau menyimpan data?</div>}
        </div>
      </div>
    </>
  )
}
