import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q: 'Saat bola di puncak bukit (diam), energi apa yang dominan?', correct: 'Energi potensial maksimum, energi kinetik nol', opsi: ['Energi potensial maksimum, energi kinetik nol', 'Energi kinetik maksimum, energi potensial nol', 'Keduanya nol', 'Keduanya maksimum'] },
  { q: 'Saat bola di dasar bukit (kecepatan maksimum), energi apa yang dominan?', correct: 'Energi kinetik maksimum, energi potensial nol (mengacu dasar)', opsi: ['Energi potensial maksimum', 'Energi kinetik maksimum, energi potensial nol (mengacu dasar)', 'Keduanya nol', 'Tidak ada energi sama sekali'] },
  { q: 'Mengapa total energi mekanik (Ep+Ek) tetap konstan sepanjang perjalanan?', correct: 'Hukum kekekalan energi — energi tidak diciptakan atau dimusnahkan, hanya berubah bentuk', opsi: ['Karena bukitnya licin sempurna', 'Hukum kekekalan energi — energi tidak diciptakan atau dimusnahkan, hanya berubah bentuk', 'Karena gravitasi menambah energi baru', 'Totalnya sebenarnya tidak tetap, hanya terlihat tetap'] },
]

export function Scene3Bentuk({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki kecepatan bola dari awal.</p>
      <div className={styles.questPanel}>
        {QUESTIONS.map((q, qi) => (
          <div key={qi} className={styles.questItem}>
            <div className={styles.questText}>{q.q}</div>
            <div className={styles.questOpts}>
              {q.opsi.map(o => {
                const picked = answers[qi] === o
                const correct = revealed && o === q.correct
                const wrong = revealed && picked && o !== q.correct
                return <button key={o} className={`${styles.questOpt} ${picked?styles.picked:''} ${correct?styles.optCorrect:''} ${wrong?styles.optWrong:''}`}
                  onClick={() => !revealed && setAnswers(a => ({...a,[qi]:o}))} disabled={revealed}>{o}</button>
              })}
            </div>
          </div>
        ))}
        {allDone && !revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Cek pemahamanku →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Hukum Kekekalan Energi Mekanik.</div>
            <p className={styles.conceptText}>Energi tidak pernah hilang — ia hanya <strong>berubah bentuk</strong>. Ep berkurang persis sebesar Ek yang bertambah, sehingga totalnya (Ep+Ek) selalu tetap sepanjang lintasan (tanpa gesekan).</p>
          </div>
        )}
      </div>
    </div>
  )
}
