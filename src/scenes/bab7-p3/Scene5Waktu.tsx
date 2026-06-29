import { useState } from 'react'
import styles from './Scene5Waktu.module.css'

const KOTA = [
  { nama:"Banda Aceh (WIB)",  utc:7,  flag:"🇮🇩" },
  { nama:"Jakarta (WIB)",     utc:7,  flag:"🇮🇩" },
  { nama:"Makassar (WITA)",   utc:8,  flag:"🇮🇩" },
  { nama:"Jayapura (WIT)",    utc:9,  flag:"🇮🇩" },
  { nama:"Tokyo (JST)",       utc:9,  flag:"🇯🇵" },
  { nama:"Dubai (GST)",       utc:4,  flag:"🇦🇪" },
  { nama:"London (GMT)",      utc:0,  flag:"🇬🇧" },
  { nama:"New York (EST)",    utc:-5, flag:"🇺🇸" },
  { nama:"Los Angeles (PST)", utc:-8, flag:"🇺🇸" },
]

function formatTime(h: number): string {
  const mod = ((h % 24) + 24) % 24
  return `${String(mod).padStart(2,'0')}.00`
}

export function Scene5Waktu() {
  const [baseCity, setBaseCity] = useState(0)
  const [baseHour, setBaseHour] = useState(7)

  const bc = KOTA[baseCity]

  return (
    <>
      <p className={styles.prompt}>Kalkulator <em>zona waktu</em> — Bumi berputar 15° per jam = 1 jam per 15° bujur.</p>
      <div className={styles.main}>
        <div className={styles.leftPanel}>
          <div className={styles.ctrlGroup}>
            <div className={styles.ctrlLabel}>Kota referensi:</div>
            <select value={baseCity} onChange={e=>setBaseCity(+e.target.value)} className={styles.select}>
              {KOTA.map((k,i) => <option key={i} value={i}>{k.flag} {k.nama}</option>)}
            </select>
          </div>
          <div className={styles.ctrlGroup}>
            <div className={styles.ctrlLabel}>Pukul di kota ini: {String(baseHour).padStart(2,'0')}.00</div>
            <input type="range" min={0} max={23} value={baseHour}
              onChange={e=>setBaseHour(+e.target.value)} className={styles.slider}/>
          </div>
          <div className={styles.formula}>
            <div className={styles.fTitle}>Rumus:</div>
            <div className={styles.fText}>Waktu kota X = Waktu referensi + (UTC_X − UTC_{bc.nama.split(" ")[0]})</div>
            <div className={styles.fText}>Bumi = 360° ÷ 24 jam = <strong>15°/jam</strong></div>
            <div className={styles.fText}>Setiap 15° bujur = <strong>1 jam</strong> perbedaan</div>
          </div>
        </div>
        <div className={styles.cityList}>
          {KOTA.map((k, i) => {
            const diff = k.utc - bc.utc
            const t = baseHour + diff
            const isBase = i === baseCity
            return (
              <div key={i} className={`${styles.cityRow} ${isBase ? styles.cityRowBase : ''}`}>
                <div className={styles.cityFlag}>{k.flag}</div>
                <div className={styles.cityInfo}>
                  <div className={styles.cityName}>{k.nama}</div>
                  <div className={styles.cityUtc}>UTC{k.utc>=0?"+":""}{k.utc}</div>
                </div>
                <div className={styles.cityTime}>{formatTime(t)}</div>
                {!isBase && (
                  <div className={`${styles.cityDiff} ${diff > 0 ? styles.positive : styles.negative}`}>
                    {diff > 0 ? "+" : ""}{diff} jam
                  </div>
                )}
                {isBase && <div className={styles.baseTag}>Referensi</div>}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
