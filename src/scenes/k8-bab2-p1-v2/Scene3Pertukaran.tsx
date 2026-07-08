import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q: 'Di organ mana pertukaran oksigen dan CO₂ sebenarnya terjadi?', correct: 'Alveolus', opsi: ['Trakea', 'Bronkus', 'Alveolus', 'Laring'] },
  { q: 'Mengapa alveolus dindingnya sangat tipis (hanya 1 sel)?', correct: 'Agar gas bisa berpindah secepat dan semudah mungkin', opsi: ['Agar gas bisa berpindah secepat dan semudah mungkin', 'Supaya alveolus lebih ringan', 'Karena tidak butuh perlindungan', 'Tidak ada alasan khusus'] },
  { q: 'Apa hubungan antara "jutaan alveolus kecil" dengan efisiensi pernapasan?', correct: 'Jutaan kantung kecil menciptakan luas permukaan total yang sangat besar untuk pertukaran gas', opsi: ['Jutaan kantung kecil menciptakan luas permukaan total yang sangat besar untuk pertukaran gas', 'Semakin banyak kantung, semakin berat paru-paru', 'Tidak ada hubungannya', 'Kantung kecil hanya untuk menyimpan udara cadangan'] },
]

export function Scene3Pertukaran({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki jutaan kantung kecil di awal.</p>
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
            <div className={styles.conceptTitle}>Luas permukaan besar = pertukaran gas efisien.</div>
            <p className={styles.conceptText}>Jutaan alveolus dengan dinding setipis satu sel menciptakan <strong>luas permukaan total yang sangat besar</strong> — jauh lebih besar dari yang mungkin dicapai satu ruang kosong berukuran sama. Inilah alasan struktur paru-paru dipecah sedemikian rupa.</p>
          </div>
        )}
      </div>
    </div>
  )
}
