import { useState } from 'react'
import { KOMP } from './data'
import styles from './ui.module.css'

export function Scene2Komponen() {
  const [placed, setPlaced] = useState<Record<string, string>>({})
  const [sel, setSel] = useState<string | null>(null)
  const [wrong, setWrong] = useState<string | null>(null)
  const pool = KOMP.filter(c => !placed[c.id])
  const done = pool.length === 0

  const place = (bin: string) => {
    if (!sel) return
    const c = KOMP.find(x => x.id === sel)!
    if (c.jenis === bin) { setPlaced({ ...placed, [sel]: bin }); setSel(null) }
    else { setWrong(sel); setTimeout(() => setWrong(null), 450); setSel(null) }
  }
  const chips = (bin: string) => KOMP.filter(c => placed[c.id] === bin)

  return (
    <>
      <p className={styles.prompt}>Pilih komponen, lalu klik kotak yang tepat: <em>biotik</em> atau <em>abiotik?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.bins}>
            {(['biotik', 'abiotik'] as const).map(bin => (
              <div key={bin} className={`${styles.bin} ${sel ? styles.binArm : ''}`} onClick={() => place(bin)}>
                <div className={styles.binH}>{bin === 'biotik' ? 'Biotik (hidup)' : 'Abiotik (tak hidup)'}</div>
                <div className={styles.binBody}>{chips(bin).map(c => <span key={c.id} className={styles.chipDone}>{c.nama}</span>)}</div>
              </div>
            ))}
          </div>
          <div className={styles.pool}>
            {pool.map(c => (
              <button key={c.id} className={`${styles.chip} ${sel === c.id ? styles.chipSel : ''} ${wrong === c.id ? styles.chipWrong : ''}`} onClick={() => setSel(c.id)}>{c.nama}</button>
            ))}
            {done && <span className={styles.poolDone}>Semua terpilah ✓</span>}
          </div>
        </div>
        <div className={styles.side}>
          {done
            ? <div className={styles.reveal}>Tepat. Komponen <b>biotik</b> sendiri punya peran: <b>produsen</b>, <b>konsumen</b>, dan <b>dekomposer</b> - kita dalami di rantai makanan.</div>
            : <div className={styles.allNote}>Patokan: bisa tumbuh, bernapas, dan berkembang biak → <b>biotik</b>. Tak bernyawa → <b>abiotik</b>.</div>}
        </div>
      </div>
    </>
  )
}
