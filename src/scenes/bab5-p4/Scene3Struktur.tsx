import { COUPLETS } from './data'
import styles from './ui.module.css'

function Go({ go }: { go: string }) {
  const isResult = !go.startsWith('lanjut')
  return <span className={isResult ? styles.goResult : styles.goNext}>{go}</span>
}

export function Scene3Struktur() {
  return (
    <>
      <p className={styles.prompt}>Beginilah kunci dikotomi <em>ditulis</em>: tiap nomor punya dua pilihan berlawanan.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.keyTable}>
          {COUPLETS.map(c => (
            <div key={c.no} className={styles.couplet}>
              <div className={styles.cNo}>{c.no}</div>
              <div className={styles.cOpts}>
                <div className={styles.cOpt}><span className={styles.cLabel}>{c.no}a.</span> {c.a} <span className={styles.cArrow}>→</span> <Go go={c.aGo} /></div>
                <div className={styles.cOpt}><span className={styles.cLabel}>{c.no}b.</span> {c.b} <span className={styles.cArrow}>→</span> <Go go={c.bGo} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tNote}>Setiap pasangan ciri selalu <b>berlawanan</b> (bersayap vs tidak), sehingga selalu ada satu jalur yang benar.</div>
    </>
  )
}
