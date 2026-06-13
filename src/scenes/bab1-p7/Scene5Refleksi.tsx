import { useState } from 'react'
import { OSN_DATA } from './data'
import styles from './ui.module.css'

export function Scene5Refleksi() {
  const [show, setShow] = useState(false)
  const avg = OSN_DATA.reduce((a, b) => a + b, 0) / OSN_DATA.length
  return (
    <>
      <p className={styles.prompt}>Tantangan OSN: satu benda diukur <em>10 kali</em>, hasilnya sedikit beda-beda. Berapa nilai terbaik yang dilaporkan?</p>
      <div className={styles.osnWrap}>
        <div className={styles.chips}>{OSN_DATA.map((v, i) => <span key={i} className={styles.chip}>{v.toFixed(1).replace('.', ',')}</span>)}</div>
        {!show
          ? <button className={styles.osnBtn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Tampilkan nilai terbaik →</button>
          : (
            <div className={styles.osnResult}>
              <span className={styles.osnVal}>rata-rata = {avg.toFixed(2).replace('.', ',')} cm</span>
              <span className={styles.osnWhy}>Nilai terbaik = <b>rata-rata</b> dari semua pengukuran. Mengukur berulang lalu dirata-rata mengurangi kesalahan acak — satu pengukuran saja mudah meleset.</span>
            </div>
          )}
        <div className={styles.reflect}>Renungkan: kenapa hasil pengukuranmu bisa beda dengan kelompok lain walau bendanya sama? (alat, cara baca, paralaks)</div>
      </div>
    </>
  )
}
