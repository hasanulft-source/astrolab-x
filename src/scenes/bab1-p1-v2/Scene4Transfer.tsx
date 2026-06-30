import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const KASUS = [
  {
    situasi: 'Temanmu bilang: "Minum air es bikin sakit tenggorokan." Apakah ini pernyataan ilmiah?',
    opsi: [
      { teks:'Ya, karena banyak orang percaya itu.', correct:false },
      { teks:'Belum — perlu diuji dulu apakah ada hubungan sebab-akibat yang nyata.', correct:true },
      { teks:'Ya, karena berdasarkan pengalaman pribadi.', correct:false },
    ],
    insight:'Pengalaman pribadi adalah titik awal observasi yang baik — tapi bukan bukti ilmiah. Perlu eksperimen terkontrol untuk membuktikannya.',
  },
  {
    situasi: 'Seorang dokter menemukan bahwa pasien yang tidur lebih lama sembuh lebih cepat. Langkah sains apa yang sudah dilakukan?',
    opsi: [
      { teks:'Hipotesis.', correct:false },
      { teks:'Observasi — ia mengamati pola tanpa menguji secara aktif.', correct:true },
      { teks:'Kesimpulan — ia sudah menemukan jawabannya.', correct:false },
    ],
    insight:'Observasi adalah langkah pertama. Dari sini dokter perlu membuat hipotesis: "Apakah tidur lebih lama mempercepat pemulihan?" — lalu merancang eksperimen.',
  },
  {
    situasi: '"Tanaman tumbuh lebih cepat dengan musik klasik." Apa yang perlu dilakukan untuk menguji ini secara ilmiah?',
    opsi: [
      { teks:'Tanya pendapat banyak orang tentang tanaman dan musik.', correct:false },
      { teks:'Cari referensi di internet.', correct:false },
      { teks:'Tanam dua kelompok tanaman identik: satu dengan musik, satu tanpa. Ukur pertumbuhannya.', correct:true },
    ],
    insight:'Ini eksperimen terkontrol — satu variabel diubah (musik), semua lain sama. Hasilnya bisa dibandingkan secara objektif.',
  },
]

export function Scene4Transfer({ onUnlock }: DiscoverySceneProps) {
  const [active, setActive] = useState(0)
  const [picks, setPicks]   = useState<Record<number, number>>({})
  const [shown, setShown]   = useState<Record<number, boolean>>({})

  const pick = (ci: number, oi: number) => {
    if (picks[ci] !== undefined) return
    const np = { ...picks, [ci]: oi }
    setPicks(np)
    setShown(s => ({ ...s, [ci]: true }))
    if (Object.keys(np).length === KASUS.length) onUnlock()
  }
  const c = KASUS[active]

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Terapkan cara berpikir ilmiah ke situasi nyata.</p>
      <div className={styles.caseNav}>
        {KASUS.map((_, i) => (
          <button key={i} className={`${styles.caseTab} ${active === i ? styles.caseTabOn : ''} ${picks[i] !== undefined ? styles.caseTabDone : ''}`}
            onClick={() => setActive(i)}>Kasus {i + 1} {picks[i] !== undefined ? '✓' : ''}</button>
        ))}
      </div>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>{c.situasi}</div>
        <div className={styles.caseOpts}>
          {c.opsi.map((o, i) => {
            const isPicked = picks[active] === i
            const right = shown[active] && o.correct
            const wrong = shown[active] && isPicked && !o.correct
            return (
              <button key={i}
                className={`${styles.caseOpt} ${isPicked ? styles.casePicked : ''} ${right ? styles.caseRight : ''} ${wrong ? styles.caseWrong : ''}`}
                onClick={() => pick(active, i)} disabled={picks[active] !== undefined}>
                {o.teks}
              </button>
            )
          })}
        </div>
        {shown[active] && <div className={styles.insight}><span className={styles.insightIcon}>💡</span>{c.insight}</div>}
      </div>
      <div className={styles.caseProgress}>{Object.keys(picks).length} / {KASUS.length} kasus selesai</div>
    </div>
  )
}
