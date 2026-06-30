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
          <div className={styles.mirrorLabel}>Hipotesismu di awal</div>
          <div className={styles.mirrorText}>"Lihat Catatan Ilmuwan-mu — apa yang kamu tulis?"</div>
          <div className={styles.mirrorSub}>Setelah mengeksplorasi dan memahami variabel — apakah penjelasanmu berubah?</div>
        </div>
        <div className={styles.nowLabel}>Penjelasan paling tepat mengapa telur mengapung di air garam adalah:</div>
        <div className={styles.confirmChoices}>
          {[
            'Garam membuat air lebih kuat menahan benda.',
            'Garam meningkatkan kerapatan (ρ) air — saat ρ air > ρ telur, telur mengapung.',
            'Garam mengubah permukaan telur menjadi lebih ringan.',
            'Air garam menghasilkan gelembung yang mendorong telur ke atas.',
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
            <p>Garam meningkatkan <strong>kerapatan (ρ) air</strong>. Hukum Archimedes menyatakan: benda akan mengapung jika kerapatan fluida lebih besar dari kerapatan benda. Saat ρ air garam melampaui ρ telur (~1,08 g/mL), telur terangkat.</p>
            <p className={styles.reflectNote}>Inilah yang disebut <em>kesimpulan berbasis bukti</em> — bukan sekadar dugaan.</p>
          </div>
        </div>
      )}
    </div>
  )
}
