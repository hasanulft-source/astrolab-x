import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene1Hook.module.css'
export function Scene1Hook({ onUnlock }: DiscoverySceneProps) {
  const [shown, setShown] = useState(false)
  const pick = () => { setShown(true); onUnlock() }
  return (
    <>
      <p className={styles.prompt}>Data menunjukkan: <em>nilai IPA kelas turun 8 poin bulan ini.</em> Seorang data analyst tidak berhenti di "nilai turun" — dia bertanya "mengapa?"</p>
      <div className={styles.layout}>
        <div className={styles.dataCard}>
          <div className={styles.dataTitle}>Yang terlihat di data:</div>
          <div className={styles.dataRow}>• Rata-rata IPA: 78 → 70 (turun 8)</div>
          <div className={styles.dataRow}>• Kehadiran: 95% → 82% (turun 13%)</div>
          <div className={styles.dataRow}>• Materi bulan ini: "Tekanan Zat" (topik tersulit)</div>
          <div className={styles.dataRow}>• 5 siswa pindah ke kelas lain</div>
        </div>
        <div className={styles.side}>
          <div className={styles.q}>Kesimpulan mana yang paling KUAT sebagai seorang analyst?</div>
          <div className={styles.opts}>
            {[
              '"Nilai turun karena siswa malas"',
              '"Nilai turun 8 poin, bersamaan dengan turunnya kehadiran dan materi tersulit — kemungkinan ada kaitan, perlu diselidiki lebih lanjut"',
              '"Nilai pasti turun karena guru kurang bagus"',
              '"Nilai turun karena 5 siswa pindah"',
            ].map(o=>(
              <button key={o} className={styles.opt} onClick={pick}>{o}</button>
            ))}
          </div>
          {shown&&<div className={styles.reveal}>
            Kesimpulan analitis yang baik: <b>menyebutkan fakta + mengaitkan variabel + mengakui ketidakpastian.</b> Menyalahkan "siswa malas" atau "guru jelek" adalah lompatan tanpa bukti. Data analyst membedakan apa yang DATA tunjukkan dari apa yang kita ASUMSIKAN.
          </div>}
        </div>
      </div>
    </>
  )
}
