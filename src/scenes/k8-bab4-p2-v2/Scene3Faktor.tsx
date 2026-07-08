import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q: 'Apa saja 3 faktor yang menentukan besarnya tekanan hidrostatis?', correct: 'Massa jenis zat cair, percepatan gravitasi, dan kedalaman', opsi: ['Hanya kedalaman', 'Massa jenis zat cair, percepatan gravitasi, dan kedalaman', 'Suhu air dan warnanya', 'Ukuran wadah tempat air berada'] },
  { q: 'Apakah bentuk/lebar wadah memengaruhi tekanan hidrostatis pada kedalaman tertentu?', correct: 'Tidak — tekanan hanya bergantung kedalaman, bukan bentuk wadah', opsi: ['Ya, wadah lebih lebar tekanannya lebih besar', 'Tidak — tekanan hanya bergantung kedalaman, bukan bentuk wadah', 'Ya, tapi hanya untuk wadah berbentuk bulat', 'Tergantung warna wadahnya'] },
  { q: 'Mengapa penyelam profesional harus naik ke permukaan secara perlahan?', correct: 'Agar tubuh bisa menyesuaikan diri dengan perubahan tekanan hidrostatis secara bertahap', opsi: ['Supaya tidak kedinginan', 'Agar tubuh bisa menyesuaikan diri dengan perubahan tekanan hidrostatis secara bertahap', 'Karena oksigen di tabung terbatas', 'Tidak ada alasan khusus, hanya kebiasaan'] },
]

export function Scene3Faktor({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki telinga sakit saat menyelam dengan tepat.</p>
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
            <div className={styles.conceptTitle}>Semakin dalam, semakin banyak "berat air" di atasmu.</div>
            <p className={styles.conceptText}>Tekanan hidrostatis murni fungsi kedalaman — <strong>bukan bentuk wadah</strong>. Inilah mengapa telingamu terasa sakit saat menyelam dalam, meski air di sekelilingmu terlihat sama seperti di permukaan.</p>
          </div>
        )}
      </div>
    </div>
  )
}
