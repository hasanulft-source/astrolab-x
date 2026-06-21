import { useState } from 'react'
import { FOLDER } from './data'
import styles from './ui.module.css'
export function Scene3File() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <>
      <p className={styles.prompt}>Sistem operasi menata data dalam <em>folder</em>. Klik folder untuk membukanya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.tree}>
            <div className={styles.root}>▾ Dokumen</div>
            {FOLDER.map((f, i) => (
              <div key={f.nama} className={styles.branch}>
                <button className={`${styles.folder} ${open === i ? styles.fOpen : ''}`} onClick={() => setOpen(open === i ? null : i)}>{open === i ? '▾' : '▸'} {f.nama}</button>
                {open === i && <div className={styles.files}>{f.isi.map(x => <div key={x} className={styles.file}>▤ {x}</div>)}</div>}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.note}>Menata file dalam folder bertema membuat data mudah ditemukan kembali - sama seperti merapikan buku di rak berdasarkan mata pelajaran.</div>
        </div>
      </div>
    </>
  )
}
