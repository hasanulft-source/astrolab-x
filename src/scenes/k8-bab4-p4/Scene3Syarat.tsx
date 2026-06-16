import styles from './ui.module.css'
const ROWS = [
  { s: 'Terapung', c: 'ρ benda < ρ cair', k: 'Sebagian benda muncul di atas permukaan.', col: '#2a7d52' },
  { s: 'Melayang', c: 'ρ benda = ρ cair', k: 'Benda diam di tengah, seluruhnya terendam.', col: '#b9781a' },
  { s: 'Tenggelam', c: 'ρ benda > ρ cair', k: 'Benda turun sampai ke dasar.', col: '#c0492f' },
]
export function Scene3Syarat() {
  return (
    <>
      <p className={styles.prompt}>Tiga keadaan benda di zat cair - semua ditentukan oleh <em>massa jenis.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'center', gap: 11 }}>
          {ROWS.map(r => (
            <div key={r.s} className={styles.row}>
              <span className={styles.rowS} style={{ background: r.col }}>{r.s}</span>
              <span className={styles.rowC}>{r.c}</span>
              <span className={styles.rowK}>{r.k}</span>
            </div>
          ))}
          <div className={styles.gaya}>Gaya apung = berat zat cair yang <b>dipindahkan</b> oleh benda (F<sub>a</sub> = ρ<sub>cair</sub> × g × V<sub>tercelup</sub>).</div>
        </div>
      </div>
    </>
  )
}
