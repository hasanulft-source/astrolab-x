import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q: 'Apa yang sebenarnya berubah saat garam dilarutkan ke air?', correct: 'Massa jenis air bertambah, sementara massa jenis telur tetap sama', opsi: ['Massa jenis air bertambah, sementara massa jenis telur tetap sama', 'Telur menyerap garam dan menjadi lebih ringan', 'Air garam menghasilkan gas yang mengangkat telur', 'Volume telur mengecil karena garam'] },
  { q: 'Menurut Hukum Archimedes, kapan suatu benda terapung?', correct: 'Ketika massa jenis benda lebih kecil dari massa jenis zat cair', opsi: ['Ketika benda ringan secara mutlak', 'Ketika massa jenis benda lebih kecil dari massa jenis zat cair', 'Ketika benda berbentuk bulat', 'Ketika air cukup dalam'] },
  { q: 'Apa hubungan fenomena telur ini dengan cara kapal selam bekerja?', correct: 'Kapal selam mengatur massa air dalam tangki untuk mengubah massa jenis rata-ratanya, mirip dengan mengubah massa jenis air di sekitar telur', opsi: ['Tidak ada hubungannya sama sekali', 'Kapal selam mengatur massa air dalam tangki untuk mengubah massa jenis rata-ratanya, mirip dengan mengubah massa jenis air di sekitar telur', 'Kapal selam menggunakan mesin untuk melawan gravitasi', 'Kapal selam selalu mengapung secara alami'] },
]

export function Scene3Prinsip({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki telur di air garam dengan tepat.</p>
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
            <div className={styles.conceptTitle}>Terapung atau tenggelam bukan soal berat mutlak — tapi perbandingan massa jenis.</div>
            <p className={styles.conceptText}>Menaikkan massa jenis <strong>fluida</strong> (bukan mengubah bendanya) bisa membuat benda yang sama berubah dari tenggelam jadi terapung. Prinsip yang sama dipakai kapal selam untuk naik-turun di air laut.</p>
          </div>
        )}
      </div>
    </div>
  )
}
