import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Waktu() {
  const [jam, setJam] = useState(3)
  const sisa = Math.max(0, 24 - 8 - 7 - jam)
  const status = jam <= 2 ? 'Sehat' : jam <= 4 ? 'Masih wajar' : jam <= 6 ? 'Mulai berlebihan' : 'Berisiko kecanduan'
  const col = jam <= 2 ? '#2a7d52' : jam <= 4 ? '#1f8a7a' : jam <= 6 ? '#b9781a' : '#c0492f'
  return (
    <>
      <p className={styles.prompt}>Geser <em>waktu layar harianmu</em> - lihat dampaknya pada sisa harimu.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.clockWrap}>
            <div className={styles.barRow}><span className={styles.bLbl}>Layar</span><div className={styles.bTrack}><div className={styles.bFill} style={{ width: `${jam / 12 * 100}%`, background: col }} /></div><span className={styles.bVal}>{jam} jam</span></div>
            <div className={styles.barRow}><span className={styles.bLbl}>Hidup nyata</span><div className={styles.bTrack}><div className={styles.bFill} style={{ width: `${sisa / 12 * 100}%`, background: '#7AB2B2' }} /></div><span className={styles.bVal}>{sisa} jam</span></div>
            <div className={styles.hint}>(di luar 8 jam tidur & 7 jam sekolah)</div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.verdict} style={{ background: col }}>{status}</div>
          <div className={styles.sliderRow}><label>Jam main gawai</label><input type="range" min={0} max={12} value={jam} onChange={e => setJam(+e.target.value)} /><span className={styles.val}>{jam}</span></div>
          <div className={styles.note}>{jam <= 4 ? 'Masih ada cukup waktu untuk keluarga, olahraga, dan istirahat.' : 'Waktu untuk hidup nyata makin tergerus - coba kurangi dan atur jadwal layar.'}</div>
        </div>
      </div>
    </>
  )
}
