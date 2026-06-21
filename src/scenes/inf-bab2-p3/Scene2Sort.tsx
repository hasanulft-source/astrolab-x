import { useState } from 'react'
import { SISWA } from './data'
import styles from './ui.module.css'
type Key = 'asli' | 'desc' | 'asc' | 'nama'
export function Scene2Sort() {
  const [k, setK] = useState<Key>('asli')
  const rows = [...SISWA]
  if (k === 'desc') rows.sort((a, b) => b.nilai - a.nilai)
  else if (k === 'asc') rows.sort((a, b) => a.nilai - b.nilai)
  else if (k === 'nama') rows.sort((a, b) => a.nama.localeCompare(b.nama))
  return (
    <>
      <p className={styles.prompt}>Klik tombol untuk <em>mengurutkan</em> data - amati baris menata ulang.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.table}>
            <div className={styles.tHead}><span>Nama</span><span>Nilai</span></div>
            {rows.map(s => <div key={s.nama} className={styles.tRow}><span>{s.nama}</span><span className={styles.num}>{s.nilai}</span></div>)}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.sortBtns}>
            <button className={`${styles.sBtn} ${k === 'desc' ? styles.sOn : ''}`} onClick={() => setK('desc')}>Nilai tertinggi ↓</button>
            <button className={`${styles.sBtn} ${k === 'asc' ? styles.sOn : ''}`} onClick={() => setK('asc')}>Nilai terendah ↑</button>
            <button className={`${styles.sBtn} ${k === 'nama' ? styles.sOn : ''}`} onClick={() => setK('nama')}>Nama A → Z</button>
            <button className={`${styles.sBtn} ${k === 'asli' ? styles.sOn : ''}`} onClick={() => setK('asli')}>Urutan asli</button>
          </div>
          <div className={styles.note}>{k === 'desc' ? 'Sekarang peringkat 1 langsung terlihat di baris paling atas.' : k === 'asc' ? 'Nilai terendah ada di atas - berguna untuk melihat siapa yang perlu bantuan.' : k === 'nama' ? 'Urut abjad memudahkan mencari nama tertentu.' : 'Ini urutan data sebelum diolah.'}</div>
        </div>
      </div>
    </>
  )
}
