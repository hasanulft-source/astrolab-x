import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q:'Mengapa grafik s-t GLB berbentuk garis lurus?', correct:'Karena jarak bertambah dengan jumlah sama setiap detik (kecepatan tetap)', opsi:['Karena waktunya selalu sama','Karena jarak bertambah dengan jumlah sama setiap detik (kecepatan tetap)','Karena mobil tidak benar-benar bergerak','Garis lurus hanya kebetulan'] },
  { q:'Apa yang ditunjukkan oleh kemiringan (gradien) grafik s-t?', correct:'Kecepatan benda', opsi:['Jarak total','Kecepatan benda','Waktu tempuh','Berat benda'] },
]

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number,string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki dua mobil di awal.</p>
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
            <div className={styles.conceptTitle}>Grafik bercerita tanpa kata-kata.</div>
            <p className={styles.conceptText}>Mobil A (GLB) grafiknya <strong>garis lurus</strong> karena kecepatannya konstan. Mobil B grafiknya <strong>melengkung</strong> karena kecepatannya bertambah — itulah GLBB yang akan kita pelajari berikutnya.</p>
          </div>
        )}
      </div>
    </div>
  )
}
