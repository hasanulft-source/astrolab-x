import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q: 'Mengapa sisi cekung sendok menampilkan wajah terbalik?', correct: 'Cermin cekung mengumpulkan cahaya dan bisa membentuk bayangan nyata terbalik saat benda cukup dekat', opsi: ['Karena sisi cekung lebih gelap', 'Cermin cekung mengumpulkan cahaya dan bisa membentuk bayangan nyata terbalik saat benda cukup dekat', 'Karena logam sendok memantulkan cahaya secara acak', 'Sisi cekung tidak benar-benar memantulkan cahaya'] },
  { q: 'Mengapa sisi cembung sendok menampilkan wajah tegak dan kecil?', correct: 'Cermin cembung selalu menyebarkan cahaya, menghasilkan bayangan maya tegak yang diperkecil', opsi: ['Cermin cembung selalu menyebarkan cahaya, menghasilkan bayangan maya tegak yang diperkecil', 'Karena permukaannya lebih halus', 'Karena jaraknya lebih jauh dari mata', 'Sisi cembung membalik gambar dua kali sehingga tegak lagi'] },
  { q: 'Kaca spion mobil menggunakan cermin cembung. Mengapa ini dipilih, bukan cermin datar?', correct: 'Cermin cembung memperluas bidang pandang meski bayangannya diperkecil — pengemudi bisa melihat area lebih luas', opsi: ['Karena cermin cembung lebih murah untuk diproduksi', 'Cermin cembung memperluas bidang pandang meski bayangannya diperkecil — pengemudi bisa melihat area lebih luas', 'Karena cermin datar tidak tahan cuaca', 'Tidak ada alasan khusus, hanya kebiasaan pabrikan'] },
]

export function Scene3Bayangan({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki sendok cekung-cembung dengan tepat.</p>
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
            <div className={styles.conceptTitle}>Bentuk permukaan menentukan nasib cahaya yang mengenainya.</div>
            <p className={styles.conceptText}>Permukaan <strong>cekung mengumpulkan</strong> cahaya, permukaan <strong>cembung menyebarkan</strong> cahaya — inilah mengapa satu sendok bisa menghasilkan dua bayangan yang sangat berbeda di kedua sisinya.</p>
          </div>
        )}
      </div>
    </div>
  )
}
