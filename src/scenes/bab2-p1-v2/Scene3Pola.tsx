import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q:'Mengapa benda padat punya bentuk tetap?', correct:'Partikel bergetar di tempat, tidak berpindah posisi', opsi:['Partikel bergetar di tempat, tidak berpindah posisi','Partikel tidak bergerak sama sekali','Partikel terlalu berat untuk bergerak','Partikel saling menempel dengan lem'] },
  { q:'Mengapa zat cair bisa mengikuti bentuk wadahnya?', correct:'Partikel bisa bergeser bebas meski jaraknya rapat', opsi:['Partikel sangat kecil ukurannya','Partikel bisa bergeser bebas meski jaraknya rapat','Partikel cair lebih ringan dari padat','Zat cair tidak punya partikel'] },
  { q:'Mengapa gas bisa memenuhi seluruh ruangan?', correct:'Partikel bergerak sangat cepat dan jaraknya sangat jauh', opsi:['Gas tidak punya berat','Partikel bergerak sangat cepat dan jaraknya sangat jauh','Gas selalu naik ke atas','Partikel gas saling tolak-menolak kuat'] },
]

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number,string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Hubungkan apa yang kamu lihat dengan sifat yang kamu kenal sehari-hari.</p>
      <div className={styles.questPanel}>
        {QUESTIONS.map((q, qi) => (
          <div key={qi} className={styles.questItem}>
            <div className={styles.questText}>{q.q}</div>
            <div className={styles.questOpts}>
              {q.opsi.map(o => {
                const picked = answers[qi] === o
                const correct = revealed && o === q.correct
                const wrong = revealed && picked && o !== q.correct
                return (
                  <button key={o} className={`${styles.questOpt} ${picked?styles.picked:''} ${correct?styles.optCorrect:''} ${wrong?styles.optWrong:''}`}
                    onClick={() => !revealed && setAnswers(a => ({...a,[qi]:o}))} disabled={revealed}>{o}</button>
                )
              })}
            </div>
          </div>
        ))}
        {allDone && !revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Cek pemahamanku →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Kamu baru menemukan model partikel zat.</div>
            <p className={styles.conceptText}>Sifat makroskopik (bentuk, aliran) yang kita lihat sehari-hari sebenarnya adalah hasil dari <strong>perilaku partikel</strong> yang terlalu kecil untuk dilihat mata.</p>
          </div>
        )}
      </div>
    </div>
  )
}
