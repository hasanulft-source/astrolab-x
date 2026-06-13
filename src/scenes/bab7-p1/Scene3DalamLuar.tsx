import styles from './ui.module.css'
import { PLANETS } from './data'
const ROWS = [
  { k: 'Letak', dalam: 'Dekat Matahari', luar: 'Jauh dari Matahari' },
  { k: 'Ukuran', dalam: 'Kecil', luar: 'Sangat besar' },
  { k: 'Penyusun', dalam: 'Batuan padat', luar: 'Gas & es' },
  { k: 'Contoh', dalam: 'Merkurius - Mars', luar: 'Jupiter - Neptunus' },
]
export function Scene3DalamLuar() {
  const dalam = PLANETS.filter(p => p.jenis === 'dalam')
  const luar = PLANETS.filter(p => p.jenis === 'luar')
  return (
    <>
      <p className={styles.prompt}>Delapan planet terbagi dua, dipisahkan <em>sabuk asteroid.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.compare}>
          <div className={styles.col}>
            <div className={styles.colH}>Planet Dalam</div>
            <div className={styles.colChips}>{dalam.map(p => <span key={p.id} className={styles.chip} style={{ borderColor: p.warna }}>{p.nama}</span>)}</div>
          </div>
          <div className={styles.belt}><span>sabuk<br />asteroid</span></div>
          <div className={styles.col}>
            <div className={styles.colH}>Planet Luar</div>
            <div className={styles.colChips}>{luar.map(p => <span key={p.id} className={styles.chip} style={{ borderColor: p.warna }}>{p.nama}</span>)}</div>
          </div>
        </div>
        <div className={styles.cmpTable}>
          {ROWS.map(r => (
            <div key={r.k} className={styles.cmpRow}>
              <span className={styles.cmpK}>{r.k}</span><span className={styles.cmpV}>{r.dalam}</span><span className={styles.cmpV}>{r.luar}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
