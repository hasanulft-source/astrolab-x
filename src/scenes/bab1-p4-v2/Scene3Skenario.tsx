import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const SKENARIO = [
  {
    situasi: 'Kamu hendak memanaskan larutan dalam tabung reaksi. Rambutmu yang panjang terurai.',
    tindakan: 'Apa yang harus kamu lakukan SEBELUM mulai?',
    opsi: [
      { teks:'Langsung mulai — rambut tidak akan kena kalau hati-hati.', correct:false },
      { teks:'Ikat rambut dan kenakan kacamata pengaman.', correct:true },
      { teks:'Minta teman yang rambutnya pendek untuk melakukannya.', correct:false },
    ],
    insight:'Rambut terurai adalah risiko kebakaran serius di dekat api. Selalu ikat rambut dan kenakan APD sebelum menyalakan pembakar.',
  },
  {
    situasi: 'Saat percobaan, larutan kimia tidak sengaja tumpah ke tanganmu.',
    tindakan: 'Apa yang harus dilakukan pertama kali?',
    opsi: [
      { teks:'Bersihkan dengan tisu secepat mungkin.', correct:false },
      { teks:'Langsung bilas dengan air mengalir selama minimal 15 menit.', correct:true },
      { teks:'Lapor ke guru dulu sebelum melakukan apapun.', correct:false },
    ],
    insight:'Bilas pertama adalah prioritas — air mengalir membantu mengencerkan dan menghilangkan zat kimia. Setelah membilas, baru lapor ke guru.',
  },
  {
    situasi: 'Kamu menemukan botol berisi cairan bening tanpa label di rak laboratorium.',
    tindakan: 'Apa yang harus kamu lakukan?',
    opsi: [
      { teks:'Cium untuk mengidentifikasi zat di dalamnya.', correct:false },
      { teks:'Abaikan saja, tidak usah digunakan.', correct:false },
      { teks:'Jangan sentuh — laporkan ke guru untuk diidentifikasi dengan aman.', correct:true },
    ],
    insight:'Mencium zat kimia langsung sangat berbahaya. Zat tidak berlabel adalah zat tidak dikenal — selalu laporkan dan jangan pernah digunakan sampai teridentifikasi.',
  },
]

export function Scene3Skenario({ onUnlock }: DiscoverySceneProps) {
  const [idx, setIdx]   = useState(0)
  const [pick, setPick] = useState<number | null>(null)
  const done = pick !== null
  const q = SKENARIO[idx]

  const next = () => {
    if (idx === SKENARIO.length - 1) onUnlock()
    else { setIdx(i => i + 1); setPick(null) }
  }

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Situasi darurat — apa tindakan yang tepat?</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>{q.situasi}</div>
        <div className={styles.caseQ}>{q.tindakan}</div>
        <div className={styles.caseOpts}>
          {q.opsi.map((o, i) => {
            const isPicked = pick === i
            const right = done && o.correct
            const wrong = done && isPicked && !o.correct
            return (
              <button key={i}
                className={`${styles.caseOpt} ${isPicked ? styles.casePicked : ''} ${right ? styles.caseRight : ''} ${wrong ? styles.caseWrong : ''}`}
                onClick={() => { if (!done) setPick(i) }}
                disabled={done}>
                {o.teks}
              </button>
            )
          })}
        </div>
        {done && <div className={styles.insight}><span className={styles.insightIcon}>💡</span>{q.insight}</div>}
        {done && <button className={styles.revealBtn} onClick={next} style={{marginTop:8}}>
          {idx < SKENARIO.length - 1 ? 'Skenario berikutnya →' : 'Selesai →'}
        </button>}
      </div>
      <div className={styles.caseProgress}>{idx + 1} / {SKENARIO.length}</div>
    </div>
  )
}
