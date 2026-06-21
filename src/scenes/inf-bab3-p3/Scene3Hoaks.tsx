import { useState } from 'react'
import { FLAGS } from './data'
import styles from './ui.module.css'
export function Scene3Hoaks() {
  const [found, setFound] = useState<number[]>([])
  const mark = (i: number) => { if (!found.includes(i)) setFound([...found, i]) }
  const all = found.length === FLAGS.length
  return (
    <>
      <p className={styles.prompt}>Periksa pesan ini. Klik <em>setiap tanda bahaya</em> yang kamu temukan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.post}>
            <div className={styles.postHead}>Pesan diteruskan · grup sebelah</div>
            <div className={styles.postBody}>🚨🚨 PENTING!!! BESOK SEMUA SEKOLAH DILIBURKAN karena ada bahaya besar! Sumbernya terpercaya kok. SEBARKAN ke semua kontak sebelum terlambat!!! Jangan sampai menyesal!</div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.flags}>
            {FLAGS.map((f, i) => {
              const hit = found.includes(i)
              return <button key={i} className={`${styles.flag} ${hit ? styles.flagOn : ''}`} disabled={hit} onClick={() => mark(i)}>
                <span className={styles.flagTeks}>{f.teks}</span>
                {hit && <span className={styles.flagKet}>{f.ket}</span>}
              </button>
            })}
          </div>
          {all && <div className={styles.verdict}>5 tanda bahaya ditemukan → ini <b>HOAKS</b>. Jangan disebarkan - cek dulu ke sumber resmi sekolah.</div>}
        </div>
      </div>
    </>
  )
}
