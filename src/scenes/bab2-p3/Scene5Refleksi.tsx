import { useState } from 'react'
import { TRANSISI } from './data'
import styles from './ui.module.css'

export function Scene5Refleksi() {
  const [i, setI] = useState(0)
  const [show, setShow] = useState(false)
  const t = TRANSISI[i]
  const next = () => { setI((i + 1) % TRANSISI.length); setShow(false) }
  return (
    <>
      <p className={styles.prompt}>Kuis cepat: dari <em>contoh</em> ini, perubahan wujud apa yang terjadi?</p>
      <div className={styles.quizStage}>
        <div className={styles.qContoh}>“{t.contoh}”</div>
        {show && <div className={styles.qName}>{t.name}</div>}
        {!show
          ? <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Tampilkan jawaban</button>
          : <button className={styles.btn} onClick={(e) => { next(); (e.currentTarget as HTMLButtonElement).blur() }}>Contoh berikutnya →</button>}
      </div>
    </>
  )
}
