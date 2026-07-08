import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q: 'Mengunyah di mulut termasuk pencernaan apa?', correct: 'Mekanik', opsi: ['Mekanik', 'Kimiawi', 'Keduanya sekaligus', 'Bukan pencernaan'] },
  { q: 'Kerja enzim (ptialin, pepsin) termasuk pencernaan apa?', correct: 'Kimiawi', opsi: ['Mekanik', 'Kimiawi', 'Fisik saja', 'Tidak termasuk pencernaan'] },
  { q: 'Mengapa makanan perlu dikunyah dulu sebelum enzim bekerja maksimal?', correct: 'Potongan kecil punya luas permukaan lebih besar untuk enzim', opsi: ['Potongan kecil punya luas permukaan lebih besar untuk enzim', 'Supaya rasanya lebih enak', 'Karena mulut tidak bisa menelan benda besar', 'Tidak ada hubungannya dengan enzim'] },
]

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki mengunyah dari awal.</p>
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
            <div className={styles.conceptTitle}>Mengunyah bukan basa-basi — itu pencernaan mekanik yang mempercepat kerja kimiawi.</div>
            <p className={styles.conceptText}>Semakin kecil potongan makanan, semakin besar <strong>luas permukaan</strong> yang bisa disentuh enzim — pencernaan jadi jauh lebih cepat dan efisien.</p>
          </div>
        )}
      </div>
    </div>
  )
}
