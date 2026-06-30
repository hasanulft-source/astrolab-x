import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q:'Air membeku pada suhu berapa di skala Celsius dan Fahrenheit?', correct:'0°C = 32°F', opsi:['0°C = 0°F','0°C = 32°F','0°C = 100°F','0°C = 273°F'] },
  { q:'Mengapa angka 90°F dan 32°C bisa hampir sama panasnya?', correct:'Karena titik nol dan jarak antar-derajat kedua skala berbeda', opsi:['Karena keduanya kebetulan sama','Karena titik nol dan jarak antar-derajat kedua skala berbeda','Karena suhu udara memang selalu berubah','Karena termometer Fahrenheit lebih besar'] },
]

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number,string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki 90°F vs 32°C.</p>
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
        {allDone && !revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Cek jawabanku →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>32°C ≈ 90°F — keduanya memang sangat panas!</div>
            <p className={styles.conceptText}>32°C dalam Fahrenheit = 89,6°F. Jadi temanmu dan kamu sebenarnya merasakan <strong>panas yang hampir sama</strong> — hanya diukur dengan skala berbeda.</p>
          </div>
        )}
      </div>
    </div>
  )
}
