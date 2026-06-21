import { useState } from 'react'
import styles from './ui.module.css'
const RES = ['~2,4 juta', '~340 ribu', '~12 ribu', '~90']
export function Scene2Query() {
  const [imp, setImp] = useState([false, false, false])
  const toggle = (i: number) => setImp(v => v.map((x, k) => k === i ? !x : x))
  const n = imp.filter(Boolean).length
  let q = 'kucing'
  if (imp[0]) q = 'cara merawat bulu kucing persia'
  if (imp[1]) q += ' "bulu rontok"'
  if (imp[2]) q += ' site:halodoc.com'
  const rel = 22 + n * 26
  return (
    <>
      <p className={styles.prompt}>Aktifkan tiap teknik - amati <em>kueri menyempit</em> dan hasil makin relevan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.searchBox}>
            <div className={styles.queryBar}>{q}</div>
            <div className={styles.resCount}>{RES[n]} hasil</div>
            <div className={styles.relWrap}><div className={styles.relTrack}><div className={styles.relFill} style={{ width: `${rel}%` }} /></div><span className={styles.relLbl}>relevansi {rel}%</span></div>
          </div>
        </div>
        <div className={styles.side}>
          <label className={styles.opt}><input type="checkbox" checked={imp[0]} onChange={() => toggle(0)} /> Kata kunci spesifik</label>
          <label className={styles.opt}><input type="checkbox" checked={imp[1]} onChange={() => toggle(1)} /> Frasa dalam tanda kutip "..."</label>
          <label className={styles.opt}><input type="checkbox" checked={imp[2]} onChange={() => toggle(2)} /> Batasi sumber (site:)</label>
          <div className={styles.note}>{n === 0 ? 'Kata kunci umum menghasilkan jutaan halaman tak relevan.' : n === 3 ? 'Kueri kini sangat tepat - hasil sedikit tapi langsung mengena.' : 'Tiap teknik mempersempit pencarian ke arah yang kamu maksud.'}</div>
        </div>
      </div>
    </>
  )
}
