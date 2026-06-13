import styles from './ui.module.css'
const ROWS = [
  { k: 'Gerak', rot: 'Berputar pada poros sendiri', rev: 'Mengelilingi Matahari' },
  { k: 'Periode', rot: '~24 jam (1 hari)', rev: '~365¼ hari (1 tahun)' },
  { k: 'Akibat', rot: 'Siang-malam, gerak semu, beda waktu', rev: 'Musim, beda lama siang-malam' },
]
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Dua gerak, dua akibat yang <em>berbeda.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.cmp}>
          <div className={styles.cRow + ' ' + styles.cHead}><span className={styles.cK}></span><span className={styles.cV}>Rotasi</span><span className={styles.cV}>Revolusi</span></div>
          {ROWS.map(r => <div key={r.k} className={styles.cRow}><span className={styles.cK}>{r.k}</span><span className={styles.cV}>{r.rot}</span><span className={styles.cV}>{r.rev}</span></div>)}
        </div>
        <div className={styles.exit}>Keduanya berlangsung <b>bersamaan</b>: Bumi berputar sambil mengelilingi Matahari - itulah ritme hari dan tahun kita.</div>
      </div>
    </>
  )
}
