import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene4Konfirmasi({ onUnlock }: DiscoverySceneProps) {
  const [now, setNow] = useState<number | null>(null)
  const confirm = (i: number) => { if (now === null) { setNow(i); onUnlock() } }
  const correct = 1

  return (
    <div className={styles.confirmPanel}>
      <div className={styles.confirmLeft}>
        <div className={styles.mirrorCard}>
          <div className={styles.mirrorLabel}>Prediksimu di awal</div>
          <div className={styles.mirrorText}>"Lihat Catatan Ilmuwan-mu — apa yang kamu tulis?"</div>
          <div className={styles.mirrorSub}>Setelah mempelajari skala, presisi, dan akurasi — apakah jawabanmu berubah?</div>
        </div>
        <div className={styles.nowLabel}>Kelompok A dan B mengukur benda sama dan mendapat hasil berbeda. Penyebab paling mungkin adalah:</div>
        <div className={styles.confirmChoices}>
          {[
            'Salah satu kelompok tidak jujur.',
            'Alat berbeda atau cara membaca skala berbeda — menyebabkan perbedaan presisi/akurasi.',
            'Benda yang diukur memang berubah.',
            'Pengukuran tidak bisa dipercaya sama sekali.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.confirmOpt} ${now === i ? (i === correct ? styles.optRight : styles.optWrong) : ''}`}
              onClick={() => confirm(i)} disabled={now !== null}>{c}</button>
          ))}
        </div>
      </div>
      {now !== null && (
        <div className={styles.confirmRight}>
          <div className={`${styles.reflectCard} ${now === correct ? styles.reflectGood : styles.reflectGrow}`}>
            <div className={styles.reflectIcon}>{now === correct ? '✨' : '🔬'}</div>
            <div className={styles.reflectTitle}>{now === correct ? 'Tepat!' : 'Pemahaman yang berkembang.'}</div>
            <p>Perbedaan hasil bisa disebabkan oleh <strong>keterbatasan alat</strong> (resolusi skala berbeda) atau <strong>kesalahan pembacaan</strong> (parallax, meniskus). Bukan karena curang.</p>
            <p className={styles.reflectNote}>Dalam sains, perbedaan hasil dianalisis — bukan dihakimi. Kita cari sumbernya, lalu perbaiki prosedurnya.</p>
          </div>
        </div>
      )}
    </div>
  )
}
