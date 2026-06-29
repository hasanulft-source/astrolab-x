import { useState } from 'react'
import styles from './Scene5Abiotik.module.css'

const FAKTOR = [
  { nama:"Cahaya", satuan:"lux / skala", spot1:"850", spot2:"120", spot3:"12.000", pengaruh:"Menentukan fotosintesis. Zona gelap laut: tidak ada produsen fotosintetik." },
  { nama:"Suhu", satuan:"°C", spot1:"28", spot2:"24", spot3:"32", pengaruh:"Mempengaruhi laju metabolisme, reproduksi, dan distribusi hewan berdarah dingin." },
  { nama:"Kelembaban", satuan:"%", spot1:"70", spot2:"85", spot3:"45", pengaruh:"Menentukan tingkat penguapan air dari tubuh organisme dan ketersediaan air tanah." },
]

const SPOT_LABELS = ["Dalam kelas", "Bawah pohon", "Lapangan"]

export function Scene5Abiotik() {
  const [sel, setSel] = useState<number|null>(null)

  const maxDiff = sel !== null ? Math.max(
    parseFloat(FAKTOR[sel].spot1),
    parseFloat(FAKTOR[sel].spot2),
    parseFloat(FAKTOR[sel].spot3),
  ) - Math.min(
    parseFloat(FAKTOR[sel].spot1),
    parseFloat(FAKTOR[sel].spot2),
    parseFloat(FAKTOR[sel].spot3),
  ) : null

  return (
    <>
      <p className={styles.prompt}>Bandingkan <em>3 faktor abiotik</em> di 3 lokasi berbeda — catat perbedaan dan dampaknya pada organisme.</p>
      <div className={styles.main}>
        <div className={styles.faktList}>
          {FAKTOR.map((f,i) => (
            <button key={i} className={i===sel?styles.faktActive:styles.fakt} onClick={()=>setSel(i)}>
              <div className={styles.faktName}>{f.nama}</div>
              <div className={styles.faktUnit}>{f.satuan}</div>
            </button>
          ))}
        </div>

        {sel !== null ? (
          <div className={styles.detail}>
            <div className={styles.dtTitle}>{FAKTOR[sel].nama} — Perbandingan 3 Spot</div>
            <div className={styles.bars}>
              {[FAKTOR[sel].spot1, FAKTOR[sel].spot2, FAKTOR[sel].spot3].map((val, i) => {
                const maxVal = Math.max(...[FAKTOR[sel].spot1, FAKTOR[sel].spot2, FAKTOR[sel].spot3].map(Number))
                const pct = (parseFloat(val) / maxVal) * 100
                return (
                  <div key={i} className={styles.barRow}>
                    <div className={styles.barLabel}>{SPOT_LABELS[i]}</div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFill} style={{width:`${pct}%`}}/>
                    </div>
                    <div className={styles.barVal}>{val} {FAKTOR[sel].satuan}</div>
                  </div>
                )
              })}
            </div>
            <div className={styles.selisih}>
              Selisih max − min: <strong>{maxDiff} {FAKTOR[sel].satuan}</strong>
            </div>
            <div className={styles.pengaruh}>
              <span className={styles.pengaruhLabel}>Pengaruh pada organisme:</span>
              <p>{FAKTOR[sel].pengaruh}</p>
            </div>
          </div>
        ) : (
          <div className={styles.placeholder}>← Pilih faktor abiotik untuk melihat perbandingan</div>
        )}
      </div>
    </>
  )
}
