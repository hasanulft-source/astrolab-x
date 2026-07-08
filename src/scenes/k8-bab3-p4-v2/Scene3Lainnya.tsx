import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q: 'Jika Lk = 4m dan Lb = 1m, berapa Keuntungan Mekanik (KM)?', correct: '4', opsi: ['1', '2', '4', '5'] },
  { q: 'Dengan KM = 4, untuk mengangkat beban 200 N, berapa gaya kuasa yang dibutuhkan?', correct: '50 N', opsi: ['800 N', '200 N', '100 N', '50 N'] },
  { q: 'Apa konsekuensi dari memperbesar KM dengan memperpanjang lengan kuasa?', correct: 'Gaya yang dibutuhkan lebih kecil, tapi jarak/jangkauan yang harus ditempuh gaya kuasa jadi lebih jauh', opsi: ['Tidak ada konsekuensi apa pun', 'Gaya yang dibutuhkan lebih kecil, tapi jarak/jangkauan yang harus ditempuh gaya kuasa jadi lebih jauh', 'Beban jadi lebih ringan secara permanen', 'KM besar selalu lebih baik tanpa trade-off'] },
]

export function Scene3Lainnya({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki gagang pintu dari awal, dengan hitungan yang tepat.</p>
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
            <div className={styles.conceptTitle}>Keuntungan mekanik selalu punya trade-off.</div>
            <p className={styles.conceptText}>Semakin besar KM, semakin kecil gaya yang dibutuhkan — tapi semakin jauh jarak yang harus ditempuh gaya kuasa. <strong>Tidak ada pesawat sederhana yang mengurangi total usaha</strong> — ia hanya menukar gaya besar-jarak pendek menjadi gaya kecil-jarak panjang.</p>
          </div>
        )}
      </div>
    </div>
  )
}
