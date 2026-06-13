import styles from './ui.module.css'
import { Frac } from '../../components/Frac'

export function Scene5Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Suhu itu ukuran <em>derajat panas</em> — dan skalanya cuma cara berbeda menuliskannya.</p>
      <div className={styles.main}>
        <div className={styles.formulas}>
          <div className={styles.field}><span className={styles.fLabel}>exit ticket</span><p>Konversikan 37°C ke Fahrenheit, Kelvin, dan Reamur.</p></div>
          <div className={styles.field}><span className={styles.fLabel}>renungkan</span><p>Kenapa suhu tubuh normal manusia 37°C, bukan 0°C atau 100°C?</p></div>
        </div>
        <div className={styles.worked}>
          <div className={styles.reflect}>Ingat “kurs”-nya: <b>F = C×<Frac top="9" bottom="5" />+32</b>, <b>K = C+273</b>, <b>R = C×<Frac top="4" bottom="5" /></b>. Sekali hafal, kamu bisa pindah antar skala kapan saja.</div>
        </div>
      </div>
    </>
  )
}
