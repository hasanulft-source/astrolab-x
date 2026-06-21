import { useState } from 'react'
import styles from './ui.module.css'
const CRACK = ['instan', 'beberapa detik', 'beberapa jam', 'beberapa tahun', 'ribuan tahun']
const LABEL = ['Sangat lemah', 'Lemah', 'Sedang', 'Kuat', 'Sangat kuat']
const COL = ['#c0492f', '#c0492f', '#b9781a', '#2a7d52', '#1f7a4a']
export function Scene2Sandi() {
  const [o, setO] = useState([false, false, false, false])
  const toggle = (i: number) => setO(v => v.map((x, k) => k === i ? !x : x))
  const score = o.filter(Boolean).length
  let pw = o[0] ? 'kucingbirumanis' : 'kucing'
  if (o[1]) pw = pw.replace('kucing', 'Kucing').replace('biru', 'Biru').replace('manis', 'Manis')
  if (o[2]) pw += '24'
  if (o[3]) pw += '!'
  return (
    <>
      <p className={styles.prompt}>Bangun kata sandi yang kuat - aktifkan tiap unsur, lihat <em>kekuatannya.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.pwWrap}>
            <div className={styles.pwShow}>{pw}</div>
            <div className={styles.meterTrack}><div className={styles.meterFill} style={{ width: `${score / 4 * 100}%`, background: COL[score] }} /></div>
            <div className={styles.pwLabel} style={{ color: COL[score] }}>{LABEL[score]}</div>
            <div className={styles.crack}>Perkiraan waktu dibobol: <b>{CRACK[score]}</b></div>
          </div>
        </div>
        <div className={styles.side}>
          <label className={`${styles.opt} ${o[0] ? styles.optOn : ''}`}><input type="checkbox" checked={o[0]} onChange={() => toggle(0)} /> Panjang (12+ karakter)</label>
          <label className={`${styles.opt} ${o[1] ? styles.optOn : ''}`}><input type="checkbox" checked={o[1]} onChange={() => toggle(1)} /> Huruf besar & kecil</label>
          <label className={`${styles.opt} ${o[2] ? styles.optOn : ''}`}><input type="checkbox" checked={o[2]} onChange={() => toggle(2)} /> Mengandung angka</label>
          <label className={`${styles.opt} ${o[3] ? styles.optOn : ''}`}><input type="checkbox" checked={o[3]} onChange={() => toggle(3)} /> Mengandung simbol (!@#)</label>
        </div>
      </div>
    </>
  )
}
