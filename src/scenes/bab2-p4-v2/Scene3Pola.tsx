import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q:'Pada garis datar pertama (0°C), apa yang sedang terjadi?', correct:'Es sedang mencair menjadi air (perubahan wujud)', opsi:['Es bertambah dingin','Es sedang mencair menjadi air (perubahan wujud)','Termometer rusak','Api dipadamkan sesaat'] },
  { q:'Pada garis datar kedua (100°C), apa yang sedang terjadi?', correct:'Air sedang menguap menjadi uap (mendidih)', opsi:['Air sedang menguap menjadi uap (mendidih)','Air sudah habis semua','Suhu maksimal air tercapai','Panci terlalu penuh'] },
  { q:'Mengapa suhu tidak naik selama perubahan wujud terjadi?', correct:'Energi dipakai untuk memutus ikatan partikel, bukan menambah gerak partikel', opsi:['Karena api dikurangi secara otomatis','Energi dipakai untuk memutus ikatan partikel, bukan menambah gerak partikel','Karena air menyerap kalor dari udara sekitar','Suhu memang tidak pernah naik terus-menerus'] },
]

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number,string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang jawab pertanyaan di awal — dengan bukti dari grafikmu sendiri.</p>
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
            <div className={styles.conceptTitle}>Itulah yang disebut "kalor laten" — energi tersembunyi.</div>
            <p className={styles.conceptText}>Selama perubahan wujud (plateau), seluruh energi dipakai untuk <strong>memutus ikatan antar-partikel</strong>, bukan mempercepat geraknya. Itulah mengapa suhu "diam" sementara.</p>
          </div>
        )}
      </div>
    </div>
  )
}
